"use client";

import React, { Fragment, useContext } from 'react';
import { Button, Description, Dialog, DialogPanel, DialogTitle, Input, Transition } from '@headlessui/react';
import { UseStateProps } from "@/utils/types";
import clsx from 'clsx';
import { TaskContext } from '@/context/TaskContext';
import { toast, ToastContainer } from 'react-toastify';

function AddTaskForm({openState}: {openState: UseStateProps<boolean>}) {
  const [isOpen, setIsOpen] = openState;
  const { state, dispatch } = useContext(TaskContext);

  const [text, setText] = React.useState("");
  function handleSubmit() {
    if (text === "") {
      toast.error("Task cannot be empty");
      return;
    }

    dispatch({ type: "ADD_TASK", payload: text });
    setText("");
    toast.success("Successfully add task");
    setIsOpen(false);
  }
  
  return (
    <Dialog open={isOpen} as="div" className="relative z-100 focus:outline-none" onClose={() => setIsOpen(false)}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto default-background">
          <div className="flex min-h-full items-center justify-center p-4 ">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/80 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle as="h3" className="text-base/7 font-medium">
                Please add task form below
              </DialogTitle>
              <p className="mt-2 text-sm/6">
                You can input any task you need
              </p>
              <Input className={clsx(
                'mt-3 block w-full rounded-lg border-1 border-black bg-white/5 py-1.5 px-3 text-sm/6 text-black',
                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
              )}
                value={text} onChange={(e) => setText(e.target.value)}>
              </Input>
              <div className="mt-4 flex justify-end">
                <Button
                  className="btn-primary-outline mr-2"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  className="btn-primary"
                  onClick={handleSubmit}
                >
                  Add Task
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
  );
}

export default AddTaskForm;