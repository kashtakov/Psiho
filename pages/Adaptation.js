import { Text, View, Image, StyleSheet, ScrollView,} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import TableAdaptation from "../assets/tables/TableAdaptation";
import UsefulPhrasesScreen from "../components/UsfulPhrases";
import MentalStateObservationScreen from "../components/MentalStateObservationScreen";
import StressManagement from "../components/StressManagement";
import ProblemSolvingSteps from "../components/ProblemSolvingSteps";
import RelaxationScreen from "../components/RelaxationScreen";
import PsychosisInfoScreen from "../components/PsyhosisInfoScreen";
import SuicideRiskAssessmentScreen from "../components/SuicideRiskAssessmentScreen";
import SuicidePreventionScreen from "../components/SuicidePreventionScreen";

function AdaptationScreen({ navigation }) {

  useFocusEffect(()=>{
    navigation.setOptions({ headerStyle: {backgroundColor: "#0b8725"}, headerTintColor: '#fff'  })
  })
    return (
      <ScrollView>
      <View style={styles.adaptationBackground}>
          <Text style={styles.textTitle}>Боротьба з некорисним мисленням</Text>
          <View style={styles.twoRowView}>
            <View style={styles.textBlock}><Text style={styles.textParagrahp}>Під час стресу солдати схильні 
              зосереджуватися на негативі та застрягають
              у некорисних думках. Усвідомлення цих схем
              та протидія їм є ключовою навичкою психичного здоров`я
            </Text></View>
            <Image style={styles.image} source={require('../assets/brain.png')}/>
          </View>
       
      </View>
      <TableAdaptation/>
      <View  style={styles.adaptationBackground}><Text style={styles.textParagrahp}>Допомога солдату, який перебуває в стресі:</Text>
      <Text style={styles.textParagrahp}>1. Розпізнай некорисні думки.</Text>
      <Text style={styles.textParagrahp}>2. Чини їм опір.</Text>
      </View>

  <UsefulPhrasesScreen/>
  <MentalStateObservationScreen/>
  <StressManagement/>
  <ProblemSolvingSteps/>
  <RelaxationScreen/>
  <PsychosisInfoScreen/>
  <SuicideRiskAssessmentScreen/>
  <SuicidePreventionScreen/>
      </ScrollView>
    );
  }

  export default AdaptationScreen;

  const styles= StyleSheet.create({
    adaptationBackground:{
      backgroundColor:'#c5ddcd'
    },

    textTitle:{
      fontSize: 21,
      fontWeight:'700',
      alignItems:"center",
      marginLeft: 10
    },
    textBlock:{
      width:250,
      paddingLeft: 15,
      paddingTop:15,
      paddingBottom: 15
    },
    textParagrahp:{
      fontSize: 18
    },
    twoRowView:{
      flexDirection:'row',
      alignItems:"center",
      justifyContent:'space-between'

    },

    image:{
      width: 150,
      height:150
    }

  });