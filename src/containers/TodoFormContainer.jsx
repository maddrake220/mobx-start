import { inject, observer } from "mobx-react";
import { useCallback } from "react";
import TodoForm from "../components/TodoForm";
import { todoStore } from "../stores/RootStore";

const TodoFormContainer = ({ todoStore }) => {
  const add = useCallback(
    (text) => {
      todoStore.add(text);
    },
    [todoStore]
  );
  return <TodoForm add={add} />;
};

export default inject(todoStore)(observer(TodoFormContainer));
