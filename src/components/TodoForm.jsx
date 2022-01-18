import { useRef } from "react";

const TodoForm = ({ add }) => {
  const inputRef = useRef();
  return (
    <div>
      <p>
        <input ref={inputRef} />
        <button onClick={click}>Add Todo</button>
      </p>
    </div>
  );

  function click() {
    add(inputRef.current.value);
  }
};

export default TodoForm;
