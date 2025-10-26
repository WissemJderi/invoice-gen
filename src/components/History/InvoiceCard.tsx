const InvoiceCard = () => {
  return (
    <div>
      <div className="bg-[#0B132B] rounded-md p-2">
        <header>
          <ul className="flex flex-row justify-around">
            <li className="text-[#8EC78C]">035</li>
            <li className="text-white">Company</li>
            <li className="text-white">Address</li>
            <li className="text-white">17/10/2025</li>
          </ul>
        </header>
        <main className="px-4">
          <section>
            <ul className="text-white text-center text-sm my-2">
              <li>Product Description</li>
              <li>Product Description</li>
            </ul>
          </section>
          <p className="text-xs text-right text-white">17 779.600 DT</p>
        </main>
      </div>
    </div>
  );
};

export default InvoiceCard;
