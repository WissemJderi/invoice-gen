const Stats = () => {
  return (
    <div className="mt-5">
      <h2 className="text-white ml-5 text-2xl">Stats:</h2>

      <div className="bg-[#1C2541] rounded-2xl mx-3 p-4 flex flex-col gap-2">
        <div id="Invoices Counter">
          <div className="flex flex-row justify-between text-white">
            <p>Total invoices created: </p>
            <p>10</p>
          </div>
          <div className="flex flex-row justify-between text-white">
            <p>Total invoices created: </p>
            <p>10</p>
          </div>
          <div className="flex flex-row justify-between text-white">
            <p>Total invoices created: </p>
            <p>10</p>
          </div>
        </div>
        <hr className="text-[#8EC78C]/50 mx-10 my-2" />
        <div id="Monthly revenue">
          <div className="flex flex-row justify-between text-white">
            <p> This month's revenue:</p>
            <p>10 500 DT</p>
          </div>
          <div className="flex flex-row justify-between text-white">
            <p>Total invoices created: </p>
            <p>10</p>
          </div>
          <div className="flex flex-row justify-between text-white">
            <p>Total invoices created: </p>
            <p>10</p>
          </div>
        </div>
        <hr className="text-[#8EC78C]/50 mx-10 my-2" />
        <div id="Invoices Counter">
          <div className="flex flex-row justify-between text-white">
            <p>Top Clients:</p>
            <p>Client1 - Client2 - CLient3</p>
          </div>
          <div className="flex flex-row justify-between text-white">
            <p>Total invoices created: </p>
            <p>10</p>
          </div>
          <div className="flex flex-row justify-between text-white">
            <p>Total invoices created: </p>
            <p>10</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
