import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function RelaxationScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Прогресивна м’язова релаксація</Text>
      
      <Text style={styles.text}>
        Наведений нижче сценарій є прикладом, яким ви можете користуватись або прочитати комусь.
        Давайте час напружити та розслабити м'язи, але без перенапружень чи надриву.
      </Text>
      <Text style={styles.text}>
        Переконайтеся, що ви займаєте зручне положення, сидячи або лежачи, не схрестивши ноги.
        Зосередьтесь на своєму диханні та зробіть кілька повільних повних вдихів.
      </Text>

      <Text style={styles.sectionTitle}>Основні правила:</Text>
      <View style={styles.rulesContainer}>
        <Text style={styles.rule}>1. Зосереджуйтесь на групах м'язів</Text>
        <Text style={styles.rule}>2. Поступово збільшуйте контроль над своїм тілом</Text>
        <Text style={styles.rule}>3. Утримуйте напругу, а потім відпускайте</Text>
        <Text style={styles.rule}>4. Зверніть увагу на обидва відчуття</Text>
      </View>

      <Text style={styles.text}>
        Зосередьтесь на своїй голові. Зробіть вдих через ніс і під час цього напружте м'язи чола,
        піднявши брови вгору. Затримайтесь на кілька секунд, зверніть увагу на напружені відчуття.
        Видихніть, зніміть напругу.
      </Text>

      {/* Остальной текст может быть продолжен аналогично вышеописанным секциям */}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F0F8F8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#008000',
    textAlign: 'center',
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 10,
    textAlign: 'justify',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#005500',
    marginVertical: 10,
  },
  rulesContainer: {
    backgroundColor: '#E0F7E0',
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
  },
  rule: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 5,
  },
});
