import Greeting from "./Greeting";
import RecentInvoices from "./RecentInvoices";
import Stats from "./Stats";

const HomePage = () => {
  return (
    <div className="sm:mx-60 sm:my-10 sm:py-5">
      <Greeting />
      <RecentInvoices />
      <Stats />
    </div>
  );
};

export default HomePage;
