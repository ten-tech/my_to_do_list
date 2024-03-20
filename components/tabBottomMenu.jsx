import { React, useState, useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { menuSty } from "./tabBottomMenu.style";

export function TabBottomMenu({ selectedTabName, onPress, todoList }) {
  const [activeTab, setActiveTab] = useState(selectedTabName);
  const [allTasks, setAllTasks] = useState([]); // Stocke toutes les tâches

  useEffect(() => {
    // Mettre à jour la liste de toutes les tâches chaque fois que todoList change
    if (todoList) {
      setAllTasks(todoList);
    }
  }, [todoList]); // La dépendance ici est todoList

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
    onPress(tabName);
  };

  const getTextStyle = (tabName) => ({
    fontWeight: "bold",
    color: tabName === activeTab ? "#2F76E5" : "black",
  });

  // Filtrer les tâches en fonction de l'onglet sélectionné
  const filteredTasks = allTasks.filter((task) => {
    if (activeTab === "inProgress") {
      return !task.completed;
    } else if (activeTab === "done") {
      return task.completed;
    } else {
      return true; // Pour l'onglet "Tout", afficher toutes les tâches
    }
  });

  const countByStatus = {
    all: allTasks.length,
    inProgress: allTasks.filter((task) => !task.completed).length,
    done: allTasks.filter((task) => task.completed).length,
  };

  return (
    <View style={menuSty.footerContainer}>
      <TouchableOpacity onPress={() => handleTabPress("all")}>
        <Text style={getTextStyle("all")}>Tout({countByStatus.all})</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTabPress("inProgress")}>
        <Text style={getTextStyle("inProgress")}>
          En cours({countByStatus.inProgress})
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTabPress("done")}>
        <Text style={getTextStyle("done")}>
          Fait ({countByStatus.done})
        </Text>
      </TouchableOpacity>
    </View>
  );
}
