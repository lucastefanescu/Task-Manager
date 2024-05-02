import React from "react";

export default function TaskInfo(props) {
	const handleDeleteClick = () => {
		props.toggleInfoFormVisibility();
	};
	return (
		<div className="TaskInfo">
			<h1>{props.taskTitle}</h1>
			<div className="TaskInfoHeaders">
				<div className="TaskInfoDueDate">
					<h3>Due Date: {props.dueDate}</h3>
				</div>
				<div className="TaskInfoTaskType">
					<h3>Task Type: {props.taskType}</h3>
				</div>
			</div>
			<div className="TaskInfoBtns">
				<button className="TaskInfoDeleteBtn" onClick={handleDeleteClick}>
					Delete
				</button>
				<button
					className="TaskInfoCloseBtn"
					onClick={props.toggleInfoFormVisibility}
				>
					Close
				</button>
			</div>
		</div>
	);
}
