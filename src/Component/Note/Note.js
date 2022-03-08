import "./Note.css";

const Note = (props) => {
  return (
    <div className="note-container">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
};

export default Note;
