import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import History from "./components/History/History.tsx";
import Settings from "./components/Settings/Settings.tsx";
import NewInvoice from "./components/NewInvoice/NewInvoice.tsx";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import InvoiceDetail from "./components/InvoiceDetail/InvoiceDetail.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/new-invoice" element={<NewInvoice />} />
        <Route path="/history" element={<History />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/invoices/:invoiceId" element={<InvoiceDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
);
