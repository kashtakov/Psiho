import { Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

function GurtabilityScreen({navigation}) {
  useFocusEffect(()=>{
    navigation.setOptions({ headerStyle: {backgroundColor: "#f99b10" }, headerTintColor: '#fff'  })
  })

    return (
      <Text>G</Text>
    );
  }

  export default GurtabilityScreen;