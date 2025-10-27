import { useState, useEffect } from "react";
import type { ChangeEvent } from "react";

const ProfilePic = () => {
  const [profilePic, setProfilePic] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("profilePic");
    if (saved) {
      setProfilePic(saved);
    }
  }, []);

  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type !== "image/png") {
      alert("Please upload a PNG image.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const img = reader.result as string;
      localStorage.setItem("profilePic", img);
      setProfilePic(img);
    };
    reader.readAsDataURL(file);
    if (window.confirm("Settings saved! Refresh to see changes?")) {
      window.location.reload();
    }
  };

  const handleRemove = () => {
    localStorage.removeItem("profilePic");
    setProfilePic(null);
    if (window.confirm("Settings saved! Refresh to see changes?")) {
      window.location.reload();
    }
  };

  return (
    <div className="flex flex-col items-center mt-4 space-y-3">
      <div className="flex items-center justify-center mb-6">
        {profilePic ? (
          <img
            src={profilePic}
            alt="Picture"
            className="object-cover h-[100px]"
          />
        ) : (
          <span className="text-gray-400">Set Your Profile Picture</span>
        )}
      </div>

      <label className="flex flex-col items-center px-2 py-1 bg-blue-600 text-white text-sm font-semibold rounded-md cursor-pointer hover:bg-blue-700 transition">
        {profilePic ? "Change PNG" : "Upload PNG"}
        <input
          type="file"
          accept="image/png"
          onChange={handleUpload}
          className="hidden"
        />
      </label>

      {profilePic && (
        <button
          onClick={handleRemove}
          className="px-2 py-1  text-gray-300 text-sm font-semibold rounded-md hover:text-red-400 transition"
        >
          Remove
        </button>
      )}
    </div>
  );
};

export default ProfilePic;
