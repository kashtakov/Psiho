import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const SuicideRiskAssessmentScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>Оцінка ризику суїциду</Text>
      </View>

      {/* Assess Presence Section */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Оціни наявність:</Text>
        <Text style={styles.bulletPoint}>• Поточні суїцидальні думки</Text>
        <Text style={styles.bulletPoint}>• План суїциду</Text>
        <Text style={styles.bulletPoint}>• Бажання покінчити життя самогубством</Text>
        <Text style={styles.bulletPoint}>• Попередні спроби самогубства</Text>
        <Text style={styles.bulletPoint}>• Захисні фактори (надія та соціальні зв'язки)</Text>
      </View>

      {/* Remember Section */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Пам’ятай, що:</Text>
        <Text style={styles.bulletPoint}>• Розмова з кимось про суїцид не збільшує можливість спроби суїциду</Text>
        <Text style={styles.bulletPoint}>• Плани чи наміри збільшують ризик</Text>
        <Text style={styles.bulletPoint}>• Самопошкоджуюча поведінка є фактором ризику</Text>
      </View>

      {/* Risk Indicators Section */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Показники ризику:</Text>
        <Text style={styles.bulletPoint}>• Постійні чи нав'язливі суїцидальні думки</Text>
        <Text style={styles.bulletPoint}>• Сильний намір та план здійснити суїцид</Text>
        <Text style={styles.bulletPoint}>• Попередні спроби самогубства</Text>
        <Text style={styles.bulletPoint}>• Підозра мав випадок суїциду</Text>
        <Text style={styles.bulletPoint}>• Алкоголь є стратегією подолання труднощів</Text>
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
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  section: {
    marginVertical: 8,
    padding: 10,
    backgroundColor: '#E8F5E9',
    borderRadius: 8,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#388E3C',
    marginBottom: 8,
  },
  bulletPoint: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
});

export default SuicideRiskAssessmentScreen;
