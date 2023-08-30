/**
 * Imports
 */
import { useAuth0 } from "@auth0/auth0-react";
import Button from "@mui/material/Button";

const SideBar = () => {
  const { loginWithRedirect } = useAuth0();

  /**
   * @returns conditionally check the state of the side bar
   */
  return (
    <>
      <div className="bg-zinc-800 text-green-200 absolute top-0 right-0 left-0 w-52 h-full flex flex-col items-center justify-center">
        <div className="flex-start">
          <img src="#" alt="" />
          <Button varient="outlined" onClick={() => loginWithRedirect()}>
            Login
          </Button>
        </div>
        <div className="links">
          <a href="#">Projects</a>
          <a href="#">Skills</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </>
  );
};

export default SideBar;
