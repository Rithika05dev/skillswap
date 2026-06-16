import { useState } from "react";
import { useNavigate } from "react-router-dom";
import users from "../data/users";

function Search() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.skill.toLowerCase().includes(search.toLowerCase()) ||
      user.department.toLowerCase().includes(search.toLowerCase())
  );

  const sendRequest = (user) => {
    localStorage.setItem(
      "selectedUser",
      JSON.stringify(user)
    );

    const requests =
      JSON.parse(localStorage.getItem("requests")) || [];

    requests.push(user);

    localStorage.setItem(
      "requests",
      JSON.stringify(requests)
    );

    alert(`Request Sent To ${user.name}`);

    navigate("/chat");
  };

  const viewProfile = (user) => {
    alert(
      `Name: ${user.name}
Department: ${user.department}
Skill: ${user.skill}
Can Teach: ${user.teach}
Want To Learn: ${user.learn}`
    );
  };

  return (
    <div className="page">

      <h1>Find Skill Partners</h1>

      <p className="search-subtitle">
        Connect with students, mentors and learners
        across multiple technologies.
      </p>

      <div className="search-stats">

        <div>
          <h3>100+</h3>
          <p>Students Connected</p>
        </div>

        <div>
          <h3>15+</h3>
          <p>Skills Shared</p>
        </div>

        <div>
          <h3>
            {
              JSON.parse(
                localStorage.getItem("requests")
              )?.length || 0
            }
          </h3>
          <p>Active Requests</p>
        </div>

      </div>

      <input
        className="search-bar"
        type="text"
        placeholder="Search React, Python, Java..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <div className="results">

        {filteredUsers.map((user) => (

          <div
            className="user-card"
            key={user.id}
          >

            <div className="user-header">

              <div className="avatar">
                {user.name.charAt(0)}
              </div>

              <div>
                <h2>{user.name}</h2>
                <p className="dept">
                  {user.department}
                </p>
              </div>

            </div>

            <div className="user-details">

              <p>
                <strong>Skill:</strong>{" "}
                {user.skill}
              </p>

              <p>
                <strong>Can Teach:</strong>
              </p>

              <div className="skills-tags">
                {user.teach
                  .split(",")
                  .map((skill, index) => (
                    <span key={index}>
                      {skill.trim()}
                    </span>
                  ))}
              </div>

              <br />

              <p>
                <strong>Want To Learn:</strong>
              </p>

              <div className="skills-tags">
                {user.learn
                  .split(",")
                  .map((skill, index) => (
                    <span key={index}>
                      {skill.trim()}
                    </span>
                  ))}
              </div>

            </div>

            <div className="card-buttons">

              <button
                className="view-btn"
                onClick={() =>
                  viewProfile(user)
                }
              >
                View Profile
              </button>

              <button
                className="request-btn"
                onClick={() =>
                  sendRequest(user)
                }
              >
                Send Request
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Search;