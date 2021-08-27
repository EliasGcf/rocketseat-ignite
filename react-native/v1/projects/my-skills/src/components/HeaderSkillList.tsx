import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

type HeaderSkillListProps = {
  showTrashIcon: boolean;
  onPressTrashIcon: () => void;
};

export function HeaderSkillList({
  showTrashIcon,
  onPressTrashIcon,
}: HeaderSkillListProps) {
  return (
    <View style={styles.listHeader}>
      <Text style={[styles.title]}>My Skills</Text>

      {showTrashIcon && (
        <TouchableOpacity onPress={onPressTrashIcon} activeOpacity={0.7}>
          <Ionicons name="trash-outline" size={24} color="#E83F5B" />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  listHeader: {
    flexDirection: 'row',
    marginTop: 48,
    marginBottom: 24,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
