import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerToggleButton, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Text, View, Image, Linking, SafeAreaView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';



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

function CustomDrawerContent(props){
  return(
    
    <DrawerContentScrollView {...props} >
      <View style={{ alignItems: 'center', marginVertical: 20}}>
        <Image 
        source={require('./assets/logo126.png')}
        style={{width: 150, height: 150, }}

        />
      </View>
      <DrawerItemList {...props} />
      <View style={{flexDirection:'row', justifyContent:'space-between', padding:32, marginTop: 45, backgroundColor:'#5da665'}}>
      <Ionicons
      name='logo-instagram'
      size={30}
      style={{marginHorizontal:10}}
      onPress={()=>Linking.openURL('https://instagram.com/126_brigade')}
      
      />
       <Ionicons
      name='logo-facebook'
      size={30}
      style={{marginHorizontal:10}}
      onPress={()=>Linking.openURL('https://facebook.com/126brigadatro')}
      
      />
      
      <Ionicons
      name='logo-youtube'
      size={30}
      style={{marginHorizontal:10}}
      onPress={()=>Linking.openURL('https://youtube.com/@126brigadatro')}
      
      />

      

      </View>
    </DrawerContentScrollView>
   
  )

}

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
      drawerContent={(props)=> <CustomDrawerContent {...props}/>}
      screenOptions={{
        drawerPosition: 'left',
        headerLeft: false,
        headerRight: ()=><DrawerToggleButton />,
        headerTitleAlign: 'center',
        
      }}
      
      >
        <Drawer.Screen name="Стрес" component={StressScreen}
        options={{
         
          drawerIcon: ({focused, size})=>(
            <Ionicons name="thunderstorm-outline" size={32} color="#3b019a" />
            
          ),
          drawerLabelStyle:{ fontSize: 20}
          
        }}
        
        />
        <Drawer.Screen name="iCover" component={IcoverScreen}
         options={{
          drawerLabelStyle:{ fontSize: 20},
          drawerIcon: ({focused, size})=>(
            <Ionicons name="eye-outline" size={32} color="#da0d09" />
            
          )
        }}
        />
        <Drawer.Screen name="Адаптація під впливом стресу" component={AdaptationScreen}
        
        options={{
          drawerLabel:'Адаптація',
          drawerLabelStyle:{ fontSize: 20},
          drawerIcon: ({focused, size})=>(
            <Ionicons name="flower-outline" size={32} color="#0b8725" />
            
          )
        }}

        />
        <Drawer.Screen name="Сон" component={SleepScreen}
         options={{
          drawerLabelStyle:{ fontSize: 20},
          drawerIcon: ({focused, size})=>(
            <Ionicons name="moon-outline" size={32} color="#6aa6f9" />  
          )
        }}
        
        />
        <Drawer.Screen name="Алкоголь і наркотики" component={DrugsScreen}
        options={{
          drawerLabel:'Алкоголь',
          drawerLabelStyle:{ fontSize: 20},
          drawerIcon: ({focused, size})=>(
            <Ionicons name="wine-outline" size={32} color="#e62d7a" />  
          )
        }}
        
        />
        <Drawer.Screen name="Горе" component={GriefScreen}
        options={{
          drawerLabel:'Горе',
          drawerLabelStyle:{ fontSize: 20},
          drawerIcon: ({focused, size})=>(
            <Ionicons name="heart-half-outline" size={32} color="#000609" />  
          )
        }}
        
        />
        <Drawer.Screen name="Управління стресом під час операцій" component={DrivingScreen}
        
        options={{
          drawerLabel:'Управління',
          drawerLabelStyle:{ fontSize: 20},
          drawerIcon: ({focused, size})=>(
            <Ionicons name="build-outline" size={32} color="#fad707" />  
          )
        }}
        
        />
        <Drawer.Screen name="Згуртованність" component={GurtabilityScreen} 
          options={{
            drawerLabel:'Згуртованність',
            drawerLabelStyle:{ fontSize: 20},
            drawerIcon: ({focused, size})=>(
              <Ionicons name="people-outline" size={32} color="#f99b10" />  
            )
          }}
        />
        

      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
