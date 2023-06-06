import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import  { FilmDTO } from '../../dtos/FilmDTO'

const movieData = {
  name: 'Diamante de Sangue',
  style: 'Ação',
  duration: '(1h 36min)',
  date: '06/06/2023',
  hour: 'às 14:30h',
  thumbnail: 'https://www.cafecomfilme.com.br/media/k2/items/cache/d063d8b7c1471349d2847c26ce4e4d8c_XL.jpg?t=20211107_201834' 
}

export const Container = styled.View`
  flex: 1;

  align-items: flex-start;
  justify-content: flex-start;
  align-items: center;

  margin-top: 30px;
`;

export const Title = styled.Text`
  margin-top: 10px;
  color: black;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Input = styled.TextInput`
  height: 40px;
  width: 92%;
  margin-top: 30px;

  border-radius: 5px;
  padding: 10px;
  color: black;
  border-color: #0D0D0D;
  border-width: 1px;
  margin-bottom: 30px;
  background-color: white;
  
`;
export const MovieList = styled(FlatList).attrs({
    showsVerticalScrollIndicator: false
})`` as React.ComponentType as new <DataListProps>() => FlatList<DataListProps>;