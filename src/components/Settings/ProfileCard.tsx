const ProfileCard = () => {
  const userInfoString = localStorage.getItem("userInfo");
  let userInfo;
  if (userInfoString) {
    userInfo = JSON.parse(userInfoString);
  } else {
    userInfo = {
      name: "Your Company Name",
      address: "Your Street Address",
      city: "Your City, Country",
      mf: "Your Tax ID",
    };
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  }
  return (
    <div className="custom-shadow bg-[#0B132B] rounded-2xl flex flex-col items-center justify-center gap-4 p-2 py-5 m-5">
      <img src="/ppsicon.png" />
      <section className="flex flex-col text-sm sm:text-lg">
        <p>
          <b>Name:</b> {userInfo.name}
        </p>
        <p>
          <b>Address: </b>
          {userInfo.address}
        </p>
        <p>
          <b>City:</b> {userInfo.city}
        </p>
        <p>
          <b>MF:</b> {userInfo.mf}
        </p>
      </section>
    </div>
  );
};

export default ProfileCard;
