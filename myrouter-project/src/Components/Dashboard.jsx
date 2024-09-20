
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate();

  function handleSubmit() {
    navigate("/");
  }
  return (
    <>
      <div className="text-center text-primary mt-3 h2">Dashboard</div>
      <button className="btn btn-lg btn-success" onClick={handleSubmit}>
        Back to Home
      </button>
    </>
  );
}

export default Dashboard;
