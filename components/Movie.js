import {Image, Text, View} from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const Movie = ({title, year, icon_name, poster})=> {
    return (
        <View>
            <Text>
                {title} {year} <FontAwesome6 name={icon_name} size={24} color="black" />
                <Image source={poster} style={{width:400, height:500}}/>
            </Text>
        </View>
    );
};

export default Movie;