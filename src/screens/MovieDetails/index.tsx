import React from 'react';
import { Button } from '../../components/Button';

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
} from './styles';

function handleEdit(){

}
function handleDelet(){

}

export function MovieDetails() {
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
            
    </Container>
 );
}