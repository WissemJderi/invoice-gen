import { PDFDownloadLink, PDFViewer, StyleSheet } from "@react-pdf/renderer";

import { InvoicePDF } from "./PDF";

import { Buffer } from "buffer";

globalThis.Buffer = Buffer;

interface InvoiceFormProps {
  invoiceData: Record<string, string | number>;
}

// bg-[#8EC78C] rounded-md mx-30 my-2
const styles = StyleSheet.create({
  downloadButton: {
    backgroundColor: "#8ec78c",
    borderRadius: "0.375rem",
    margin: "20px",
  },
});

const PDFHolder = ({ invoiceData }: InvoiceFormProps) => {
  return (
    <div className="h-[900px] flex justify-center flex-col">
      {
        <PDFViewer width={"100%"} height={"100%"}>
          <InvoicePDF invoiceData={invoiceData} />
        </PDFViewer>
      }

      {
        <button className="bg-[#8EC78C] rounded-md sm:mx-30 sm:my-2 text-md my-3 mx-6 p-2 cursor-pointer">
          <PDFDownloadLink
            document={<InvoicePDF invoiceData={invoiceData} />}
            fileName={`facture-${invoiceData.invoiceNumber}.pdf`}
            style={styles.downloadButton}
          >
            Download
          </PDFDownloadLink>
        </button>
      }
    </div>
  );
};

export default PDFHolder;
