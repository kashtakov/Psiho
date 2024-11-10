import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const MentalStateObservationScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Сфери дослідження психічного стану</Text>
      <Text style={styles.subtitle}>
        Спирайтеся на наступні сфери, щоб побудувати своє спостереження під час клінічного інтерв'ю
      </Text>

      <View style={styles.section}>
        <Text style={styles.header}>Зовнішній вигляд і поведінка</Text>
        <Text style={styles.text}>Чи виглядає він/вона охайно?</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.header}>Настрій та емоції</Text>
        <Text style={styles.text}>(Настрій) Як, він/вона говорить, який в них настрій?</Text>
        <Text style={styles.text}>(Емоції) В якому він/вона емоційному стані?</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.header}>Рухова активність</Text>
        <Text style={styles.text}>
          Чи він/вона крокує із сторони в сторону, заламує руки, не може всидіти на місці?
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.header}>Орієнтування</Text>
        <Text style={styles.text}>Чи здатний/а він/вона впізнавати, де знаходиться?</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.header}>Мовлення</Text>
        <Text style={styles.text}>Чи є в нього/неї якісь значні особливості способу мовлення?</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.header}>Процес мислення</Text>
        <Text style={styles.text}>
          Чи здаються його/її думки організованими та послідовними?
        </Text>
      </View>

      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
    color: '#006400',
  },
  subtitle: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#006400',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  footer: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#008000',
    marginTop: 20,
    marginBottom: 10,
  },
});

export default MentalStateObservationScreen;
