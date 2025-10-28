# invoiceGen

🔗 [Live Demo](https://wissem-jderi-invoice-gen.vercel.app/)

A simple invoice generator built with React and TypeScript. Create professional invoices, download them as PDFs, and keep track of your billing history.

## What it does

This app lets you generate invoices with automatic tax calculations and discount support. Everything is stored locally in your browser, so no backend needed. You can customize invoices with your own logo, manage client details, and download everything as a PDF when you're done.

## Features

- Create and manage invoices with line items, quantities, and pricing
- Upload your own logo for branding
- Automatic tax calculation
- Apply discounts to invoices
- Download invoices as PDF files (using react-pdf)
- View recent invoices on the homepage
- Full invoice history
- User settings page for account info

## Tech Stack

- React + TypeScript
- React Router for navigation
- Tailwind CSS for styling
- react-pdf for PDF generation
- LocalStorage for data persistence

## Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/WissemJderi/invoiceGen.git
cd invoiceGen
npm install
```

Run the dev server:

```bash
npm run dev
```

The app should open at `http://localhost:5173` (or whatever port Vite assigns).

## Usage

1. Head to the invoice creation page
2. Fill in your client details and line items
3. The app will automatically calculate totals with tax
4. Add discounts if needed
5. Download your invoice as a PDF
6. Save the invoice

All your invoices are saved locally, so you can come back and view them anytime from the history page.

## Why I built this

Wanted to learn more about PDF generation in React and build something actually useful. Plus, it's a good excuse to practice TypeScript and work with forms/state management.

## License

MIT
