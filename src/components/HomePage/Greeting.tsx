import { greeting } from "../../utils/greeting";
import { defaultUserInfo } from "../data/defaultUserInfo";
import { motion } from "motion/react";

const Greeting = () => {
  const userInfoString = localStorage.getItem("userInfo");
  const userInfo = userInfoString
    ? JSON.parse(userInfoString)
    : defaultUserInfo;
  const currentHour: number = new Date().getHours();
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 1.5 } }}
      className="mb-15"
    >
      <h1 className="text-4xl sm:text-5xl text-center font-semibold text-white">
        {greeting(currentHour)}, {userInfo.name}
      </h1>
    </motion.div>
  );
};

export default Greeting;
