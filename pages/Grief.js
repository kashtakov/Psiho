import { Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

function GriefScreen({navigation}) {

  useFocusEffect(()=>{
    navigation.setOptions({ headerStyle: {backgroundColor: "#5e6061" }, headerTintColor: '#fff'  })
  })
  
    return (
      <Text>Grief</Text>
    );
  }

  export default GriefScreen;