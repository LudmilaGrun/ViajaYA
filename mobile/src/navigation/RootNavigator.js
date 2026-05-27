import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();
const Screen = ({ title }) => <View style={{ flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#0B1120' }}><Text style={{ color:'#fff' }}>{title}</Text></View>;

const MainTabs = () => (
  <Tabs.Navigator screenOptions={{ headerStyle:{ backgroundColor:'#0F1F3A' }, headerTintColor:'#fff', tabBarStyle:{ backgroundColor:'#1E293B' }, tabBarActiveTintColor:'#22C55E' }}>
    <Tabs.Screen name='Inicio' children={() => <Screen title='Home / Trips' />} />
    <Tabs.Screen name='Favoritos' children={() => <Screen title='Favoritos' />} />
    <Tabs.Screen name='Reservas' children={() => <Screen title='Reservas + QR' />} />
    <Tabs.Screen name='Perfil' children={() => <Screen title='Perfil y Ajustes' />} />
  </Tabs.Navigator>
);

export const RootNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name='Onboarding' children={() => <Screen title='Onboarding ViajaYA' />} />
    <Stack.Screen name='Auth' children={() => <Screen title='Login / Registro / Recuperación' />} />
    <Stack.Screen name='App' component={MainTabs} />
  </Stack.Navigator>
);
