import styled from 'styled-components/native';

export const Overlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  background-color: white;
  padding: 16px;
  border-radius: 8px;
  width: 80%;
  height: 40%;
  max-width: 400px;
`;

export const CloseButton = styled.TouchableOpacity`
  align-self: flex-end;
`;

export const CloseButtonText = styled.Text`
  font-size: 20px;
  color: black;
`;

export const TextModal = styled.Text`
    font-size: 18px;
`;

export const View = styled.View`
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    margin-top: 150px;
`;


