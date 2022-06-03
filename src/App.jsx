import { useState } from "react";

export const App = () => {
  const [inputTodoText, setInputTodo] = useState("");
  const [incompleteTodos, setIncompleteTodo] = useState([
    "あああああ",
    "いいいいい"
  ]);
  const [completeTodos, setCompleteTodo] = useState(["うううう"]);

  const inputTodo = (event) => {
    setInputTodo(event.target.value);
  };
  const addButton = () => {
    if (inputTodoText === "") return;
    setIncompleteTodo([...incompleteTodos, inputTodoText]);
    setInputTodo("");
  };
  const deleteButton = (index) => {
    const newTodo = [...incompleteTodos];
    newTodo.splice(index, 1);
    setIncompleteTodo(newTodo);
  };
  const completeButton = (todo, index) => {
    const newTodo = [...incompleteTodos];
    const newCompleteTodo = [...completeTodos, todo];
    setCompleteTodo(newCompleteTodo);
    newTodo.splice(index, 1);
    setIncompleteTodo(newTodo);
  };

  const returnButton = (todo, index) => {
    const newTodo = [...completeTodos];
    const newIncompleteTodo = [...incompleteTodos, todo];
    setIncompleteTodo(newIncompleteTodo);
    newTodo.splice(index, 1);
    setCompleteTodo(newTodo);
  };

  return (
    <>
      <div>
        <h1>React Todo-List</h1>
      </div>
      <div>
        <input type="text" value={inputTodoText} onChange={inputTodo} />
        <button onClick={addButton}>追加</button>
      </div>
      <div>
        <p>未完了</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <li key={todo}>
                <p>{todo}</p>
                <button onClick={() => completeButton(todo, index)}>
                  完了
                </button>
                <button onClick={() => deleteButton(index)}>削除</button>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <p>完了</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <li key={todo}>
                <p>{todo}</p>
                <button onClick={() => returnButton(todo, index)}>戻す</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
