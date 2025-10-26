import InvoiceInput from "./InvoiceInput";
import { motion } from "motion/react";
const NewInvoice = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      key={"newInvoice"}
      transition={{ duration: 0.3, ease: "easeIn" }}
    >
      <InvoiceInput />
    </motion.div>
  );
};

export default NewInvoice;
