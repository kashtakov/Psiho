import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const PsychosisInfoScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Title Section */}
      <Text style={styles.title}>Психоз</Text>
      <Text style={styles.subtitle}>Ознаки та симптоми</Text>

      {/* Symptoms List */}
      <View style={styles.section}>
        <Text style={styles.bulletPoint}>• Маячення (нереалістичні, химерні переконання)</Text>
        <Text style={styles.bulletPoint}>• Галюцинації (сенсорні відчуття, не пов'язані з реальністю)</Text>
        <Text style={styles.bulletPoint}>• Неорганізоване мислення (сплутані або незрозумілі думки)</Text>
        <Text style={styles.bulletPoint}>• Дезорганізована поведінка (перезбуджена, нев'язна, неадекватна, безглузда поведінка)</Text>
        <Text style={styles.bulletPoint}>• Пасивність та відсутність реакцій (приглушене емоційне вираження, мінімальна мова)</Text>
        <Text style={styles.bulletPoint}>• Параноя (підозрілість)</Text>
      </View>

      {/* Interventions Section */}
      <Text style={styles.subtitle}>Втручання</Text>

      {/* Step 1 */}
      <View style={styles.step}>
        <Text style={styles.stepTitle}>1. Організуйте безпечне середовище та спостерігайте</Text>
        <Text style={styles.stepText}>
          Відведіть солдата в тихе, безпечне місце. Спостерігайте, щоб переконатися, що він/вона не завдає шкоди собі чи іншим.
          НЕ намагайтесь переконувати солдата, що його/її маячні переконання чи галюцинації не реальні.
        </Text>
      </View>

      {/* Step 2 */}
      <View style={styles.step}>
        <Text style={styles.stepTitle}>2. Визначте причину психозу</Text>
        <Text style={styles.stepText}>
          Виясніть наявність вживання наркотиків або травм голови, які можуть бути причиною психозу.
          Визначення і стабілізація причини сприятиме його/її одужанню.
        </Text>
      </View>

      {/* Step 3 */}
      <View style={styles.step}>
        <Text style={styles.stepTitle}>3. Евакуюйте солдата</Text>
        <Text style={styles.stepText}>
          Використовуйте евакуаційні засоби для подальшого медичного обстеження.
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
    color: '#000',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 12,
    marginBottom: 8,
    color: '#008000',
  },
  section: {
    marginVertical: 8,
    paddingHorizontal: 8,
  },
  bulletPoint: {
    fontSize: 16,
    marginBottom: 4,
    color: '#333',
  },
  step: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#E0F7FA',
    borderRadius: 8,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00796B',
  },
  stepText: {
    fontSize: 16,
    color: '#333',
    marginTop: 4,
  },
});

export default PsychosisInfoScreen;
