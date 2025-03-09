import AnimatePage from "@/components/commons/animations/AnimatePage";
import { TaskProvider } from "@/context/TaskContext";
import TaskView from "@/view/task/TaskView";
import RootLayout from "../layout";

export default function TaskIndex() {
  return (
    <TaskProvider>
      <TaskView />
    </TaskProvider>
  );
}
