import { observer } from "mobx-react";

const Todo = ({ todos }) => {
  if (todos.length === 0) {
    return (
      <div>
        <h1>할일이 없습니다.</h1>
      </div>
    );
  }
  return (
    <ul>
      {todos.map((todo) => (
        <li>{todo.text}</li>
      ))}
    </ul>
  );
};

export default observer(Todo);
