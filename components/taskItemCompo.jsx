import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { TaskItemCompoSty } from "./taskItemCompo.style";

export function TaskItemCompo({ tasks, onUpdateTask, onDeleteTodo }) {
  const handleToggleTask = (id) => {
    onUpdateTask(id);
  };

  const handleDeleteTask = (id) => {
    const todoToDelete = tasks.find(task => task.id === id);
    onDeleteTodo(todoToDelete);
  };

  return (
    <>
      {tasks.length > 0 &&
        tasks.map((task) => (
          <TouchableOpacity
            key={task.id}
            style={[
              TaskItemCompoSty.task,
              task.completed && TaskItemCompoSty.completedTask,
            ]}
            onPress={() => handleToggleTask(task.id)}
            onLongPress={() => handleDeleteTask(task.id)} // Ajout de l'événement onLongPress pour supprimer une tâche
          >
            <View style={TaskItemCompoSty.view_}>
              <Text style={TaskItemCompoSty.taskText}>
                {task.task}
              </Text>
              <Text style={TaskItemCompoSty.taskDate}>
                {task.date ? task.date.toLocaleDateString() : ""}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
    </>
  );
}
