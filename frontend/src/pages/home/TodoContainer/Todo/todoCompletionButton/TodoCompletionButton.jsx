function TodoCompletionButton({ todo, onClick }) {
  const buttonText = todo.completed == "1" ? "Regret" : "It's done!";
  return (
    <button className="todoDoneButton" onClick={onClick}>
      {buttonText}
    </button>
  );
}

export default TodoCompletionButton;
