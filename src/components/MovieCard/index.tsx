import React from 'react';

import {
    Container, View, TextTittle, TextStyle, TextHourDuration, TextDate, TextHour, Image, Content
} from './styles';
import { RectButtonProps } from 'react-native-gesture-handler';


interface MovieProps {
    thumbnail: string;
    name: string;
    style: string;
    duration: string;
    date: string;
    hour: string;
    onPress: () => void;
}
interface Props extends RectButtonProps{
    data: MovieProps
}

export function MovieCard({ data, ...rest }: Props) {
 return (
    <Container {...rest} >
        <Image source = {{uri: data.thumbnail}}/>
        <Content>
            <TextTittle>{data.name}</TextTittle>
            <View>
                <TextStyle>{data.style}</TextStyle>
                <TextHourDuration>(1h 36min)</TextHourDuration>
            </View>
            <View>
                <TextDate>{data.date}</TextDate>
                <TextHour>{data.hour}</TextHour>
            </View>
        </Content>
   
    </Container>
    
 );
}