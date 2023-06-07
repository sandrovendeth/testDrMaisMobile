import styled from 'styled-components/native';
import { Button } from '../../components/Button';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const Container = styled.View`
  flex: 1;
  padding-top: 30px;
`;

export const Header = styled.View`
  align-items: center;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const Text = styled.Text`
  font-size: 18px;
  margin-top: 10px;
  font-weight: bold;
  margin-left: 5px;
`;

export const Image = styled.Image`
  width: 150px;
  height: 200px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  border-radius: 5px;
`;

export const View = styled.View`
  margin-top: 10px;
`;

export const TextDates = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const CheckWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TextCheck = styled.Text`
  font-size: 16px;
  margin-left: 5px;
`;

export const HourWrapper = styled.View`
  flex-direction: row;
  padding: 20px;
  align-items: center;
  
`;

export const Footer = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding: 20px;

`;


