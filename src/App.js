import { useEffect, useState } from "react";
import "./App.css";
import Input from "./components/Input/Input";
import Todolist from "./components/Todolist/Todolist";

function App() {
  const [todoData, setTodoData] = useState([]);
  const [isTasksAvailable, setIsTasksAvailable] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("todos"));
    if (data === null || data.length === 0) {
      setIsTasksAvailable(false);
      setTodoData([]);
    } else {
      setIsTasksAvailable(true);
      setTodoData(data);
    }
  }, []);

  const addToLocalStorage = (arr) => {
    localStorage.removeItem("todos");
    localStorage.setItem("todos", JSON.stringify(arr));
  };

  const addTaskHandler = (task) => {
    setTodoData((prev) => {
      const updatedList = [...prev];
      updatedList.unshift({
        id: Math.random().toString(),
        task: task,
      });
      addToLocalStorage(updatedList);
      return updatedList;
    });
    setIsTasksAvailable(true);
  };

  const deleteTaskHandler = (id) => {
    setTodoData((prev) => {
      const reducedList = prev.filter((task) => task.id !== id);
      if (reducedList.length === 0) {
        setIsTasksAvailable(false);
      }
      addToLocalStorage(reducedList);
      return reducedList;
    });
  };

  return (
    <main>
      <Input addTask={addTaskHandler} />
      {!isTasksAvailable ? (
        <p className="addParagragh">Добавьте задачи</p>
      ) : (
        <Todolist todoData={todoData} deleteTask={deleteTaskHandler} />
      )}
    </main>
  );
}

export default App;
