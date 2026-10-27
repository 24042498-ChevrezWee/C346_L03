import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Movie = ({ title, year }) => {
  return (
      <View>
        <Text>{title} {year}</Text>
      </View>
  );
};

export default function App() {
  return (
      <View style={styles.container}>
        <Movie title="Avenger 5" year="2026" />
        <Movie title="Titanic" year="1997" />;
        <StatusBar style="auto" />
      </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
