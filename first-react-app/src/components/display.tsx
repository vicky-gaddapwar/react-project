import { useNavigate } from "react-router-dom";

export default function Display() {
    const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to the First Page</h1>
      <button onClick={() => navigate('/first-page')}>Click Me</button>
      
    </div>
  );
}
