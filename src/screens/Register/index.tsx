import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Input } from "../../components/Input";
import { useNavigation } from "@react-navigation/native";
import { FilmDTO } from "../../dtos/FilmDTO";

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
  Footer,
} from "./styles";
import { StatusBar } from "react-native";
import { Button } from "../../components/Button";
import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";

interface Props {
  data: FilmDTO, 
}

export function Register({data, ...rest}: Props) {
  const [filmes, setFilmes] = useState<FilmDTO[]>([]);

  const [filmName, setFilmName] = useState("");
  const [categoryName, setCategoryName] = useState("");

  const navigation = useNavigation<any>();

  function handleSave() {
    navigation.navigate("Filme");
  }
  return (
    <Container {...rest}>
      <StatusBar barStyle={"dark-content"} />
      <Header>
        <Title>Cadastro / Alteração</Title>
      </Header>
      <ScrollView>
        <Text>Filme</Text>
        <Input
          style={{ marginTop: 5, marginLeft: 5 }}
          placeholder="Digite o nome do filme"
          placeholderTextColor="#888"
          value={filmName}
          onChangeText={setFilmName}
        />

        <Text>Categoria</Text>
        <Input
          style={{ marginTop: 5, marginLeft: 5 }}
          placeholder="Digite a categoria"
          placeholderTextColor="#888"
          value={categoryName}
          onChangeText={setCategoryName}
        />

        <Text>Duração</Text>
        <Input
          style={{ marginTop: 5, marginLeft: 5 }}
          placeholder="Digite a duração"
          placeholderTextColor="#888"
        />

        <Text>Sinopse</Text>
        <Input
          style={{ marginTop: 5, marginLeft: 5, height: 80 }}
          placeholder="Digite a sinopse"
          multiline
          placeholderTextColor="#888"
        />

        <HourWrapper>
          <View>
            <TextDates>Assistir em</TextDates>
            <Input
              style={{ marginTop: 5 }}
              placeholder="Digite a data de assistir"
              placeholderTextColor="#888"
            />
            <TextDates>Horário</TextDates>
            <Input
              style={{ marginTop: 5 }}
              placeholder="Digite o horário"
              placeholderTextColor="#888"
            />

            <CheckWrapper>
              <BouncyCheckbox
                style={{ width: 20, height: 20 }}
                fillColor="black"
                onPress={(isChecked: boolean) => {}}
              />
              <TextCheck>Assistido</TextCheck>
            </CheckWrapper>
          </View>
          <Image
            source={{uri: "https://www.cafecomfilme.com.br/media/k2/items/cache/d063d8b7c1471349d2847c26ce4e4d8c_XL.jpg?t=20211107_201834"}}
          ></Image>
        </HourWrapper>

        <Footer>
          <Button title="Salvar" type="salvar" onPress={handleSave} />
        </Footer>
      </ScrollView>
    </Container>
  );
}
