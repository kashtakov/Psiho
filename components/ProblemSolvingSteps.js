import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ProblemSolvingSteps = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Вирішення проблем</Text>
      <Text style={styles.description}>
        Допоможіть солдатам вирішити проблеми, які посилюють їхній стрес, навчаючи їх дотримуватися систематичних кроків
      </Text>
      <View style={styles.table}>
        <View style={[styles.row, styles.headerRow]}>
          <Text style={[styles.cell, styles.headerCell]}>Крок до вирішення проблеми</Text>
          <Text style={[styles.cell, styles.headerCell]}>Опис</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cell}>Визначити проблему</Text>
          <Text style={styles.cell}>визначити, що потребує виправлення</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cell}>Знайти альтернативи</Text>
          <Text style={styles.cell}>зберіть якомога більше можливих варіантів</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cell}>Прийняти рішення про те, що робити</Text>
          <Text style={styles.cell}>порівняйте альтернативи між собою та оберіть найкраще рішення</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cell}>Здійснити дію</Text>
          <Text style={styles.cell}>створіть план та приведіть його в дію</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cell}>Проаналізувати зроблене</Text>
          <Text style={styles.cell}>оцініть результати, щоб краще підготуватися у майбутньому</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 16,
  },
  table: {
    borderWidth: 1,
    borderColor: '#D3D3D3',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#D3D3D3',
  },
  headerRow: {
    backgroundColor: '#D0E8D0',
  },
  cell: {
    flex: 1,
    padding: 8,
    textAlign: 'center',
    fontSize: 14,
  },
  headerCell: {
    fontWeight: 'bold',
  },
});

export default ProblemSolvingSteps;
