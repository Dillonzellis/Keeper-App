import Header from "./Component/Header/Header";
import Note from "./Component/Note/Note";
import Footer from "./Component/Footer/Footer";

import notes from "./notes";

import "./App.css";

const createNoteEntry = (data) => (
  <Note key={data.key} title={data.title} content={data.content} />
);

function App() {
  console.log(notes[0].title);
  return (
    <div className="App">
      <Header />
      {notes.map(createNoteEntry)}
      <Footer />
    </div>
  );
}

export default App;
