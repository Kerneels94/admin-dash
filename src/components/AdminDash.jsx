import Button from "@mui/material/Button";
import SideBar from "./sideBar";

import salaries from "../data/salaries";
import roi from "../data/roi";
import project from "../data/projectsassigned";
import staffMembers from "../data/numofstaffmember";
import currentProject from "../data/currentprojects";

const AdminDash = () => {
  return (
    <>
      <SideBar />
      <div className="dash">
        <div className="roi flex flex-col items-center justify-around p-10">
          <h2 className="text-2xl text-blue-300">Roi:</h2>
          {roi.map(function (result) {
            return (
              <>
                <p key={result.id}>{result}</p>
              </>
            );
          })}
        </div>

        <div className="project">
          <h2>Projects</h2>
          <div className="project-items">
            {project.map((projects) => {
              return (
                <>
                  <p key={projects.id}>{projects}</p>
                </>
              );
            })}
          </div>
        </div>

        <div className="project">
          <h2>Salaries</h2>
          <div className="project-items">
            {salaries.map((sal) => {
              return (
                <>
                  <p key={sal.id}>{sal}</p>
                </>
              );
            })}
          </div>
        </div>

        <div className="project">
          <h2>Staff Members</h2>
          <div className="project-items">
            {staffMembers.map((mem) => {
              return (
                <>
                  <p key={mem.id}>{mem}</p>
                </>
              );
            })}
          </div>

          <div className="project">
            <h2>Current Project</h2>
            <div className="project-items">
              {currentProject.map((currentProj) => {
                return (
                  <>
                    <p key={currentProj.id}>{currentProj}</p>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDash;
