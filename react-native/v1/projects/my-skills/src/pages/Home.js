import React, { useState } from 'react';
import { View, Text, Platform, TextInput, StyleSheet, FlatList } from 'react-native';

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

import { useAsyncStorage } from '../hooks/useAsyncStorage';

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [skills, setSkills] = useAsyncStorage('@my-skills:skills', []);

  function handleAddNewSkill() {
    if (!newSkill) return;

    setSkills([...skills, newSkill]);
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

      <Button text="Add" style={{ marginTop: 20 }} onPress={handleAddNewSkill} />

      <Text style={[styles.title, { marginTop: 48, marginBottom: 24 }]}>My Skills</Text>

      <FlatList
        data={skills}
        keyExtractor={item => item}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24 }}
        renderItem={({ item: skill }) => <SkillCard skill={skill} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingTop: 70,
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
});
