import { Image, View, Text } from 'react-native'
import movie from '../../assets/movie.png'
import { styles } from './styles'

export function Empty() {
    return <View style={styles.emptyContainer}>
        <Image source={movie} style={styles.image} />
        <Text style={styles.textBold}>Você não tem filmes cadastrados</Text>
        <Text style={styles.textBold}>Adicione seus filmes e seus horários</Text>
    </View>
}