import { Image, View, Text } from 'react-native'
import movie from '../../assets/movie.png'
import { styles } from './styles'

import { MaterialCommunityIcons } from "@expo/vector-icons";

export function Empty() {
    return <View style={styles.emptyContainer}>
        <MaterialCommunityIcons name="television-classic" size={70} color="black"/>
        <Text style={styles.textBold}>Você não tem filmes cadastrados</Text>
        <Text style={styles.textBold}>Organize seus filmes e seus horários</Text>
    </View>
}