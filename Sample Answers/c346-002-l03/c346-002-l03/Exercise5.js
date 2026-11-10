import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Movie from "./components/Movie";

// use the Movie component in components folder, to display the movie title, year, icon and poster image

export default function App() {
    return (
        <View style={styles.container}>
            <Movie
                title  = "Midway"
                year = "2020"
                icon_name={"person-rifle"}
                poster={require('./img/midway.jpg')}/>
            <Movie
                title  = "Doctor Sleep"
                year = "2019"
                icon_name={"skull"}
                poster={require('./img/doctor-sleep.jpg')}/>
            <Movie
                title  = "Titanic"
                year = "1997"
                icon_name={"pager"}
                poster={{uri: "https://freepngimg.com/thumb/titanic/110638-titanic.png"}}
            />
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
