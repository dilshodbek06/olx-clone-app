import prisma from "@/lib/db";
import ImageForm from "./_components/image-form";
import MainForm from "./_components/main-form";
import { redirect } from "next/navigation";
import { getUser } from "@/lib/dal";

const SettingsPage = async () => {
  const user = await getUser();
  const currentUser = await prisma.user.findUnique({
    where: {
      id: user?.id,
    },
  });

  if (!currentUser) {
    return redirect("/");
  }

  return (
    <div className="text-white mt-2">
      <div className="container mx-auto max-w-3xl p-3">
        <ImageForm user={currentUser} />
        <MainForm user={currentUser} />
      </div>
    </div>
  );
};

export default SettingsPage;
