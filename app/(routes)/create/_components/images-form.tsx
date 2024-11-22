"use client";

import { Camera } from "lucide-react";
import { UploadClient } from "@uploadcare/upload-client";
import useAdStore from "@/store/use-ad-store";
import Image from "next/image";
import toast from "react-hot-toast";
import { useState } from "react"; // Import useState for managing loading state

const ImagesForm = () => {
  const { images, setImages } = useAdStore();
  const client = new UploadClient({
    publicKey: process.env.NEXT_PUBLIC_UPLOADCARE_API_KEY!,
  });

  // Loading state for tracking each image upload
  const [loadingImages, setLoadingImages] = useState<string[]>([]); // Array to track loading UUIDs

  const handleImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (images.length >= 5) {
      toast.error("You can upload only 5 images");
      return;
    }
    const file = event.target.files?.[0];
    if (!file) {
      console.error("No file selected.");
      return;
    }

    // Add the UUID of the image being uploaded to the loadingImages state
    const loadingUuid = `loading-${file.name}`;
    setLoadingImages((prev) => [...prev, loadingUuid]);

    try {
      const uploadedFile = await client.uploadFile(file);
      setImages([...images, uploadedFile.uuid]);
      setLoadingImages((prev) => prev.filter((uuid) => uuid !== loadingUuid)); // Remove loading state after upload
    } catch (error) {
      console.error("File upload failed:", error);
      toast.error("Something went wrong");
      setLoadingImages((prev) => prev.filter((uuid) => uuid !== loadingUuid)); // Remove loading state on error
    }
  };

  return (
    <div>
      <h2 className="text-white font-bold text-lg">Images</h2>
      <div className="mt-2 flex gap-2 gap-x-3 md:gap-4 flex-wrap justify-center md:justify-normal max-w-4xl">
        {/* Add Photo Button */}
        <div className="p-2 rounded-sm w-full max-w-[150px] min-h-[140px] md:max-w-[200px] md:min-h-[160px] border flex items-center justify-center bg-gray-600 cursor-pointer hover:bg-gray-500">
          <label
            htmlFor="file"
            className="w-full h-full flex items-center justify-center cursor-pointer"
          >
            <input onChange={handleImage} id="file" type="file" hidden />
            <p className="text-white tracking-wider underline underline-offset-8 font-bold cursor-pointer">
              Add photo
            </p>
          </label>
        </div>

        {/* Render uploaded images or loading spinner */}
        {images.map((uuid, index) => (
          <div
            key={index}
            className="p-2 rounded-sm w-full max-w-[150px] min-h-[140px] md:max-w-[200px] md:min-h-[160px] border flex items-center justify-center relative"
          >
            <Image
              src={`https://ucarecdn.com/${uuid}/`}
              alt={`Uploaded image ${index + 1}`}
              className="w-full h-full object-cover"
              fill
            />
          </div>
        ))}

        {/* Render loading indicator for in-progress uploads */}
        {loadingImages.map((loadingUuid) => (
          <div
            key={loadingUuid}
            className="p-2 rounded-sm w-full max-w-[150px] min-h-[140px] md:max-w-[200px] md:min-h-[160px] border flex items-center justify-center relative"
          >
            <div className="animate-spin rounded-full border-4 border-t-transparent border-white w-6 h-6"></div>{" "}
            {/* Spinner */}
          </div>
        ))}

        {/* Placeholder divs for empty spots */}
        {images.length + loadingImages.length < 5 &&
          Array.from({ length: 5 - images.length - loadingImages.length }).map(
            (_, index) => (
              <div
                key={`placeholder-${index}`}
                className="p-2 rounded-sm w-full max-w-[150px] min-h-[140px] md:max-w-[200px] md:min-h-[160px] border flex items-center justify-center"
              >
                <Camera className="size-6 text-white" />
              </div>
            )
          )}
      </div>
    </div>
  );
};

export default ImagesForm;
