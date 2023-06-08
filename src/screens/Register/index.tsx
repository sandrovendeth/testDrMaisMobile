import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import uuid from "react-native-uuid";

import { InputForm } from "../../components/InputForm";
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
import { useCallback, useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import api from "../../services/api";

interface Props {
  data: FilmDTO;
}

export interface FormData {
  [name: string]: string;
}

interface Params {
  idFilm: string;
}

export function Register({ data, ...rest }: Props) {
  const route = useRoute();

  const navigation = useNavigation<any>();

  const [imagem, setImagem] = useState<string>("");

  const [assistido, setAssistido] = useState<boolean>(data?.assistido);

  console.log(assistido);

  function handleCheckboxPress(isChecked: boolean) {
    setAssistido(isChecked);
  }

  let idFilme: string;

  if (route.params) {
    const { idFilm } = route.params as Params;
    idFilme = idFilm;
  }

  const schema = Yup.object().shape({
    nome: Yup.string().required("O topico é obrigatorio"),
    categoria: Yup.string().required("O topico é obrigatorio"),
    sinopse: Yup.string().required("A sinopse é obrigatorio"),
    duracao: Yup.string().required("O campo de duração é obrigatorio"),
    //imagem: Yup.string().required("A imagem é obrigatorio"),
    data_assistir: Yup.string().required("A mensagem é obrigatoria"),
    hora_assistir: Yup.string().required("A mensagem é obrigatoria"),
    //assistido: Yup.string().required("A mensagem é obrigatoria"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function handleEdit(form: FormData) {
    const body = {
      nome: form.nome,
      categoria: form.categoria,
      sinopse: form.sinopse,
      duracao: form.duracao,
      data_assistir: form.data_assistir,
      hora_assistir: form.hora_assistir,
      assistido: form.assistido,
      imagem: form.imagem,
    };

    body.imagem = imagem

    // se haver o idfilmes ele dara o put para alterar os dados existentes, se não irá dar o post para cadastar novos dados
    try {
      if (route.params) {
        await api.put(`/filmes/${idFilme}`, body);
      } else {
        await api.post(`/filmes`, { idfilme: String(uuid.v4()), ...body });
      }
      reset();
      navigation.navigate("Filme");
    } catch (error) {
      console.log(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      reset();
      async function getFilmById() {
        try {
          const response = await api.get(`/filmes/${idFilme}`);
          reset(response.data);
        } catch (err) {
          console.log(err);
        }
      }
      if (route.params) {
        getFilmById();
      }
    }, [])
  );

  return (
    <Container {...rest}>
      <StatusBar barStyle={"dark-content"} />
      <Header>
        <Title>Cadastro / Alteração</Title>
      </Header>
      <ScrollView>
        <Text>Filme</Text>
        <InputForm
          name="nome"
          control={control}
          style={{ marginTop: 5, marginLeft: 5 }}
          placeholder="Digite o nome do filme"
          placeholderTextColor="#888"
          error={errors.nome?.message}
        />

        <Text>Categoria</Text>
        <InputForm
          name="categoria"
          control={control}
          style={{ marginTop: 5, marginLeft: 5 }}
          placeholder="Digite a categoria"
          placeholderTextColor="#888"
          error={errors.categoria?.message}
        />

        <Text>Duração</Text>
        <InputForm
          name="duracao"
          control={control}
          style={{ marginTop: 5, marginLeft: 5 }}
          placeholder="Digite a duração"
          placeholderTextColor="#888"
          error={errors.duracao?.message}
        />

        <Text>Sinopse</Text>
        <InputForm
          name="sinopse"
          control={control}
          style={{ marginTop: 5, marginLeft: 5, height: 80 }}
          placeholder="Digite a sinopse"
          placeholderTextColor="#888"
          error={errors.sinopse?.message}
        />
        <Text>Imagem</Text>
        <InputForm
          name="imagem"
          control={control}
          style={{ marginTop: 5, marginLeft: 5 }}
          placeholder="Digite a url da imagem"
          placeholderTextColor="#888"
          error={errors.imagem?.message}
          value={imagem}
          onChangeText={setImagem}
        />

        <HourWrapper>
          <View>
            <TextDates>Assistir em</TextDates>
            <InputForm
              name="data_assistir"
              control={control}
              style={{ marginTop: 5 }}
              placeholder="Digite a data de assistir"
              placeholderTextColor="#888"
              error={errors.data_assistir?.message}
              editable={!assistido}
            />
            <TextDates>Horário</TextDates>
            <InputForm
              name="hora_assistir"
              control={control}
              style={{ marginTop: 5 }}
              placeholder="Digite o horário"
              placeholderTextColor="#888"
              error={errors.hora_assistir?.message}
              editable={!assistido}
            />

            <CheckWrapper>
              <BouncyCheckbox
                style={{ width: 20, height: 20 }}
                fillColor="black"
                onPress={handleCheckboxPress}
                isChecked={assistido}
              />
              <TextCheck>Assistido</TextCheck>
            </CheckWrapper>
          </View>
          <Image source={{ uri: imagem}}></Image>
        </HourWrapper>

        <Footer>
          <Button
            title="Salvar"
            type="salvar"
            onPress={handleSubmit(handleEdit)}
          />
        </Footer>
      </ScrollView>
    </Container>
  );
}
