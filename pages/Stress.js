import { Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";


function StressScreen({ navigation }) {

  useFocusEffect(()=>{
    navigation.setOptions({ headerStyle: {backgroundColor: 'blue'}})
  })
 

    return (
      <Text>Stress</Text>
    );
  }

  export default StressScreen;