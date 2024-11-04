import { Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

function DrivingScreen({navigation}) {
  useFocusEffect(()=>{
    navigation.setOptions({ headerStyle: {backgroundColor: "#fad707" }, headerTintColor: '#fff'  })
  })

    return (
      <Text>Driving</Text>
    );
  }

  export default DrivingScreen;