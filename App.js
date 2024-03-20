// Importation des modules importants au projet
import React, { useState, useEffect } from "react";
import {View, Text, SafeAreaView, ImageBackground, ScrollView, Alert} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ToDoBackGround from "./assets/background.png";
import { styles } from "./App.style";
import { Header } from "./components/Header/Header";
import { TextInputCompo } from "./components/textInput";
import { ButtonComponent } from "./components/buttonCompo";
import { TaskItemCompo } from "./components/taskItemCompo";
import { HistoryItemCompo } from "./components/historyItemCompo";
import { TabBottomMenu } from "./components/tabBottomMenu";

// Définition de la fonction principale App
export default function App() {
  // Déclaration des états nécessaires avec useState
  const [task, setTask] = useState(""); // Etat pour stocker la tâche en cours d'ajout
  const [tasks, setTasks] = useState([]); // Etat pour stocker la liste des tâches en cours
  const [completedTasks, setCompletedTasks] = useState([]); // Etat pour stocker la liste des tâches terminées
  const [isFirstRender, setIsFirstRender] = useState(true); // Variable pour vérifier le premier rendu de l'application
  const [isLoadUpdate, setIsLoadUpdate] = useState(false); // Variable pour vérifier si les données ont été mises à jour lors du chargement

  // Fonction pour sauvegarder les données dans AsyncStorage
  async function saveTodoList() {
    try {
      await AsyncStorage.setItem("@todolist", JSON.stringify(tasks));
    } catch (err) {
      alert("Erreur " + err);
    }
  }

  // Fonction pour charger les données depuis AsyncStorage
  async function loadTodoList() {
    try {
      const stringifiedTodoList = await AsyncStorage.getItem("@todolist");
      if (stringifiedTodoList !== null) {
        const parsedTodoList = JSON.parse(stringifiedTodoList);
        setIsLoadUpdate(true);
        setTasks(parsedTodoList);
      }
    } catch (err) {
      alert("Erreur " + err);
    }
  }

  // Effet pour charger les données lors du premier rendu de l'application
  useEffect(() => {
    if (isFirstRender) {
      loadTodoList();
      setIsFirstRender(false);
    }
  }, [isFirstRender]);

  // Effet pour sauvegarder les données chaque fois que la liste des tâches est mise à jour
  useEffect(() => {
    if (!isLoadUpdate) {
      saveTodoList();
    }
  }, [tasks]);

  // Fonction pour ajouter une tâche
  const handleAddTask = () => {
    if (!task.trim()) return;
    const newTask = {
      id: Date.now(),
      task,
      completed: false,
      date: new Date(),
    };
    setTasks([...tasks, newTask]);
    setTask("");
  };

  // Fonction pour basculer l'état d'une tâche (terminée ou non terminée)
  const handleToggleTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    const completedTask = updatedTasks.find(
      (task) => task.id === id && task.completed
    );
    if (completedTask) {
      setCompletedTasks([...completedTasks, completedTask]);
    }
    setTasks(updatedTasks.filter((task) => !task.completed));
  };

  // Fonction pour supprimer une tâche
  const handleDeleteTask = (todoToDelete) => {
    Alert.alert("Suppression", "Supprimer cette tâche ?", [
      {
        text: "Oui",
        style: "destructive",
        onPress: () => {
          const updatedTasks = tasks.filter(
            (task) => task.id !== todoToDelete.id
          );
          setTasks(updatedTasks);
        },
      },
      {
        text: "Non",
        style: "cancel",
      },
    ]);
  };

  // Calcul de la hauteur du ScrollView en fonction du nombre de tâches
  const scrollViewHeight = tasks.length * 50;

  // Rendu de l'application
  return (
    <ImageBackground style={styles.app} source={ToDoBackGround}>
      <SafeAreaView>
        {/* Header */}
        <Header />

        {/* Corps de l'application */}
        <View style={styles.body}>
          {/* Champ de saisie de la tâche */}
          <TextInputCompo value={task} onChangeText={setTask} />
          {/* Bouton d'ajout de tâche */}
          <ButtonComponent onPress={handleAddTask} />
          {/* Liste des tâches */}
          <ScrollView contentContainerStyle={{ height: scrollViewHeight }}>
            <TaskItemCompo
              tasks={tasks}
              onUpdateTask={handleToggleTask}
              onDeleteTodo={handleDeleteTask}
            />
          </ScrollView>
        </View>

        {/* Historique des tâches terminées */}
        {completedTasks.length > 0 && (
          <View>
            <HistoryItemCompo tasks={completedTasks} />
          </View>
        )}

        {/* Menu de navigation inférieur */}
        <View style={styles.footer}>
          {/* Onglets */}
          <TabBottomMenu
            selectedTabName="all"
            onPress={handleToggleTask}
            todoList={tasks}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
