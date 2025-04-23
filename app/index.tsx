import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { FAB, Text } from 'react-native-paper';
import { router } from 'expo-router';
import { HabitList } from '../components/HabitList';
import { Habit } from '../types/habit';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db, auth } from '../config/firebase';

export default function Home() {
  const [habits, setHabits] = useState<Habit[]>([]);

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) return;

    const q = query(
      collection(db, 'habits'),
      where('userId', '==', user.uid)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const habitsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Habit[];
      setHabits(habitsData);
    });

    return () => unsubscribe();
  }, []);

  const handleCompleteHabit = async (habitId: string) => {
    // Implement habit completion logic
  };

  const handleEditHabit = (habit: Habit) => {
    router.push({
      pathname: '/add-habit',
      params: { habit: JSON.stringify(habit) },
    });
  };

  return (
    <View style={styles.container}>
      {habits.length === 0 ? (
        <Text style={styles.emptyText}>
          No habits yet. Add your first habit to get started!
        </Text>
      ) : (
        <HabitList
          habits={habits}
          onCompleteHabit={handleCompleteHabit}
          onEditHabit={handleEditHabit}
        />
      )}
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => router.push('/add-habit')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
}); 