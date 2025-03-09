"use client";

import { useReducer, useEffect, AnyActionArg, useContext } from "react";
import { createContext } from "react";
import axios from "axios";
import { clearTasksFromStorage, getTasksFromStorage, saveTasksToStorage } from "@/utils/storage";
import { TaskAction, TaskReducer, TaskState } from "@/reducer/TaskReducer";
import { Task } from "@/model/task";
import React from "react";

type TaskContextType = {
    state: TaskState;
    dispatch: React.Dispatch<TaskAction>;
    resetTasks: () => void;
};

const TaskContext = React.createContext({} as TaskContextType);
  
function TaskProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(TaskReducer, []);
    // // Load tasks from local storage or API
    const loadTasks = async () => {
        const localTasks = getTasksFromStorage();
        if (localTasks) {
            dispatch({ type: "SET_TASKS", payload: localTasks });
        } else {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5");
                const apiTasks = response.data.map((task: Task) => (task));
                dispatch({ type: "SET_TASKS", payload: apiTasks });
            } catch (error) {
                console.error("Error fetching tasks:", error);
            }
        }
    };

    const resetTasks = () => {
        clearTasksFromStorage();
        loadTasks();
    }

    useEffect(() => {
        loadTasks();
    }, []);

    useEffect(() => {
        saveTasksToStorage(state);
    }, [state]);

    return <TaskContext.Provider value={{ state, dispatch, resetTasks }}>{children}</TaskContext.Provider>;
}

function useTasks() {
    const context = useContext(TaskContext);
    if (!context) throw new Error("useTasks must be used within a TaskProvider");
    return context;
  }
  
export { TaskProvider, useTasks, TaskContext };