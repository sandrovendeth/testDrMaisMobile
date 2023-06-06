import React from 'react';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

interface ButtonProps {
  type: 'editar' | 'remover' | 'confirmar' | 'cancelar' | 'salvar';
}

export const Container = styled(RectButton)<ButtonProps>`
  padding: 10px;
  border-radius: 5px;
  flex: 1;

  ${({ type }) => {
    let backgroundColor;
    let textColor;

    switch (type) {
      case 'remover':
        backgroundColor = '#e80231';
        textColor = '#ffffff';
        break;
      case 'cancelar':
        backgroundColor = '#ca9f45';
        textColor = '#ffffff';
        break;
      case 'salvar':
        backgroundColor = '#228B22';
        textColor = '#ffffff';
        break;
      case 'editar':
        backgroundColor = '#527ffc';
        textColor = '#ffffff';
        break;
      default:
        backgroundColor = '#000000';
        textColor = '#ffffff';
        break;
    }

    return `
      background-color: ${backgroundColor};
      color: ${textColor};
    `;
  }}
`;

export const Text = styled.Text`
  font-size: 20px;
  color: white;
  text-align: center;
  
`;
