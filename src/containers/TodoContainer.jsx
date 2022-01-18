import { inject, observer } from "mobx-react";
import Todo from "../components/Todo";
import { todoStore } from "../stores/RootStore";

const TodoContainer = ({ todoStore }) => {
  const todos = todoStore.todos;
  return <Todo todos={todos} />;
};

export default inject(todoStore)(observer(TodoContainer));
