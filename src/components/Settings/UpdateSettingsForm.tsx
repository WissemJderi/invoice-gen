import { useState } from "react";
import { defaultUserInfo } from "../data/defaultUserInfo";

const UpdateSettingsForm = () => {
  const [userInfo, setUserInfo] = useState(() => {
    const userInfoString = localStorage.getItem("userInfo");
    if (userInfoString) {
      return JSON.parse(userInfoString);
    }
    const defaultInfo = defaultUserInfo;
    localStorage.setItem("userInfo", JSON.stringify(defaultInfo));
    return defaultInfo;
  });

  const handleChange = (field: string, value: string) => {
    setUserInfo((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    if (window.confirm("Settings saved! Refresh to see changes?")) {
      window.location.reload();
    }
  };

  const inputStyle = "bg-[#CFE3CE] rounded-sm text-black px-2";

  return (
    <div className="bg-[#1C2541] rounded-2xl mx-3 p-4 flex flex-col gap-2 text-white">
      <div className="flex flex-col gap-2 mb-6">
        <div className="flex flex-col">
          <p className="pl-2 font-semibold">Name:</p>
          <input
            type="text"
            value={userInfo.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className={inputStyle}
          />
        </div>
        <div className="flex flex-col">
          <p className="pl-2 font-semibold">Email Address:</p>
          <input
            type="email"
            value={userInfo.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className={inputStyle}
          />
        </div>
        <div className="flex flex-col">
          <p className="pl-2 font-semibold">Phone Number:</p>
          <input
            type="number"
            value={userInfo.phoneNumber}
            onChange={(e) => handleChange("phoneNumber", e.target.value)}
            className={inputStyle}
          />
        </div>

        <div className="flex flex-col">
          <p className="pl-2 font-semibold">Address:</p>
          <input
            type="text"
            value={userInfo.address}
            onChange={(e) => handleChange("address", e.target.value)}
            className={inputStyle}
          />
        </div>
        <div className="flex flex-col">
          <p className="pl-2 font-semibold">City:</p>
          <input
            type="text"
            value={userInfo.city}
            onChange={(e) => handleChange("city", e.target.value)}
            className={inputStyle}
          />
        </div>
        <div className="flex flex-col">
          <p className="pl-2 font-semibold">MF:</p>
          <input
            type="text"
            value={userInfo.mf}
            onChange={(e) => handleChange("mf", e.target.value)}
            className={inputStyle}
          />
        </div>
        <div className="flex flex-col">
          <p className="pl-2 font-semibold">Bank Name:</p>
          <input
            type="text"
            value={userInfo.bankName}
            onChange={(e) => handleChange("bankName", e.target.value)}
            className={inputStyle}
          />
        </div>
        <div className="flex flex-col">
          <p className="pl-2 font-semibold">RIB:</p>
          <input
            type="text"
            value={userInfo.rib}
            onChange={(e) => handleChange("rib", e.target.value)}
            className={inputStyle}
          />
        </div>
      </div>

      <button
        onClick={handleSave}
        className="bg-[#8EC78C] rounded-md sm:my-2 text-lg my-3 mx-6 p-2 cursor-pointer"
      >
        Save Changes
      </button>
    </div>
  );
};

export default UpdateSettingsForm;
