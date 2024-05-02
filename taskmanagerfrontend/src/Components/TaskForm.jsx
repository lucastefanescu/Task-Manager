import React, { useCallback } from "react";
import { useState } from "react";

export default function TaskForm(prop) {
	const [title, setTitle] = useState("");
	const [taskType, setTaskType] = useState("");
	const [dueDate, setdueDate] = useState("");

	const handleCancelClick = useCallback(() => {
		prop.toggleVisibility();
	}, [prop.toggleVisibility(), prop]);
	const handleCheckWork = useCallback(() => {
		if (
			document.getElementById("personalCheckBox").checked &&
			document.getElementById("workCheckBox").checked
		) {
			document.getElementById("personalCheckBox").checked = false;
		}
		setTaskType("work");
	}, []);
	const handleCheckPersonal = useCallback(() => {
		if (
			document.getElementById("workCheckBox").checked &&
			document.getElementById("personalCheckBox").checked
		) {
			document.getElementById("workCheckBox").checked = false;
		}
		setTaskType("personal");
	}, []);
	const handleClick = useCallback(
		(e) => {
			e.preventDefault();

			const Task = {
				title,
				taskType,
				dueDate,
			};

			fetch("http://localhost:8080/Task/add", {
				method: "POST",

				headers: {
					"Content-Type": "application/json",
				},

				body: JSON.stringify(Task),
			})
				.then(() => {
					prop.toggleVisibility();
					prop.updateTasks();
				})

				.catch((error) => console.log(error));
		},
		[title, taskType, dueDate, prop]
	);

	return (
		<>
			<div className="NewTask">
				<h1>New Task</h1>
				<form>
					<div className="newTaskTitle">
						<label>Title:</label>
						<input type="text" onChange={(e) => setTitle(e.target.value)} />
					</div>
					<div className="newTaskCheckboxes">
						<div className="newTaskPersonal">
							<label>Personal:</label>
							<input
								id="personalCheckBox"
								type="checkbox"
								onChange={handleCheckPersonal}
							/>
						</div>
						<div className="newTaskWork">
							<label>Work:</label>
							<input
								id="workCheckBox"
								type="checkbox"
								onChange={handleCheckWork}
							/>
						</div>
					</div>
					<div className="newTaskDueDate">
						<label>Due Date: </label>
						<input
							type="text"
							onChange={(e) => setdueDate(e.target.value)}
						></input>
					</div>
					<br />
					<button className="newTaskCancelBtn" onClick={handleCancelClick}>
						Cancel
					</button>
					<button className="newTaskCreateBtn" onClick={handleClick}>
						Create
					</button>
				</form>
			</div>
		</>
	);
}
