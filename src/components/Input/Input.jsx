import styles from "./Input.module.css";

import { useState } from "react";
import Button from "../Button/Button";
const Input = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(null);

  const changeInput = (event) => {
    setError(false);
    setInputValue(event.target.value);
  };

  const onTaskSubmit = (event) => {
    event.preventDefault();
    if (inputValue.length > 0) {
      props.addTask(inputValue);
      setInputValue("");
    } else {
      setError(true);
    }
  };

  return (
    <>
      <form className={styles.form} onSubmit={onTaskSubmit}>
        <input
          className={styles.input}
          type="text"
          onChange={changeInput}
          value={inputValue}
        />
        <Button type="submit">Добавить</Button>
        {error && <p className={styles.error}>*Введите задачу</p>}
      </form>
    </>
  );
};
export default Input;
