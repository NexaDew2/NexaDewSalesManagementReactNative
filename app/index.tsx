import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { View, Text } from 'react-native';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace('/Login');
    }, 100); // delay until layout mounts

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View>
      <Text>Redirecting to Login...</Text>
    </View>
  );
}
