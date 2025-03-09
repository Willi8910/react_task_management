"use client";

import { TaskContext } from "@/context/TaskContext";
import React from "react";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { Tooltip } from 'react-tooltip'
import { toast, ToastContainer } from "react-toastify";
import { classNames } from "@/utils/functions";
import { Task } from "@/model/task";

type TaskItemProps = {
  task: Task;
  index: number;
}

function TaskItem({ task, index }: TaskItemProps) {
  const { dispatch } = useContext(TaskContext);

  const handleDelete = (id: number) => {
    dispatch({ type: "DELETE_TASK", payload: id });
    toast.success("Successfully delete task");
  };

  const handleCheck = (id: number, completed: boolean) => {
    dispatch({ type: "TOGGLE_TASK", payload: id });
    if (!completed)
      toast.success("Successfully mark task as completed");
    else
      toast.success("Successfully mark task as not completed");
  };
  
  return (
      <tr key={task.id} className={index % 2 === 0 ? "bg-gray-100" : ""}>
        <td className="px-4 py-2">{task.id}</td>
        <td className="px-4 py-2">{task.title}</td>
        <td className={classNames("px-4 py-2", task.completed ? "text-green-600" : "text-red-600")}>{task.completed ? "Completed" : "Not Completed"}</td>
        <td className="px-4 py-2 text-right">
          <FontAwesomeIcon 
            icon={faSquareCheck}  
            className="w-8 h-8 text-green-500 cursor-pointer" 
            onClick={() => handleCheck(task.id, task.completed)} 
            data-tooltip-id={"ttcheck" + task.id} data-tooltip-content={task.completed ? "Mark Task as Not Completed" : "Mark Task as Completed"}
          />
          <FontAwesomeIcon 
            icon={faTrash}  
            className="w-6 h-6 text-red-500 cursor-pointer" 
            onClick={() => handleDelete(task.id)} 
            data-tooltip-id={"ttdel" + task.id} data-tooltip-content="Delete Task"
          />
          <Tooltip id={"ttdel" + task.id} />
          <Tooltip id={"ttcheck" + task.id} />
        </td>
      </tr>
  )
}

export default TaskItem;