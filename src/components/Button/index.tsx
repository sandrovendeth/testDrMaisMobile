import React from 'react';

import {
     Container, Text
} from './styles';
import { RectButtonProps } from 'react-native-gesture-handler';

interface Props extends RectButtonProps{
    title: string;
    type: 'editar' | 'remover' | 'confirmar' | 'cancelar' | 'salvar'
    onPress: () => void;

}

export function Button({title, ...rest}: Props) {
 return (
    <Container {...rest}>
        <Text>{title}</Text>
    </Container>
 );
}