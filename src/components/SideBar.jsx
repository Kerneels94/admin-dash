/**
 * Imports
 */
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "@mui/material/Button";

const SideBar = () => {
  /**
   * State
   */
  const [isOpen, setIsOpen] = useState(true);
  const { loginWithRedirect } = useAuth0();

  /**
   * Functions
   */
  function openMenu() {
    setIsOpen(!isOpen);
  }

  /**
   * @returns conditionally check the state of the side bar
   */
  return (
    <>
      {isOpen && (
        <div className="sidebar_container flex flex-col items-start gap-3 p-5 bg-zinc-800 w-52 h-96">
          <div className="login">
            <img src="#" alt="" />
            <Button varient="outlined" onClick={() => loginWithRedirect()}>
              Login
            </Button>
          </div>
          <div className="links flex flex-col text-white text-sm">
            <a href="#">Projects</a>
            <a href="#">Skills</a>
            <a href="#">Contact</a>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
