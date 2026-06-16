import { useEffect, useState } from "react";

function Dashboard() {
  const [stats, setStats] = useState({
    total: 0,
    accepted: 0,
    rejected: 0,
    pending: 0,
  });

  useEffect(() => {
    const requests =
      JSON.parse(localStorage.getItem("requests")) || [];

    const total = requests.length;

    const accepted = requests.filter(
      (r) => r.status === "Accepted"
    ).length;

    const rejected = requests.filter(
      (r) => r.status === "Rejected"
    ).length;

    const pending = requests.filter(
      (r) => !r.status
    ).length;

    setStats({
      total,
      accepted,
      rejected,
      pending,
    });
  }, []);

  return (
    <div className="page">
      <h1>Dashboard</h1>

      <div className="dashboard-grid">
        <div className="stat-card">
          <h2>{stats.total}</h2>
          <p>Total Requests</p>
        </div>

        <div className="stat-card">
          <h2>{stats.accepted}</h2>
          <p>Accepted</p>
        </div>

        <div className="stat-card">
          <h2>{stats.rejected}</h2>
          <p>Rejected</p>
        </div>

        <div className="stat-card">
          <h2>{stats.pending}</h2>
          <p>Pending</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;