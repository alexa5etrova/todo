import TodoItem from "../TodoItem/TodoItem";
import styles from "./Todolist.module.css";

const Todolist = (props) => {
  return (
    <div className={styles.todolistContainer}>
      <ul className={styles.todolist}>
        {props.todoData.map((task) => (
          <TodoItem deleteTask={props.deleteTask} id={task.id} key={task.id}>
            {task.task}
          </TodoItem>
        ))}
      </ul>
    </div>
  );
};
export default Todolist;
