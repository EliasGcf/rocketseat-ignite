import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type HeaderGreetingProps = {
  name: string;
  showLogoutButton: boolean;
  onLogoutPress?: () => void;
};

export function HeaderGreeting({
  name,
  onLogoutPress,
  showLogoutButton,
}: HeaderGreetingProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {name}</Text>

      {showLogoutButton && (
        <TouchableOpacity onPress={onLogoutPress} activeOpacity={0.7}>
          <MaterialIcons name="logout" size={24} color="#555" />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
