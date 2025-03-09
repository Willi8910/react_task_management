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
import TaskItem from "./TaskItem";

function TaskList() {
  const { state } = useContext(TaskContext);

  return (
    <div className="mt-2">
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="px-4 py-2 text-left w-[160px]">ID</th>
              <th className="px-4 py-2 text-left">Task</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {state.map((task, i) => (
              <TaskItem key={task.id} task={task} index={i} />
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  );
}

export default TaskList;