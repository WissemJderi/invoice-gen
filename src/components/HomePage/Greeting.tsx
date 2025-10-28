import { useEffect, useState } from "react";
import { greeting } from "../../utils/greeting";
import { defaultUserInfo } from "../data/defaultUserInfo";
import { motion } from "motion/react";

const Greeting = () => {
  const [userInfo, setUserInfo] = useState(defaultUserInfo);
  useEffect(() => {
    const userInfoString = localStorage.getItem("userInfo");
    if (userInfoString) {
      setUserInfo(JSON.parse(userInfoString));
    }
  }, []);
  const currentHour = new Date().getHours();
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      className="mb-15"
    >
      <h1 className="text-4xl sm:text-5xl text-center font-semibold text-white">
        {greeting(currentHour)}, {userInfo.name}
      </h1>
    </motion.div>
  );
};

export default Greeting;
