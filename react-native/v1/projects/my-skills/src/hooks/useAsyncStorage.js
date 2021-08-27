import { useState, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function useAsyncStorage(key, initialValue = '') {
  const [value, setValue] = useState(() => {
    AsyncStorage.getItem(key).then(value => {
      if (value === null) return;

      setValue(JSON.parse(value));
    });

    return initialValue;
  });

  const setValueAsync = useCallback(async value => {
    await AsyncStorage.setItem(key, JSON.stringify(value));

    setValue(value);
  }, [key]);

  return [value, setValueAsync];
}
