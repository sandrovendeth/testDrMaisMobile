import React, { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import ActionModal from "../../components/ActionModal";
import { format } from "date-fns";

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
  Text,
} from "./styles";
import api from "../../services/api";
import { FilmDTO } from "../../dtos/FilmDTO";
import { StatusBar } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

interface Params {
  idfilmes: string;
}

export function MovieDetails() {
  const [films, setFilms] = useState<FilmDTO>(Object);

  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation<any>();

  const route = useRoute();

  const { idfilmes } = route.params as Params;

  function handleEdit() {
    navigation.navigate("RegisterScreen", { idFilm: films.idfilme });
  }

  async function handleConfirm() {
    try {
      await api.delete(`/filmes/${idfilmes}`);
      setModalVisible(false);
      navigation.navigate("Filme");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    async function fetchDetails() {
      try {
        const response = await api.get(`/filmes/${idfilmes}`);

        setFilms(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchDetails();
  }, []);

  return (
    <Container>
      <StatusBar barStyle={"dark-content"} />
      <Header>
        <Title>{films.nome}</Title>
      </Header>
      <ScrollView>
        <InfoWrapper>
          <Image source={{ uri: films.imagem }} />
          <DetailsWrapper>
            <Category>
              Categoria:{"\n"}
              {films.categoria}
            </Category>
            <Duration>
              Duração:{"\n"}
              {films.duracao}
            </Duration>
            <DateWatch>
              Assistir em:{"\n"}
              {films.data_assistir} as {films.hora_assistir}
            </DateWatch>
          </DetailsWrapper>
        </InfoWrapper>

        <Sinopse>{films.sinopse}</Sinopse>
      
      <View>
        <BouncyCheckbox fillColor="black" />
        <Text>Assistido</Text>
      </View>
      </ScrollView>

      <Footer>
        <Button title="Editar" type="editar" onPress={handleEdit} />
      </Footer>

      <Footer>
        <Button
          title="Remover"
          type="remover"
          onPress={() => setModalVisible(true)}
        />
      </Footer>

      <ActionModal
        handleConfirm={() => handleConfirm()}
        onClose={() => setModalVisible(false)}
        visible={modalVisible}
      ></ActionModal>
    </Container>
  );
}
