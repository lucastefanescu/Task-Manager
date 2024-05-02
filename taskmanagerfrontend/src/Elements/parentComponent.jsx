import React, { useCallback } from "react";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import TaskPlacement from "./TaskPlacement";
import TaskForm from "../Components/TaskForm";
import TaskInfo from "./TaskInfo";
import Navbar from "./Navbar";
import Task from "./Task";
export default function parentComponent() {
	const [taskTitle, setTaskTitle] = useState("");
	const [taskDueDate, setTaskDueDate] = useState("");
	const [taskType, setTaskType] = useState("");
	const [formVisibility, setFormVisibility] = useState(false);
	const [taskInstances, setTaskInstances] = useState([]);
	const [taskinfoVisibility, setTaskInfoVisibility] = useState(false);

	const handleTaskClicked = (title, dueDate, taskType) => {
		updateTaskType(taskType);
		updateTaskTitle(title);
		updateTaskDueDate(dueDate);
		toggleTaskInfoVisibility();
	};
	const updateTaskType = (taskType) => {
		setTaskType(taskType);
	};
	const updateTaskTitle = (title) => {
		setTaskTitle(title);
	};
	const updateTaskDueDate = (dueDate) => {
		setTaskDueDate(dueDate);
	};
	const updateTasks = useCallback(() => {
		fetch("http://localhost:8080/Task/getInstance")
			.then((res) => res.json())
			.then((result) => {
				setTaskInstances((prevTaskInstances) => [...prevTaskInstances, result]);
			})
			.catch((err) => console.log(err));
	}, []);
	const toggleVisibility = useCallback(() => {
		setFormVisibility((prevVisibility) => !prevVisibility);
	}, []);
	const toggleTaskInfoVisibility = useCallback(() => {
		setTaskInfoVisibility((prevVisibility) => !prevVisibility);
	}, []);

	return (
		<div>
			<Navbar></Navbar>
			<Sidebar toggleVisibility={toggleVisibility} />
			<TaskPlacement>
				{formVisibility && (
					<TaskForm
						updateTasks={updateTasks}
						toggleVisibility={toggleVisibility}
					/>
				)}
				{taskInstances.map((instance) => {
					return (
						<Task
							key={instance.id}
							title={instance.title}
							dueDate={instance.dueDate}
							taskType={instance.taskType}
							handleTaskClicked={handleTaskClicked}
						></Task>
					);
				})}
				{taskinfoVisibility && (
					<TaskInfo
						taskTitle={taskTitle}
						dueDate={taskDueDate}
						taskType={taskType}
						toggleInfoFormVisibility={toggleTaskInfoVisibility}
					/>
				)}
			</TaskPlacement>
		</div>
	);
}
