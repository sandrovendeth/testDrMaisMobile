import React from 'react';

import {
    Container, View, TextTittle, TextStyle, TextHourDuration, TextDate, TextHour, Image, Content
} from './styles';
import { RectButtonProps } from 'react-native-gesture-handler';
import { FilmDTO } from '../../dtos/FilmDTO';


interface Props extends RectButtonProps{
    data: FilmDTO, 
    onPress:() => void;
}

export function MovieCard({ data, ...rest }: Props) {
    console.log(data)
 return (
    <Container {...rest} >
        <Image source = {{uri: data.imagem}}/>
        <Content>
            <TextTittle>{data.nome}</TextTittle>
            <View>
                <TextStyle>{data.categoria}</TextStyle>
                <TextHourDuration>(1h 36min)</TextHourDuration>
            </View>
            <View>
                <TextDate>{data.data_assistir}</TextDate>
                <TextHour>{data.duracao}</TextHour>
            </View>
        </Content>
   
    </Container>
    
 );
}