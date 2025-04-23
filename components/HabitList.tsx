import React from 'react';
import { View, StyleSheet } from 'react-native';
import { List, Card, Title, Paragraph, Button } from 'react-native-paper';
import { Habit } from '../types/habit';
import { format } from 'date-fns';

interface HabitListProps {
  habits: Habit[];
  onCompleteHabit: (habitId: string) => void;
  onEditHabit: (habit: Habit) => void;
}

export const HabitList: React.FC<HabitListProps> = ({
  habits,
  onCompleteHabit,
  onEditHabit,
}) => {
  return (
    <View style={styles.container}>
      {habits.map((habit) => (
        <Card key={habit.id} style={styles.card}>
          <Card.Content>
            <Title>{habit.title}</Title>
            {habit.description && <Paragraph>{habit.description}</Paragraph>}
            <Paragraph>Frequency: {habit.frequency}</Paragraph>
            <Paragraph>Current Streak: {habit.streak} days</Paragraph>
            {habit.lastCompleted && (
              <Paragraph>
                Last completed: {format(habit.lastCompleted, 'MMM d, yyyy')}
              </Paragraph>
            )}
          </Card.Content>
          <Card.Actions>
            <Button onPress={() => onCompleteHabit(habit.id)}>Complete</Button>
            <Button onPress={() => onEditHabit(habit)}>Edit</Button>
          </Card.Actions>
        </Card>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
}); 