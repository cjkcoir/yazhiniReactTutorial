import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  function handleSubmit() {
    navigate("/dashboard");
  }
  return (
    <>
      <div className="text-center text-primary mt-3 h2">LoginPage</div>
      <button className="btn btn-lg btn-success" onClick={handleSubmit}>
        Login
      </button>
    </>
  );
}

export default LoginPage;
