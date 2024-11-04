import { Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

function DrugsScreen({navigation}) {

  useFocusEffect(()=>{
    navigation.setOptions({ headerStyle: {backgroundColor: "#e62d7a" }, headerTintColor: '#fff'  })
  })

    return (
      <Text>Drugs</Text>
    );
  }

  export default DrugsScreen;