"use client";

import useProfileStore from "@/store/profile-store";
import { User } from "@prisma/client";
import { UploadClient } from "@uploadcare/upload-client";
import Image from "next/image";
import toast from "react-hot-toast";

const client = new UploadClient({
  publicKey: process.env.NEXT_PUBLIC_UPLOADCARE_API_KEY!,
});

interface ImageFormProps {
  user: User;
}

const ImageForm = ({ user }: ImageFormProps) => {
  const { setImage } = useProfileStore();
  //
  const handleImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      console.error("No file selected.");
      return;
    }

    try {
      const uploadedFile = await client.uploadFile(file);
      setImage(uploadedFile.uuid);
    } catch (error) {
      console.error("File upload failed:", error);
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="flex items-center gap-x-3">
      <div className="p-1 rounded-lg w-[130px] h-[130px] relative border overflow-hidden">
        <Image
          fill
          alt="logo"
          src={
            user.profileImage
              ? `https://ucarecdn.com/${user.profileImage}/`
              : "/profile.png"
          }
        />
      </div>
      <div>
        <label
          htmlFor="upload"
          className="block p-2 px-3 rounded-md bg-slate-600 hover:bg-slate-500"
        >
          Change Avatar
        </label>
        <input onChange={handleImage} id="upload" type="file" hidden />
        <p className="text-xs text-gray-400 mt-2 ml-3">JPG, SVG or PNG.</p>
      </div>
    </div>
  );
};

export default ImageForm;
