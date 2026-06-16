import { useEffect, useState } from "react";

function Requests() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const savedRequests =
      JSON.parse(localStorage.getItem("requests")) || [];

    setRequests(savedRequests);
  }, []);

  const updateStatus = (index, status) => {
    const updatedRequests = [...requests];

    updatedRequests[index].status = status;

    setRequests(updatedRequests);

    localStorage.setItem(
      "requests",
      JSON.stringify(updatedRequests)
    );
  };

  return (
    <div className="page">

      <h1>Requests</h1>

      {requests.length === 0 ? (
        <p>No Requests Yet</p>
      ) : (
        requests.map((user, index) => (

          <div
            className="request-card"
            key={index}
          >

            <div className="request-left">

              <div className="request-avatar">
                {user.name.charAt(0)}
              </div>

              <div>

                <h2 className="request-name">
                  {user.name}
                </h2>

                <p className="request-skill">
                  Skill: {user.skill}
                </p>

                <p className="request-status">
                  Status:
                  <span
                    className={
                      user.status === "Accepted"
                        ? "accepted"
                        : user.status === "Rejected"
                        ? "rejected"
                        : "pending"
                    }
                  >
                    {" "}
                    {user.status || "Pending"}
                  </span>
                </p>

              </div>

            </div>

            <div className="request-buttons">

              <button
                className="accept-btn"
                onClick={() =>
                  updateStatus(
                    index,
                    "Accepted"
                  )
                }
              >
                Accept
              </button>

              <button
                className="reject-btn"
                onClick={() =>
                  updateStatus(
                    index,
                    "Rejected"
                  )
                }
              >
                Reject
              </button>

            </div>

          </div>

        ))
      )}

    </div>
  );
}

export default Requests;