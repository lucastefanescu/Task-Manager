import React from "react";

export default function Task(props) {
	const handleTaskClick = () => {
		props.handleTaskClicked(props.title, props.dueDate, props.taskType);
	};
	return (
		<div className="Task" onClick={handleTaskClick}>
			<h4>{props.title}</h4>
		</div>
	);
}
