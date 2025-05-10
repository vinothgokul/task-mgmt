import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

import AddTaskModal from "./AddTaskModal";

const mockTasks = [
  {
    id: 1,
    date: "2024/02/26 2:00 pm",
    title: "Design Navaratri poster",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.",
  },
  {
    id: 2,
    date: "2024/02/26 2:00 pm",
    title: "Design Navaratri poster",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.",
  },
  {
    id: 3,
    date: "2024/02/26 2:00 pm",
    title: "Design Navaratri poster",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.",
  },
];

const TasksPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [tasks, setTasks] = useState(mockTasks);
  const [openAction, setOpenAction] = useState(null);

  const toggleAction = (id) => {
    setOpenAction(openAction === id ? null : id);
  };

  return (
    <div className="bg-white text-black p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-blue-800">
          Tasks Management
        </h2>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-800 text-white px-4 py-2 rounded-full hover:bg-blue-700 hover:cursor-pointer"
        >
          + Add Task
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border-separate border-spacing-y-2 text-sm">
          <thead>
            <tr className="text-blue-800 text-left">
              <th className="px-4 py-2">No</th>
              <th className="px-4 py-2">Date & Time</th>
              <th className="px-4 py-2">Task</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, idx) => (
              <tr
                key={task.id}
                className="shadow-[10px_0_10px_rgba(0,0,0,0.1)]"
              >
                <td className="p-4">{idx + 1}</td>
                <td className="p-4">{task.date}</td>
                <td className="p-4">{task.title}</td>
                <td className="p-4 truncate">{task.description}</td>
                <td className="p-4 space-x-2">
                  <BsThreeDotsVertical
                    className="text-gray-500 hover:cursor-pointer"
                    onClick={() => toggleAction(task.id)}
                  />
                  {openAction === task.id && (
                    <div className="absolute bg-white shadow-md mt-2 right-0">
                      <button
                        className="w-full text-left px-4 py-2 hover:bg-gray-100"
                        onClick={() => console.log("Edit task", task.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="w-full text-left px-4 py-2 hover:bg-gray-100"
                        onClick={() => console.log("Delete task", task.id)}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showModal && (
        <AddTaskModal
          onClose={() => setShowModal(false)}
          onAdd={(newTask) => {
            setTasks([...tasks, newTask]);
            setShowModal(false);
          }}
        />
      )}
    </div>
  );
};

export default TasksPage;
