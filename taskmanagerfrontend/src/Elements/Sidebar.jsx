import React from "react";
import TaskForm from "../Components/TaskForm";
import { useState } from "react";

export default function Sidebar({ toggleVisibility }) {
	return (
		<div>
			<aside className="Sidebar">
				<button className="CreateTaskBTN" onClick={toggleVisibility}>
					Create Task
				</button>
			</aside>
		</div>
	);
}
