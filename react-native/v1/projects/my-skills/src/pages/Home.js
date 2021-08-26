import React, { useState } from 'react';
import {
  View,
  Text,
  Platform,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [skills, setSkills] = useState([]);

  function handleAddNewSkill() {
    setSkills(oldState => [...oldState, newSkill]);
    setNewSkill('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Rodrigo</Text>

      <TextInput
        value={newSkill}
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.button}
        onPress={handleAddNewSkill}
      >
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>

      <Text style={[styles.title, { marginVertical: 50 }]}>My Skills</Text>

      {skills.map((skill, index) => {
        return (
          <TouchableOpacity key={index} style={styles.buttonSkill} activeOpacity={0.7}>
            <Text style={styles.textSkill}>{skill}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
  button: {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
  buttonSkill: {
    backgroundColor: '#1F1E25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginBottom: 12
  },
  textSkill: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
