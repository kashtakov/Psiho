import { Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

function IcoverScreen({navigation}) {

  useFocusEffect(()=>{
    navigation.setOptions({ headerStyle: {backgroundColor: "#da0d09"}, headerTintColor: '#fff' })
  })
    return (
      <Text>Icover</Text>
    );
  }

  export default IcoverScreen;