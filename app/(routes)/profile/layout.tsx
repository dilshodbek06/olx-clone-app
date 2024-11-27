import Sidebar from "./_components/sidebar";

const ProfileLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="my-3">
        <Sidebar />
      </div>
      {children}
    </div>
  );
};

export default ProfileLayout;
