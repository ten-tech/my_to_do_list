import { React } from "react";
import { TaskItemCompoSty } from "./taskItemCompo.style";
import { ScrollView, Text, TouchableOpacity } from "react-native";

export function TaskItemCompo({ tasks }) {
  return (
    <ScrollView style={TaskItemCompoSty.container}>
      {tasks.map((task) => (
        <TouchableOpacity key={task.id} style={TaskItemCompoSty.task}>
          <Text style={TaskItemCompoSty.taskText}>{task.task}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
