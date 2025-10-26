import ProfileCard from "./ProfileCard";
import UpdateSettingsForm from "./UpdateSettingsForm";
import { motion } from "motion/react";

const Settings = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeIn" }}
      key={"settings"}
      className="bg-[#1C2541] sm:mx-60 sm:my-10 sm:py-5 sm:px-40 py-3 rounded-2xl text-white mx-3"
    >
      <ProfileCard />
      <UpdateSettingsForm />
    </motion.div>
  );
};

export default Settings;
