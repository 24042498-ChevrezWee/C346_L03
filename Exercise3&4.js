import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const Movie = ({ title, year, icon_name, poster }) => {
  return (
      <View>
        <Text>
            {title} {year} <FontAwesome6 name={icon_name} size={24} color="black" />
            <Image source={poster} style={{width:400, height:500}}/>
        </Text>
      </View>
  );
};

export default function App() {
  return (
      <View style={styles.container}>
        <Movie
            title = "Avenger 5"
            year = "2026"
            icon_name={"pager"}
            poster={require('./img/doctor-sleep.jpg')}
        />
        <Movie
            title = "Titanic"
            year = "1997"
            icon_name={"pager"}
            poster={require('./img/midway.jpg')}
        />;
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
