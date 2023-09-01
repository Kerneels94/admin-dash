import Button from "@mui/material/Button";
import SideBar from "./sideBar";

import salaries from "../data/salaries";
import roi from "../data/roi";
import projects from "../data/projectsassigned";
import staffMembers from "../data/numofstaffmember";
import currentProject from "../data/currentprojects";

const AdminDash = () => {
  return (
    <>
      <SideBar />

      <div className="grid-container">
        {/* Loop through the array of objects and  display the information on the front end use object destructuring to get the values from the array and use expressions to store the values*/}
        <div className="bg-zinc-800 text-white rounded-lg grid-item-1 space-y-5 p-5">
          <h2 className="text-center text-lg text-blue-300">Projects</h2>
          <div className="project-items grid grid-cols-2 gap-5">
            {projects.map((projects) => {
              const { name, github, technologies, id } = projects;
              return (
                <>
                  <div className="p-4 shadow-lg shadow-white rounded-md">
                    <p key={id}>{name}</p>
                    <p key={id}>{github}</p>
                    <p key={id}>{technologies}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        {/* Loop through the array of objects and  display the information on the front end use object destructuring to get the values from the array and use expressions to store the values*/}

        <div className="bg-zinc-800 text-white p-5 rounded-lg grid-item-2">
          <h2 className="text-center text-lg text-blue-300">Salaries</h2>
          <div className="project-items grid grid-cols-3 gap-5 place-items-center space-y-2">
            {salaries.map((sal) => {
              const { name, profession, salarie, id } = sal;
              return (
                <>
                  <p key={id}>{name}</p>
                  <p key={id}>{profession}</p>
                  <p key={id}>{salarie}</p>
                </>
              );
            })}
          </div>
        </div>
        {/* Loop through the array of objects and  display the information on the front end use object destructuring to get the values from the array and use expressions to store the values*/}

        <div className="bg-zinc-800 text-white p-5 rounded-lg space-y-5 grid-item-3">
          <div className="">
            <h2 className="text-center text-lg text-blue-300">
              Return on investment
            </h2>
            {roi.map(function (result) {
              const { year, income, id } = result;
              return (
                <>
                  <div className="grid grid-cols-2 place-items-center space-y-2">
                    <p key={id}>{year}</p>
                    <p key={id}>{income}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        {/* Loop through the array of objects and  display the information on the front end use object destructuring to get the values from the array and use expressions to store the values*/}

        <div className="bg-zinc-800 text-white p-5 rounded-lg grid-item-4">
          <h2>Staff Members</h2>
          <div className="project-items">
            {staffMembers.map((mem) => {
              const { number, id } = mem;
              return (
                <>
                  <p key={id}>{number}</p>
                </>
              );
            })}
          </div>
        </div>
        {/* Loop through the array of objects and  display the information on the front end use object destructuring to get the values from the array and use expressions to store the values*/}

        <div className="bg-zinc-800 text-white p-5 rounded-lg grid-item-5">
          <h2>Current Project</h2>
          <div className="project-items">
            {currentProject.map((currentProj) => {
              const { name, technologies, id } = currentProj;
              return (
                <>
                  <p key={id}>{name}</p>
                  <p key={id}>{technologies}</p>
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
