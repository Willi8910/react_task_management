"use client";

import AddTaskForm from "@/components/tasks/AddTaskForm";
import TaskList from "@/components/tasks/TaskList";
import { TaskContext } from "@/context/TaskContext";
import React from "react";
import { useContext } from "react";

function TaskView() {
  const { resetTasks } = useContext(TaskContext);
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <div className="flex">
        <button type="button" onClick={resetTasks} className="btn-primary">Default</button>
        <button type="button" onClick={() => setIsOpen(true)} className="btn-primary">Add Task</button>
      </div>
      <TaskList />
      <AddTaskForm openState={[isOpen, setIsOpen]}/>
    </>
  );
}

export default TaskView;