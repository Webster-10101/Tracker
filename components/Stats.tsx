import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { HabitStats } from '../types/habit';
import { format } from 'date-fns';

interface StatsProps {
  stats: HabitStats;
}

export const Stats: React.FC<StatsProps> = ({ stats }) => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Overall Progress</Title>
          <Paragraph>Total Habits: {stats.totalHabits}</Paragraph>
          <Paragraph>Completion Rate: {Math.round(stats.completionRate * 100)}%</Paragraph>
          <Paragraph>Current Streak: {stats.currentStreak} days</Paragraph>
          <Paragraph>Longest Streak: {stats.longestStreak} days</Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Weekly Progress</Title>
          {Object.entries(stats.weeklyCompletion).map(([date, count]) => (
            <Paragraph key={date}>
              {format(new Date(date), 'MMM d')}: {count} habits completed
            </Paragraph>
          ))}
        </Card.Content>
      </Card>
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