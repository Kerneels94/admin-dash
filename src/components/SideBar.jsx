/**
 * Imports
 */
import { useAuth0 } from "@auth0/auth0-react";
import Button from "@mui/material/Button";
import folderIcon from "../assets/folder-icon.svg";
import skillsIcon from "../assets/construction.svg";
import contactIcon from "../assets/contact.svg";
import loginIcon from "../assets/login.svg";

const SideBar = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <div className="flex justify-end">
        <img src="#" alt="" />
        <Button varient="outlined" onClick={() => loginWithRedirect()}>
          <img src={loginIcon} alt="svg" className="w-8 h-8" />
          Login
        </Button>
      </div>
      <div className="bg-zinc-100 text-zinc-800 absolute top-0 right-0 left-0 w-52 h-full flex flex-col justify-center space-y-10 shadow-lg shadow-zinc-800">
        <div className="links flex flex-col gap-5 justify-end p-5">
          <div className="link-one flex flex-row items-center gap-2">
            <img src={folderIcon} alt="svg" className="w-5 h-5"></img>
            <a href="#" className="hover:text-blue-300">
              Projects
            </a>
          </div>
          <div className="link-two flex flex-row items-center gap-2">
            <img src={skillsIcon} alt="svg" className="w-5 h-5" />
            <a href="#" className="hover:text-blue-300">
              Skills
            </a>
          </div>
          <div className="link-three flex flex-row items-center gap-2">
            <img src={contactIcon} alt="svg" className="w-5 h-5" />
            <a href="#" className="hover:text-blue-300">
              Contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
