import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerToggleButton } from '@react-navigation/drawer';
import { Text } from 'react-native';


import AdaptationScreen from './pages/Adaptation';
import ContentsScreen from './pages/Contents';
import DrivingScreen from './pages/Driving';
import DrugsScreen from './pages/Drugs';
import GriefScreen from './pages/Grief';
import IcoverScreen from './pages/Icover';
import SkillsScreen from './pages/Skills';
import SleepScreen from './pages/Sleep';
import StressScreen from './pages/Stress';
import GurtabilityScreen from './pages/Gurtability';


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
      <Drawer.Navigator
      screenOptions={{
        drawerPosition: 'left',
        headerLeft: false,
        headerRight: ()=><DrawerToggleButton />,
      }}
      
      >
        <Drawer.Screen name="Стрес" component={StressScreen} />
        <Drawer.Screen name="iCover" component={IcoverScreen} />
        <Drawer.Screen name="Адаптація під впливом стресу" component={AdaptationScreen} />
        <Drawer.Screen name="Сон" component={SleepScreen} />
        <Drawer.Screen name="Алкоголь і наркотики" component={DrugsScreen} />
        <Drawer.Screen name="Горе" component={GriefScreen} />
        <Drawer.Screen name="Управління стресом під час операцій" component={DrivingScreen} />
        <Drawer.Screen name="Згуртованність" component={GurtabilityScreen} />
        

      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
