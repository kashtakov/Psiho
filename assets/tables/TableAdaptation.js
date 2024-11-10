import { View, Text, StyleSheet} from 'react-native';

const TableAdaptation = () =>{

  const tableHead = ['Поширени схеми некорисного мислення', 'Приклади некорисних думок', 'Приклади корисних думок'];
  const tableData = [
    ['Надмірне узагальнення: висновок на основі одного доказу.', '"Я погана людина, бо зробив цю помилку"', '"Я зробив помилку, і почуваю провину."'],
  ['Читання думок: припущення думок і намірів інших з обмеженою інформацією', 'Приклад некорисних думок: "Мій напарник не відразу відповів на моє повідомлення, тож напевно, йому байдуже через що я проходжу"', 'Приклад корисних думок: "Можливо, мій партнер зайнятий, а я стурбований, бо зазнавав образи в минулому"'],
  ['Емоційне обґрунтування: використання почуттів для висновків без урахування іншої інформації', 'Приклад некорисних думок: "Я відчуваю себе некомпетентним, тому напевно, в мене немає того, що потрібно для виконання цієї роботи"', 'Приклад корисних думок: "Навіть якщо я відчуваю себе некомпетентним, немає фактичних доказів того, що я не можу виконувати свою роботу"']
  ]
  return (
    <View style={styles.container}>
      {/* Заголовок таблицы */}
      <View style={styles.header}>
        {tableHead.map((header, index) => (
          <View key={index} style={index === 0 ? styles.firstColumnHeader : styles.headerCell}>
            <Text style={styles.headerText}>{header}</Text>
          </View>
        ))}
      </View>

      {/* Тело таблицы */}
      {tableData.map((rowData, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {rowData.map((cellData, cellIndex) => (
            <View
              key={cellIndex}
              style={cellIndex === 0 ? styles.firstColumnCell : styles.cell}
            >
              <Text style={styles.text}>{cellData}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

export default TableAdaptation;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#4CAF50', // Цвет фона заголовков
  },
  headerCell: {
    flex: 1,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  firstColumnHeader: {
    flex: 1,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#FFA500', // Цвет первого столбца в заголовке
  },
  headerText: {
    color: '#fff', // Цвет текста заголовков
    textAlign: 'center',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  firstColumnCell: {
    flex: 1,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#FFD700', // Цвет для первого столбца в теле таблицы
  },
  text: {
    textAlign: 'center',
  },
});

