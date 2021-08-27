import React, { useState } from 'react';
import { View, StyleSheet, FlatList, StatusBar } from 'react-native';

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';
import { TextInput } from '../components/TextInput';
import { HeaderSkillList } from '../components/HeaderSkillList';

import { useAsyncStorage } from '../hooks/useAsyncStorage';
import { HeaderGreeting } from '../components/HeaderGreeting';

type Skill = {
  id: string;
  name: string;
};

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [inputHasError, setInputHasError] = useState(false);
  const [skills, setSkills] = useAsyncStorage<Skill[]>('@my-skills:skills', []);

  const [newUsername, setNewUsername] = useState('');
  const [username, setUsername] = useAsyncStorage('@my-skills:username', '');

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

  function handleAddNewUsername() {
    if (!newUsername) {
      setInputHasError(true);
      return;
    }

    setUsername(newUsername);
    setInputHasError(false);
  }

  async function handleTrashButton() {
    setSkills([]);
  }

  async function handleLogoutButton() {
    setSkills([]);
    setUsername('');
  }

  if (!username) {
    return (
      <View style={styles.container}>
        <HeaderGreeting name={newUsername} showLogoutButton={false} />

        <TextInput
          value={newUsername}
          hasError={inputHasError}
          style={{ marginTop: 20 }}
          placeholder="How can we call you?"
          onChangeText={setNewUsername}
        />

        <Button text="Save" style={{ marginTop: 20 }} onPress={handleAddNewUsername} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <HeaderGreeting
        name={`${username} 👋`}
        showLogoutButton
        onLogoutPress={handleLogoutButton}
      />

      <TextInput
        value={newSkill}
        placeholder="New skill"
        style={{ marginTop: 20 }}
        hasError={inputHasError}
        onChangeText={handleInputChange}
      />

      <Button text="Add" style={{ marginTop: 20 }} onPress={handleAddNewSkill} />

      <HeaderSkillList
        showTrashIcon={!!skills.length}
        onPressTrashIcon={handleTrashButton}
      />

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
    paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight + 32 : 56,
    paddingHorizontal: 30,
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
