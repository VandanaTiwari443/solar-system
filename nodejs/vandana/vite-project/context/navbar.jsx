import { AuthContext } from "./context/AuthContext";
import { AuthProvider } from "./context/AuthContext";

function Navbar() {
  const { user, logout } = userContext(AuthContext);
  const storagedUser = localStorage.getItem("user");
  console.log(storagedUser);

  return (
    <div>
      {user && <h1>Hy {user.name}</h1>}
      {user && <button onClick={logout}>Logout</button>}
      {user && <div> {storagedUser.name}</div>}
    </div>
  );
}

export default Navbar;
