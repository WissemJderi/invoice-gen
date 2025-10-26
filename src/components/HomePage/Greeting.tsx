import { greeting } from "../../utils/greeting";
import { defaultUserInfo } from "../data/defaultUserInfo";

const Greeting = () => {
  const userInfoString = localStorage.getItem("userInfo");
  const userInfo = userInfoString
    ? JSON.parse(userInfoString)
    : defaultUserInfo;
  const currentHour: number = new Date().getHours();
  return (
    <div className="mb-15">
      <h1 className="text-4xl sm:text-5xl text-center font-semibold text-white">
        {greeting(currentHour)}, {userInfo.name}
      </h1>
    </div>
  );
};

export default Greeting;
