



function InputNotes({currentNote,setCurrentNote,updateNotes,notes}){

	return (
		<div>
			<input
				type="text"
				placeholder="Enter the title" 
				className="titleEnter"
				value = {currentNote.title}
				onChange={(e) => 
				setCurrentNote({...currentNote,title:e.target.value})
				}
				onKeyDown={(e) => {
					if(e.key === "Enter"){
						if(!currentNote.title.trim()){ //in normal empty string is 0 but we add !to take its reverse means this iteration will work if the text is empty
							return;
						}
						const check = notes.find(n => n.title === currentNote.title); //// if there exists another note that has the same title check will be true;
						if(check){
							alert("Same title exists");
							return;
						}
						updateNotes([...notes,{...currentNote,key:currentNote.title}]);

					}
				}
				}
			/>
			<input 
				className="contentGround"
				placeholder="Type content"
				value={currentNote.content}
				onChange={(e) => 
				setCurrentNote({...currentNote,content:e.target.value})
			}
			>
			</input>

		</div>
	);
}

export default InputNotes;