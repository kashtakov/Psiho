import { View, Text, StyleSheet } from 'react-native';

const StressManagement = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Робота зі стресовими реакціями під час бойових дій та операцій</Text>
      <Text style={styles.subtitle}>Для роботи із солдатами, що мають стресові реакції на бойові дії та операції, використовуйте принципи 5П та БОПО</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>5 П</Text>
        <Text style={styles.item}>• Переконати, що те, що вони переживають - це нормально</Text>
        <Text style={styles.item}>• Проводити відпочинок якомога ближче до подразників</Text>
        <Text style={styles.item}>• Поповнити сили сном, водою, їжею</Text>
        <Text style={styles.item}>• Поновити впевненість за допомогою завдань з цілеспрямованою активністю</Text>
        <Text style={styles.item}>• Повернення на службу</Text>
      </View>

      <View style={styles.circleContainer}>
        <Text style={styles.circleTitle}>Допомога повинна бути якомога ближче</Text>
        <Text style={styles.circleItem}>• Почати роботу, як тільки виникли симптоми</Text>
        <Text style={styles.circleItem}>• Використовувати прості одно- або двонаправлені завдання</Text>
        <Text style={styles.circleItem}>• Висловити очікування, що солдат повернеться на службу</Text>
      </View>

      <Text style={styles.adaptation}>Адаптація під впливом стресу</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e0f2e9',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4a90e2',
  },
  item: {
    fontSize: 14,
    marginVertical: 2,
  },
  circleContainer: {
    backgroundColor: '#d0e8d0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  circleTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  circleItem: {
    fontSize: 14,
    marginVertical: 2,
  },
  adaptation: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2e7d32',
    marginTop: 20,
  },
});

export default StressManagement;