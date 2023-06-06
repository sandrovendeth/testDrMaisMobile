import React, { useState } from 'react';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import  ActionModal  from "../../components/ActionModal"


import {
    Container, 
    Title, 
    Header, 
    InfoWrapper, 
    DetailsWrapper, 
    Category, 
    Duration, 
    DateWatch, 
    Sinopse,  
    Image, 
    Footer,
    View, 
    Text
} from './styles';

export function MovieDetails() {

  const [modalVisible, setModalVisible] = useState(false);


  const navigation = useNavigation<any>();
    
  function handleEdit() {
    navigation.navigate('Cadastrar');
  }

  function handleDelet() {
    setModalVisible(true)  
  }
  function closeModal() {
    setModalVisible(false)
  }
 return (
    <Container>      
        <Header>
            <Title>Diamante de Sangue</Title>
        </Header>
                            
        <InfoWrapper>
            <Image source={{uri: 'https://www.cafecomfilme.com.br/media/k2/items/cache/d063d8b7c1471349d2847c26ce4e4d8c_XL.jpg?t=20211107_201834'}} />
                <DetailsWrapper>   
                    <Category>
                        Categoria:{'\n'}
                        Ação
                    </Category>
                    <Duration>
                        Duração:{'\n'}
                        1h 36m
                    </Duration>
                    <DateWatch>
                        Assistir em:{'\n'}
                        06/06/2023 as 14:30h
                    </DateWatch>
                    
                </DetailsWrapper>     
            </InfoWrapper>

                <Sinopse>
                    Um terrorista internacional conhecido apenas como “Diamante Vermelho” traça um plano para colapsar a civilização global: desligar permanentemente todos os computadores do mundo.
                </Sinopse>
                <View>
                    <BouncyCheckbox fillColor='black'/>
                    <Text>Assistido</Text>
                </View>         

        <Footer>
            <Button 
                title='Editar' 
                type='editar'
                onPress={handleEdit}     
            />
            <Button
                title='Remover' 
                type='remover'
                onPress={handleDelet}               
            />
        </Footer>

           <ActionModal 
                onClose={() => setModalVisible(false)}
                visible={modalVisible}
           >
           </ActionModal> 
          
    </Container>
 );
}