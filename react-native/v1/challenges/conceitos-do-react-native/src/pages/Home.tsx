import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    const data: Task = {
      done: false,
      title: newTaskTitle,
      id: new Date().getTime(),
    }

    setTasks(oldState => [...oldState, data]);
  }

  function handleToggleTaskDone(id: number) {
    setTasks(oldState => {
      const newState = oldState.map(task => {
        if (task.id === id) task.done = !task.done;

        return task;
      });

      return newState;
    })
  }

  function handleRemoveTask(id: number) {
    setTasks(oldState => {
      const newState = oldState.filter(task => task.id !== id);

      return newState;
    })
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})