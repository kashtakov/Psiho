import { Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

function IcoverScreen({navigation}) {

  useFocusEffect(()=>{
    navigation.setOptions({ headerStyle: {backgroundColor: 'red'}})
  })
    return (
      <Text>Icover</Text>
    );
  }

  export default IcoverScreen;