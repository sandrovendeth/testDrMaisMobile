import React, { useCallback, useState, useEffect } from "react";
import { Container, Title, Input, MovieList, View, ViwList } from "./styles";
import { MovieCard } from "../../components/MovieCard";
import { StatusBar } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import api from "../../services/api";
import { FilmDTO } from "../../dtos/FilmDTO";
import { Empty } from "../../components/Empty";
import { TouchableOpacity } from "react-native-gesture-handler";

export function Home() {
  const [films, setFilms] = useState<FilmDTO[]>([]);

  const [originalFilms, setOriginalFilms] = useState<FilmDTO[]>([]);

  const navigation = useNavigation<any>();

  const [loading, setLoading] = useState(true);

  const [searcText, setSearchText] = useState("");

  // Dentro do useEffect, caso o usuário esteja digitando, entrando no else ele irá da um filter no qual pega o nome do filme ou a categoria, sendo maior que -1 que dizer ele achou na string específica, retornando true, jogando o film em List.


  useEffect(() => {
    if (searcText === "") {
      setFilms(originalFilms); // Usando os filmes originais
    } else {
      setFilms(
        originalFilms.filter((item) => {
          if (
            item.nome.toLowerCase().indexOf(searcText.toLowerCase()) /*&&
            item.categoria.toLowerCase().indexOf(searcText.toLowerCase()) */ > -1
          ) {
            return true;
          } else {
            return false;
          }
        })
      );
    }
  }, [searcText, originalFilms]);

  // ordernação da lista de filmes por ordem alfabética

  function handleDetails(idfilmes: string) {
    navigation.navigate("EditarScreen", { idfilmes });
  }

  useFocusEffect(
    useCallback(() => {
      async function fetchMovies() {
        try {
          const response = await api.get("http://172.18.0.225:3333/filmes");
          setFilms(response.data);
          setOriginalFilms(response.data);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      }
      fetchMovies();
    }, [])
  );
  

  return (
    <Container>
      <StatusBar barStyle={"dark-content"} />
      <Title>Cinéfilo</Title>
      <View>
        <Input
          value={searcText}
          onChangeText={(e) => setSearchText(e)}
          placeholder="Pesquise pelo nome ou categoria de filme"
          placeholderTextColor="#888"
        ></Input>
        <TouchableOpacity >
          <MaterialCommunityIcons
            name="magnify"
            size={32}
            color="black"
          />
        </TouchableOpacity>
      </View>

      <ViwList>
        <MovieList
          ListEmptyComponent={<Empty />}
          data={films}
          keyExtractor={(item) => item.idfilme}
          renderItem={({ item }: { item: FilmDTO }) => (
            <MovieCard
              data={item}
              onPress={() => handleDetails(item.idfilme)}
            />
          )}
        />
      </ViwList>
    </Container>
  );
}
