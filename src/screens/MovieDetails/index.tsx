import React, { useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import { useNavigation, useRoute } from '@react-navigation/native';
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
import api from '../../services/api';
import { FilmDTO } from '../../dtos/FilmDTO';

interface Params {
    idfilmes : string;
  }

export function MovieDetails() {

  const [films, setFilms] = useState<FilmDTO>(Object);

  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation<any>();

  const route = useRoute();

  const {idfilmes} = route.params as Params 
  
    
  function handleEdit() {
    navigation.navigate('Cadastrar');
  }

  async function handleDelet() {
    
    try {
     await api.delete(`/filmes/${idfilmes}`)
     setModalVisible(true)
     navigation.navigate('Home')    

  } catch (error) {
      console.log(error)
    }
  }

  useEffect(() =>{
    async function fetchDetails() {
        try {
            console.log(idfilmes)
          const response = await api.get(`/filmes/${idfilmes}`)
            console.log(response)
          
          setFilms(response.data);
      } catch (error) {
          console.log(error)
      }
    } 
    fetchDetails();
}, [])

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
                        {films.categoria}
                    </Category>
                    <Duration>
                        Duração:{'\n'}
                        {films.duracao}
                    </Duration>
                    <DateWatch>
                        Assistir em:{'\n'}
                        {films.data_assistir} as {films.hora_assistir}
                    </DateWatch>
                    
                </DetailsWrapper>     
            </InfoWrapper>

                <Sinopse>
                    {films.sinopse}
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
                handleConfirm={() => handleDelet()}
                onClose={() => setModalVisible(false)}
                visible={modalVisible}
           >
           </ActionModal> 
          
    </Container>
 );
}