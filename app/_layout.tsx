import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // 👈 hides the title at top/left for all screens
      }}
    />
  );
}
