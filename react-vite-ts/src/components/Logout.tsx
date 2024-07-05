import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom";

function Logout() {

    const navigate = useNavigate();

    const handleClick = () => {
        localStorage.removeItem('user');
        navigate('/');
    }

  return (
    <div>
      <Button variant="contained" onClick={handleClick}>Logout</Button>
    </div>
  )
}

export default Logout
