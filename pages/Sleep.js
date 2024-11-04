import { Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

function SleepScreen({navigation}) {

  useFocusEffect(()=>{
    navigation.setOptions({ headerStyle: {backgroundColor: "#6aa6f9"}, headerTintColor: '#fff'  })
  })
  
    return (
      <Text>Sleep</Text>
    );
  }

  export default SleepScreen;