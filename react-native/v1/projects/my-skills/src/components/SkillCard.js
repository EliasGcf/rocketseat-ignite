import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export function SkillCard({ skill, ...rest }) {
  return (
    <TouchableOpacity style={styles.buttonSkill} activeOpacity={0.7} {...rest}>
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1F1E25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginBottom: 12,
  },
  textSkill: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
