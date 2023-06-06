import React, { useCallback, useEffect, useState } from 'react';
import { Container, Title, Input, MovieList } from './styles';
import { MovieCard } from '../../components/MovieCard';
import { StatusBar } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import  api  from '../../services/api'
import  { FilmDTO } from '../../dtos/FilmDTO'


export function Home() {
  const [films, setFilms] = useState<FilmDTO[]>([]);
  const navigation = useNavigation<any>();
  const [loading, setLoading] = useState(true);

  function handleDetails(idfilmes: string) {
    navigation.navigate('EditarScreen', {idfilmes});
  }

  useFocusEffect( 
    useCallback(()=>{
      async function fetchMovies() {
        try {
          const response = await api.get('http://192.168.4.4:3333/filmes');
          setFilms(response.data);
      } catch (error) {
          console.log(error)
      }finally{
        setLoading(false);
      }
    } 
   fetchMovies();
}, [])
  
  )
  


  return (
    <Container>
      <StatusBar barStyle={'dark-content'} />
      <Title>Cinéfilo</Title>

      <Input
        placeholder="Pesquise pelo nome ou categoria de filme"
        placeholderTextColor="#888"
      ></Input>

      <MovieList
        data={films}
        keyExtractor={item => item.idfilme}
        renderItem={({ item }:{item: FilmDTO}) => <MovieCard data={item} onPress={() => handleDetails(item.idfilme)}/>} 
      />
    </Container>
  );
}
