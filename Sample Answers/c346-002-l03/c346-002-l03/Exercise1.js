import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

/*Exercise #1
  Create a new function component named "Movie".
  This Movie component accepts 2 properties - "title" and "year". It will display the text as
  "<title> <year>". For example, "Doctor Sleep 2019".*/

const Movie = ({title, year})=> {
  return (
      <View>
        <Text>
          {title} {year}
        </Text>
      </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Movie title  = "Avenger 5" year = "2026" />
      <Movie title  = "Titanic" year = "1997" />
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
