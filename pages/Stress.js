import { Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";


function StressScreen({ navigation }) {

  useFocusEffect(()=>{
    navigation.setOptions({ headerStyle: {backgroundColor: "#3b019a", } ,  headerTintColor: '#fff'})
  })
 

    return (
      <Text>Stress</Text>
    );
  }

  export default StressScreen;