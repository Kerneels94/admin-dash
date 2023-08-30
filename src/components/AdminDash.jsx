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

      <div className="grid-container">
        <div className="bg-zinc-800 text-white rounded-lg grid-item-1 space-y-5 p-5">
          <h2 className="text-center text-lg text-blue-300">Projects</h2>
          <div className="project-items grid grid-cols-2 gap-5">
            {project.map((projects) => {
              return (
                <>
                  <div className="p-4 shadow-lg shadow-white rounded-md">
                    <p key={projects.id}>{projects.name}</p>
                    <p key={projects.id}>{projects.github}</p>
                    <p key={projects.id}>{projects.technologies}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <div className="bg-zinc-800 text-white p-5 rounded-lg grid-item-2">
          <h2 className="text-center text-lg text-blue-300">Salaries</h2>
          <div className="project-items grid grid-cols-3 gap-5 place-items-center space-y-2">
            {salaries.map((sal) => {
              return (
                <>
                  <p key={sal.id}>{sal.name}</p>
                  <p key={sal.id}>{sal.profession}</p>
                  <p key={sal.id}>{sal.salarie}</p>
                </>
              );
            })}
          </div>
        </div>

        <div className="bg-zinc-800 text-white p-5 rounded-lg space-y-5 grid-item-3">
          <div className="">
            <h2 className="text-center text-lg text-blue-300">
              Return on investment
            </h2>
            {roi.map(function (result) {
              return (
                <>
                  <div className="grid grid-cols-2 place-items-center space-y-2">
                    <p key={result.id}>{result.year}</p>
                    <p key={result.id}>{result.income}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <div className="bg-zinc-800 text-white p-5 rounded-lg grid-item-4">
          <h2>Staff Members</h2>
          <div className="project-items">
            {staffMembers.map((mem) => {
              return (
                <>
                  <p key={mem.id}>{mem.number}</p>
                </>
              );
            })}
          </div>
        </div>

        <div className="bg-zinc-800 text-white p-5 rounded-lg grid-item-5">
          <h2>Current Project</h2>
          <div className="project-items">
            {currentProject.map((currentProj) => {
              return (
                <>
                  <p key={currentProj.id}>{currentProj.name}</p>
                  <p key={currentProj.id}>{currentProj.technologies}</p>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDash;
