import Greeting from "./Greeting";
import RecentInvoices from "./RecentInvoices";
import Stats from "./Stats";
import { motion } from "motion/react";
const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      id={"homepage"}
      transition={{ duration: 0.4, ease: "easeIn" }}
      className="sm:mx-60 sm:my-10 sm:py-5"
    >
      <Greeting />
      <RecentInvoices />
      <Stats />
    </motion.div>
  );
};

export default HomePage;
