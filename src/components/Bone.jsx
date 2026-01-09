import InputNotes from './InputNotes.jsx';

import CreateNoteButton from "./CreateNoteButton.jsx";
import {useState} from 'react';

function Bone({quote,notes,updateNotes,selectedNote,displayNotes,noteWrite,setNoteWrite,currentNote,setCurrentNote}){
	function delNotes(key){
		const afterNotes = notes.filter(note => note.key !== key);
		updateNotes(afterNotes);
	}
	const [searchTerm,setSearchTerm] = useState("");
	const filteredNotes = notes.filter(note => 
		note.title.toLowerCase().includes(searchTerm.toLowerCase())
		);
	
	return(
		<>
			<div className="backGround">
				<div className="playGround">
					<div className="hotNotes">
						<input 
							type="text"
							className="searchField"
							value={searchTerm}
							placeholder="Search"
							onChange={(e) => setSearchTerm(e.target.value)}
						/>

						<ul>
							{filteredNotes.map ((note) => ( 
								<div className="hotTitlesContainer">
									<li 
										className="hotNotesTitles"
										onClick={() => {
											displayNotes(note)
											setNoteWrite(false)
											}
										}
										key={note.title}
											>
											{note.title}
										
									</li>
									<div 
										className="delButton"
										onClick={() =>{
											delNotes(note.key);
											
										}}
									></div>
								</div>
								))}
						</ul>
					</div>
					<div className="currentNote">
						<CreateNoteButton 
							isNoteWrite={noteWrite}
							setNoteWrite={setNoteWrite}

						/>
						{noteWrite === true ? (
							<>
								<InputNotes 
									currentNote={currentNote}
									setCurrentNote={setCurrentNote}
									updateNotes={updateNotes}
									setCurrentNote={setCurrentNote}
									notes={notes}

									/>
								<div 
									className="saveButton"
									onClick={() => {
										if(!currentNote.title.trim()) {
											return;}
										const check = notes.find(n => n.title === currentNote.title);
										if(check){
											alert("Same title exists")
											return;
										}
										updateNotes([...notes,{...currentNote,key:currentNote.title}]);
										setCurrentNote({title:"",content:""});

									}}
								>Save</div>
							</>
							):(
									selectedNote ? (
								<>
									<p className="currentNoteTitle">{selectedNote.title}</p>
									<p className="currentNoteContent">
										{!selectedNote.content.trim() ? (
											"#This note does not have any content yet#"
											
											):(
												selectedNote.content
											)
										}
									</p>
								</>
								):(
									<>
										<p className="currentNoteTitle">Select a note to read or create one.</p>
										<p className="currentNoteTitle">{quote}</p>
									</>
								)	

							)}
						
						
					</div>
				</div>
			</div>
		</>
		);
}
export default Bone;
