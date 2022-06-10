import { useRef, useEffect, useState } from "react";
import Button from "../Button/Button";
import styles from "./TodoItem.module.css";

const TodoItem = (props) => {
  const taskRef = useRef();

  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    const done = () => {
      setIsMouseOver(true);
    };
    const undone = () => {
      setIsMouseOver(false);
    };
    taskRef.current.addEventListener("mousemove", done);
    taskRef.current.addEventListener("mouseleave", undone);
  }, []);

  const deleteTaskHandler = (event) => {
    event.preventDefault();
    props.deleteTask(props.id);
  };
  return (
    <li className={styles.todoItem} ref={taskRef}>
      {isMouseOver ? "Done?" : props.children}

      <div>
        <Button onClick={deleteTaskHandler}>Done</Button>
      </div>
    </li>
  );
};

export default TodoItem;
