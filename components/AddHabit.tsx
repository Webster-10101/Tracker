import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, SegmentedButtons } from 'react-native-paper';
import { Habit, Frequency } from '../types/habit';

interface AddHabitProps {
  onSubmit: (habit: Omit<Habit, 'id' | 'createdAt' | 'userId' | 'streak'>) => void;
}

export const AddHabit: React.FC<AddHabitProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [frequency, setFrequency] = useState<Frequency>('daily');
  const [customDays, setCustomDays] = useState<number[]>([]);

  const handleSubmit = () => {
    onSubmit({
      title,
      description,
      frequency,
      customDays: frequency === 'custom' ? customDays : undefined,
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Habit Title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <TextInput
        label="Description (optional)"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
        multiline
      />
      <SegmentedButtons
        value={frequency}
        onValueChange={(value) => setFrequency(value as Frequency)}
        buttons={[
          { value: 'daily', label: 'Daily' },
          { value: 'weekly', label: 'Weekly' },
          { value: 'custom', label: 'Custom' },
        ]}
        style={styles.segmentedButtons}
      />
      <Button mode="contained" onPress={handleSubmit} style={styles.button}>
        Add Habit
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    marginBottom: 16,
  },
  segmentedButtons: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
}); 