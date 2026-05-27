import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, useColorScheme } from 'react-native';
import { RootNavigator } from './src/navigation/RootNavigator';

export default function App() {
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#0F1F3A' }}>
        <StatusBar style='light' />
        <RootNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
}
