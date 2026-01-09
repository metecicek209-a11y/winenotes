import { useState } from 'react';
import InputNotes from "./components/InputNotes.jsx";
import './App.css';
import Bone from "./components/Bone.jsx";
import CreateNoteButton from './components/CreateNoteButton.jsx';
function App() {
  const quote= "It does not matter how slowly you go as long as you do not stop.";
  const welcome =[ {
      title:"Welcome Guide",
      content : `Welcome, in the left section you can select the note that you want to edit or read and in the right section you can add new notes by clicking on the right cross~  `,
      }]
  const [notes,updateNotes] = useState(welcome);
  const [selectedNote,setSelectedNote] = useState(null);
  const [isNoteWrite,setNoteWrite] = useState(false);
  const [currentNote,setCurrentNote] = useState({
    title: "",
    content:"",
  });

  function displayNotes(note){
    setSelectedNote(note);
  }
  return (
    <>
      <Bone 
        notes={notes}
        selectedNote={selectedNote}
        displayNotes={displayNotes}
        setSelectedNote={setSelectedNote}
        quote={quote}
        noteWrite={isNoteWrite}
        updateNotes={updateNotes}
        setNoteWrite={setNoteWrite}
        currentNote={currentNote}
        setCurrentNote={setCurrentNote}
      />
      <div className="version">V1.0 January 2026</div>
    </>
  )
}

export default App
