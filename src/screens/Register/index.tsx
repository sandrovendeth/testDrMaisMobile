import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Input } from "../../components/Input";
import { useNavigation } from '@react-navigation/native';

import {
    Container, 
    Title, 
    Header, 
    Text, 
    Image, 
    View,
    TextDates,
    CheckWrapper,
    TextCheck,
    HourWrapper,
    Footer


} from './styles';
import { StatusBar } from "react-native";
import { Button } from "../../components/Button";
import { useState } from "react";


export function Register() {

    const [filmName, setFilmName] = useState('');
    const [categoryName, setCategoryName] = useState('');


    const navigation = useNavigation<any>();
    
    function handleSave(){
        navigation.navigate('Filme')
    }
    return (
        <Container>
            <StatusBar barStyle={'dark-content'} />
            <Header>
                <Title>Cadastro / Alteração</Title>
            </Header>
      
                <Text>Filme</Text>
                <Input 
                style={{ width: '95%', marginLeft: 'auto', marginRight: 'auto' }}/>
    
                <Text>Categoria</Text>
                <Input 
                style={{ width: '95%', marginLeft: 'auto', marginRight: 'auto' }}/>
    
                <Text>Duração</Text>
                <Input 
                style={{ width: '95%', marginLeft: 'auto', marginRight: 'auto' }}/>
    
                <Text>Sinopse</Text>
                <Input 
                style={{ width: '95%', height: '15%', marginLeft: 'auto', marginRight: 'auto' }}/>
    
            <HourWrapper>                
                <View>
                    <TextDates>Assistir em</TextDates>
                    <Input style={{ width: '150%', marginLeft: '2.5%', marginBottom: '1%'}}/>
                    <TextDates>Horario</TextDates>
                    <Input style={{ width: '150%', marginLeft: '2.5%'}}/>
                
                <CheckWrapper>
                <BouncyCheckbox fillColor='black' onPress={(isChecked: boolean) => {}}/>
                <TextCheck>Assistido</TextCheck>
                </CheckWrapper>
            
            </View>
            <Image source={{uri: 'https://www.cafecomfilme.com.br/media/k2/items/cache/d063d8b7c1471349d2847c26ce4e4d8c_XL.jpg?t=20211107_201834' }}></Image>
            
            </HourWrapper>
            <Button 
                    title='Remover' 
                    type='salvar'
                    onPress={handleSave}             
                />
            <Footer>
                
            </Footer>
    
        </Container>
     );
    }