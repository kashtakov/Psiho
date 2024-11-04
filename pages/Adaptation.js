import { Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

function AdaptationScreen({ navigation }) {

  useFocusEffect(()=>{
    navigation.setOptions({ headerStyle: {backgroundColor: "#0b8725"}, headerTintColor: '#fff'  })
  })
    return (
      <Text>Adaptation</Text>
    );
  }

  export default AdaptationScreen;