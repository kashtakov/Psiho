import { Text, View, StyleSheet, } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

function IcoverScreen({navigation}) {

  useFocusEffect(()=>{
    navigation.setOptions({ headerStyle: {backgroundColor: "#da0d09"}, headerTintColor: '#fff' })
  })
    return (
      <View style={styles.icoverContainer}>
        <View style={styles.icoverTextBackround}><Text style={styles.icoverText} >Індефікуй побратима, що потребує допомоги</Text></View>
        <Text style={styles.icoverText}>Контакт</Text>
        <View style={styles.icoverTextBackround}><Text style={styles.icoverText}>Обіцянка бути поруч</Text></View> 
        <Text style={styles.icoverText}>Веріфікація фактів</Text>
        <View style={styles.icoverTextBackround}><Text style={styles.icoverText}>Етапи подій</Text></View> 
        <Text style={styles.icoverText}>Реалізація</Text>
      </View>
    );
  }

  export default IcoverScreen;

  const styles = StyleSheet.create({
    icoverContainer:{
     borderWidth: 1,
      width:'100%',
      alignItems:"center", 
     
    },
    icoverTextBackround:{
      width: '100%',
      backgroundColor:'#f3b29f'
    }, 
    icoverText:{
      width:'100%',
      fontSize:32,
      padding:10,
    }

  });