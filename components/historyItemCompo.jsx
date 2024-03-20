import React from "react";
import { Text, View, TouchableOpacity, ScrollView, Alert } from "react-native";
import { HistoryItemCompoSty } from "./historyItemCompo.style";

export function HistoryItemCompo({ tasks, onDeleteTodo }) {
  const handleDeleteTask = (id) => {
    const todoToDelete = tasks.find(task => task.id === id);
    Alert.alert(
      "Suppression",
      "Supprimer cette tâche ?",
      [
        {
          text: "Supprimer",
          style: "destructive",
          onPress: () => onDeleteTodo && onDeleteTodo(todoToDelete),
        },
        {
          text: "Annuler",
          style: "cancel",
        },
      ]
    );
  };

  return (
    <View>
      <Text style={HistoryItemCompoSty.title}>
        Tâches terminées
      </Text>
      <ScrollView>
        {tasks.map((task) => (
          <TouchableOpacity key={task.id} style={HistoryItemCompoSty.task} onLongPress={() => handleDeleteTask(task.id)}>
            <View>
              <Text
                style={[
                  HistoryItemCompoSty.taskText,
                  task.completed && HistoryItemCompoSty.completedTask,
                ]}
              >
                {task.task}
              </Text>
              <Text style={HistoryItemCompoSty.taskDate}>
                {task.date.toLocaleDateString()}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
