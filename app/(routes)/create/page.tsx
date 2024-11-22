import ContactForm from "./_components/contact-form";
import DescriptionForm from "./_components/description-form";
import ImagesForm from "./_components/images-form";
import LocationForm from "./_components/location-form";
import MainForm from "./_components/main-form";
import SaveForm from "./_components/modal/save-form";

const CreatePage = () => {
  return (
    <div className="p-3 md:p-6">
      <h1 className="text-xl text-center md:text-left md:text-3xl text-white font-bold">
        Create an ad
      </h1>
      <div className="container max-w-6xl mt-5">
        {/* main form */}
        <div className="rounded-sm bg-slate-600 min-h-[100px] py-5 px-3 md:px-5">
          <MainForm />
        </div>
        {/* images form */}
        <div className=" mt-3 rounded-sm bg-slate-600 min-h-[100px] py-5 px-3 md:px-5">
          <ImagesForm />
        </div>
        {/* description form */}
        <div className="mt-3 rounded-sm bg-slate-600 min-h-[100px] py-5 md:px-1">
          <DescriptionForm />
        </div>
        {/* location form */}
        <div className="mt-3 rounded-sm bg-slate-600 min-h-[100px] py-5 px-3 md:px-5">
          <LocationForm />
        </div>
        {/* contact form */}
        <div className="mt-3 rounded-sm bg-slate-600 min-h-[100px] py-5 px-3 md:px-5">
          <ContactForm />
        </div>
        <div className="mt-3 rounded-sm bg-slate-600 min-h-[80px] py-5 px-3 md:px-5 flex justify-end">
          <SaveForm />
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
