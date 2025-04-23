import { Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Layout() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              title: 'Habit Tracker',
              headerShown: true,
            }}
          />
          <Stack.Screen
            name="add-habit"
            options={{
              title: 'Add New Habit',
              presentation: 'modal',
            }}
          />
          <Stack.Screen
            name="stats"
            options={{
              title: 'Statistics',
            }}
          />
        </Stack>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
