function CreateNoteButton ({isNoteWrite,setNoteWrite}){
	return(
			<>
				<div 
					className="createNoteButton"
					onClick={() => setNoteWrite(!isNoteWrite)}
				>+</div>
			</>
	);
}
export default CreateNoteButton;