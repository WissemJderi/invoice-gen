import ProfileCard from "./ProfileCard";
import UpdateSettingsForm from "./UpdateSettingsForm";

const Settings = () => {
  return (
    <div className="bg-[#1C2541] sm:mx-60 sm:my-10 sm:py-5 sm:px-40 py-3 rounded-2xl text-white mx-3">
      <ProfileCard />
      <UpdateSettingsForm />
    </div>
  );
};

export default Settings;
