import { useState } from "react";

function Profile() {
  const [profile, setProfile] = useState(() => {
    const savedProfile = localStorage.getItem("profile");

    return savedProfile
      ? JSON.parse(savedProfile)
      : {
          name: "",
          department: "",
          email: "",
          phone: "",
          github: "",
          teach: "",
          learn: "",
          gender: "",
        };
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const saveProfile = () => {
    if (
      !profile.name.trim() ||
      !profile.department.trim() ||
      !profile.email.trim() ||
      !profile.phone.trim() ||
      !profile.github.trim() ||
      !profile.teach.trim() ||
      !profile.learn.trim() ||
      !profile.gender
    ) {
      alert("Please fill all fields!");
      return;
    }

    if (!profile.email.includes("@")) {
      alert("Enter a valid email address!");
      return;
    }

    if (!/^\d{10}$/.test(profile.phone)) {
      alert("Phone number must be exactly 10 digits!");
      return;
    }

    localStorage.setItem(
      "profile",
      JSON.stringify(profile)
    );

    alert("Profile Saved Successfully!");
  };

  const avatar =
    profile.gender === "female"
      ? "/female.png"
      : profile.gender === "male"
      ? "/male.png"
      : "/default.png";

  return (
    <div className="page">
      <div className="profile-container">

        {/* FORM SECTION */}
        <div className="profile-form">

          <h1>My Profile</h1>

          <img
            src={avatar}
            alt="avatar"
          />

          <form>

            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={profile.name}
              onChange={handleChange}
            />

            <input
              type="text"
              name="department"
              placeholder="Department"
              value={profile.department}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={profile.email}
              onChange={handleChange}
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={profile.phone}
              onChange={handleChange}
            />

            <input
              type="text"
              name="github"
              placeholder="GitHub Profile"
              value={profile.github}
              onChange={handleChange}
            />

            <input
              type="text"
              name="teach"
              placeholder="Skills I Can Teach"
              value={profile.teach}
              onChange={handleChange}
            />

            <input
              type="text"
              name="learn"
              placeholder="Skills I Want To Learn"
              value={profile.learn}
              onChange={handleChange}
            />

            <select
              name="gender"
              value={profile.gender}
              onChange={handleChange}
            >
              <option value="">
                Select Gender
              </option>

              <option value="female">
                Female
              </option>

              <option value="male">
                Male
              </option>
            </select>

            <button
              type="button"
              onClick={saveProfile}
            >
              Save Profile
            </button>

          </form>

        </div>

        {/* PROFILE PREVIEW */}
        <div className="profile-preview">

          <h2>Profile Preview</h2>

          <div className="profile-card">

            <div className="profile-top">

              <img
                src={avatar}
                alt="avatar"
                className="preview-avatar"
              />

              <div className="profile-info">

                <h2>
                  {profile.name || "Your Name"}
                </h2>

                <span className="dept-badge">
                  {profile.department || "Department"}
                </span>

              </div>

            </div>

            <div className="profile-details">

              <div className="detail-item">
                <strong>Email:</strong>{" "}
                {profile.email || "-"}
              </div>

              <div className="detail-item">
                <strong>Phone:</strong>{" "}
                {profile.phone || "-"}
              </div>

              <div className="detail-item">
                <strong>GitHub:</strong>{" "}
                {profile.github || "-"}
              </div>

              <div className="detail-item">
                <strong>Can Teach:</strong>{" "}
                {profile.teach || "-"}
              </div>

              <div className="detail-item">
                <strong>Want To Learn:</strong>{" "}
                {profile.learn || "-"}
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Profile;