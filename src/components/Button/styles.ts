import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

interface ButtonProps {
    type: 'editar' | 'remover' | 'confirmar' | 'cancelar' | 'salvar';
}

export const Container = styled(TouchableOpacity)<ButtonProps>`
    width: 100%;
   
    ${({ type }) => {
        let color;
        switch (type) {
            case 'remover':
                color = '#e80231';
                break;
            case 'cancelar':
                color = '#ca9f45';
                break;
            case 'salvar':
                color = '#69f55a';
                break;
            case 'editar':
                color = '#527ffc';
                break;
            default:
                color = '#000000';
                break;
        }
        return `
            background-color: ${color};
        `;
    }}
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    padding: 10px;
`;

export const Text = styled.Text`
  font-size: 20px;
  color: white;
`;
