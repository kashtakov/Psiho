import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text } from 'react-native';

const Drawer = createDrawerNavigator();

function HomeScreen() {
  return (
    <Text>Home</Text>
  );
}

function SettingsScreen() {
  return (
    <Text>Setting</Text>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
