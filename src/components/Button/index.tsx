import React from 'react';

import {
     Container, Text
} from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props extends TouchableOpacity{
    title: string;
    type: 'editar' | 'remover' | 'confirmar' | 'cancelar' | 'salvar'
    onPress: () => void;

}

export function Button({title, onPress, ...rest}: Props) {
 return (
    <Container onPress={onPress}{...rest}>
        <Text>{title}</Text>
    </Container>
 );
}