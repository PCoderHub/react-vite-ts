import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {

    const userDetails = localStorage.getItem('user');
    const userData = userDetails ? JSON.parse(userDetails) : null;

  return (
    <main>
      {userData ? <Outlet /> : <>
        {alert('Please fill the details.')}<Navigate to='/' />
      </>}
    </main>
  )
}

export default PrivateRoute;