import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';
import { TextInput } from '../components/TextInput';

import { useAsyncStorage } from '../hooks/useAsyncStorage';

type Skill = {
  id: string;
  name: string;
};

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [skills, setSkills] = useAsyncStorage<Skill[]>('@my-skills:skills', []);
  const [inputHasError, setInputHasError] = useState(false);

  function handleAddNewSkill() {
    if (!newSkill) {
      setInputHasError(true);
      return;
    }

    const newData = {
      id: String(new Date().getTime()),
      name: newSkill,
    };

    setSkills(oldState => [...oldState, newData]);
    setInputHasError(false);
    setNewSkill('');
  }

  function handleInputChange(text: string) {
    setNewSkill(text);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Rodrigo 👋</Text>

      <TextInput
        value={newSkill}
        placeholder="New skill"
        style={{ marginTop: 20 }}
        hasError={inputHasError}
        onChangeText={handleInputChange}
      />

      <Button text="Add" style={{ marginTop: 20 }} onPress={handleAddNewSkill} />

      <Text style={[styles.title, { marginTop: 48, marginBottom: 24 }]}>My Skills</Text>

      <FlatList
        data={skills}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24 }}
        renderItem={({ item: skill }) => <SkillCard name={skill.name} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingTop: 70,
    paddingHorizontal: 30,
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
