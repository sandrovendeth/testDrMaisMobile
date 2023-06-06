import React from 'react';

import { Container, Title, Input, MovieList } from './styles';
import { MovieCard } from '../../components/MovieCard';
import { StatusBar } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

interface Props {
    navigation: any
}

export function Home() { 
    const navigation = useNavigation<any>();

     function handleDetails(){
        navigation.navigate('MovieDetails')
    }

    const movieData = {
        name: 'Diamante de Sangue',
        style: 'Ação',
        duration: '(1h 36min)',
        date: '06/06/2023',
        hour: 'às 14:30h',
        thumbnail: 'https://www.cafecomfilme.com.br/media/k2/items/cache/d063d8b7c1471349d2847c26ce4e4d8c_XL.jpg?t=20211107_201834' 
    }
 
 return (
    <Container>
    <StatusBar barStyle={'dark-content'} />
        <Title>
            Cinéfilo
        </Title>

        <Input placeholder='Pesquise pelo nome ou categoria de filme' placeholderTextColor="#888"></Input>

        <MovieList 
            data={[1,2,3]}
            keyExtractor={item => String(item)}
            renderItem={({ item }) => <MovieCard data={movieData} onPress={() => {handleDetails}} />}
        />
    </Container>
 );
}