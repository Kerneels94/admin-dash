import "./App.css";
import AdminDash from "./components/AdminDash";
import Calender from "./components/Calender";
import SideBar from "./components/SideBar";
import Todo from "./components/Todo";

function App() {
  return (
    <>
      <SideBar />
      <AdminDash />
      <Calender />
      <Todo />
    </>
  );
}

export default App;
