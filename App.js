import {React, useState } from 'react';
import { Text, View, SafeAreaView, ImageBackground, ScrollView } from "react-native";
import ToDoBackGround from "./assets/background.png";
import { styles } from "./App.style";
import { Header } from "./components/Header/Header";
import { TextInputCompo } from "./components/textInput";
import { ButtonComponent } from "./components/buttonCompo";
import { TaskItemCompo } from "./components/taskItemCompo";

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    console.log("Contenu du TextInput :", task);
    if (!task.trim()) return; // Vérifier si le champ de saisie est vide
    setTasks([...tasks, { id: Date.now(), task }]);
    setTask('')
  };

  const handleRemoveTask = id => {
    console.log('Retirer la tache :', id);
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <ImageBackground style={styles.app} source={ToDoBackGround}>
      <SafeAreaView>
        <View>
          <Header />
        </View>

        <View style={styles.body}>
          <View>
            <TextInputCompo value={task} onChangeText={setTask} />
            <ButtonComponent onPress={handleAddTask} />
          </View>

          <ScrollView>
            <TaskItemCompo tasks={tasks} />
          </ScrollView>

        </View>

        <View style={styles.footer}>
          <Text>Footer</Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
