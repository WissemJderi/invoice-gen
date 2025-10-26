import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import History from "./components/History/History.tsx";
import Settings from "./components/Settings/Settings.tsx";
import NewInvoice from "./components/NewInvoice/NewInvoice.tsx";
import InvoiceDetail from "./components/InvoiceDetail/InvoiceDetail.tsx";
import { AnimatePresence } from "motion/react";
import { Layout } from "./utils/Layout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <AnimatePresence mode="sync">
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/new-invoice" element={<NewInvoice />} />
            <Route path="/history" element={<History />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/invoices/:invoiceId" element={<InvoiceDetail />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </BrowserRouter>
  </StrictMode>,
);
