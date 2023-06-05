import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: white;
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
`;
export const MovieList = styled(FlatList).attrs({
    showsVerticalScrollIndicator: false
})`

`