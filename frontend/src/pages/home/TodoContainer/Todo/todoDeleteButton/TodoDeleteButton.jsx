function TodoDeleteButton({ onClick }) {
  return (
    <>
      <button className="deleteButton" onClick={onClick}>
        X
      </button>
    </>
  );
}

export default TodoDeleteButton;
