import "./App.css";
import AddForm from "./components/AddForm";
import Header from "./components/header";
import Item from "./components/Item";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []);
  const [title, setTitle] = useState("");
  const [editId, setEditId] = useState(null);
  const [theme,setTheme] = useState("light");

  //การใช้งาน useeffect
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function deleteTask(id) {
    const result = tasks.filter((item) => item.id !== id);
    setTasks(result);
  }
  function editTask(id) {
    setEditId(id);
    const editTask = tasks.find((item) => item.id === id);
    setTitle(editTask.title);
  }
  function addTask(e) {
    e.preventDefault();
    if (!title) {
      alert("พิมพ์อะไรสักหน่อย!!");
    } else if (editId) {
      //อัพเดตข้อมูล
      const updateTask = tasks.map((item) => {
        if (item.id === editId) {
          return { ...item, title: title };
        }
        return item;
      });
      setTasks(updateTask);
      setEditId(null);
      setTitle("");
    } else {
      //เพิ่มข้อมูล
      const newTask = {
        id: Math.floor(Math.random() * 1000),
        title: title,
      };
      setTasks([...tasks, newTask]);
      setTitle("");
    }
  }
  return (
    <div className={"App "+theme}>
      <Header theme={theme} setTheme={setTheme}/>
      <div className="container">
        <AddForm
          title={title}
          setTitle={setTitle}
          addTask={addTask}
          editId={editId}
        />
        <section>
          {tasks.map((data) => (
            <Item
              key={data.id}
              d={data}
              deleteTask={deleteTask}
              editTask={editTask}
            />
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;
