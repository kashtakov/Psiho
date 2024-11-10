import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const UsefulPhrasesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Корисні фрази для оцінки</Text>

      <View style={styles.section}>
        <Text style={styles.circle}>Відкриті питання</Text>
        <Text style={styles.circle}>Уточнюючі питання</Text>
        <Text style={styles.circle}>Підтвердити або підвести підсумки</Text>
        <Text style={styles.circle}>Висловити стурбованність</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.header}>Відкриті питання</Text>
        <Text style={styles.text}>Як в тебе справи останнім часом?</Text>
        <Text style={styles.text}>Я помітив/помітила, що... Можеш розповісти мені більше про те, що відбувається?</Text>
        <Text style={styles.text}>Що ти робив/ла, щоб впоратися зі стресом?</Text>
        <Text style={styles.text}>Як вважаєш, ти справляєшся з цією ситуацією?</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.header}>Уточнювальні питання</Text>
        <Text style={styles.text}>Розкажи про це більше.</Text>
        <Text style={styles.text}>Що змушує тебе так думати?</Text>
        <Text style={styles.text}>Коли ти це помітив вперше?</Text>
        <Text style={styles.text}>Ти виявляв переживав щось подібне?</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.header}>Підтвердити або підвести підсумки</Text>
        <Text style={styles.text}>Тож, ти говориш, що...</Text>
        <Text style={styles.text}>Ти маєш на увазі, що...</Text>
        <Text style={styles.text}>Звучить так, що...</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.header}>Висловити стурбованність (Я-твердження)</Text>
        <Text style={styles.text}>Я переживаю за справи нашої команди.</Text>
        <Text style={styles.text}>Мене непокоїть, що ти так багато береш на себе і на інших.</Text>
        <Text style={styles.text}>Після того, що сталося, я хотів/хотіла б побачити, як в тебе справи.</Text>
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
  section: {
    marginBottom: 20,
  },
  circle: {
    fontSize: 16,
    color: '#FFFFFF',
    backgroundColor: '#90EE90',
    textAlign: 'center',
    borderRadius: 50,
    paddingVertical: 10,
    marginVertical: 5,
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

export default UsefulPhrasesScreen;