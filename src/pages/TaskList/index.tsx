import { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  NestableDraggableFlatList,
  RenderItemParams,
} from "react-native-draggable-flatlist";
import { InputStyled } from "../../styled/components/Input.styled";
import { TextStyled } from "../../styled/components/TextStyled.styled";
import { ScrollContainerScreen } from "../../styled/components/ScrollContainerScreen.styled";
import { ContainerStyled } from "../../styled/components/ContainerStyled.styled";
import { AntDesign } from "@expo/vector-icons";
import { theme } from "../../styled/theme";
import styled from "styled-components/native";
import Feather from "@expo/vector-icons/Feather";
import { TaskContainerStyled, TextTaskStyled } from "./styled";

type Item = {
  key: string;
  name: string;
  checked: boolean;
};

const CheckBox = styled.TouchableOpacity`
  width: 25px;
  height: 25px;
  border: 1.6px solid ${({ theme }) => theme.colors.green};
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.transparent};
  align-items: center;
  justify-content: center;
  /* margin-bottom: 1px; */
  margin-left: 15px;
  margin-right: 15px;
  /* position: absolute; */
  /* right: 15px; */
`;

export default function TaskList() {
  const [data, setData] = useState([
    { key: "1", name: "Item 1", checked: false },
    { key: "2", name: "Item 2", checked: false },
    { key: "3", name: "Item 3", checked: false },
    { key: "4", name: "Item 4", checked: true },
    { key: "5", name: "Item 5", checked: false },
    { key: "6", name: "Item 6", checked: false },
    { key: "7", name: "Item 7", checked: false },
  ]);

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  useEffect(() => console.log(data), []);

  const renderItem = ({ item, drag }: RenderItemParams<Item>) => {
    return (
      <TaskContainerStyled directionRow>
        <CheckBox
          activeOpacity={0.8}
          onPress={() =>
            setData((prevData) => {
              return prevData.map((item2) => {
                if (item2.key === item.key)
                  return { ...item2, checked: !item2.checked };

                return item2;
              });
            })
          }
        >
          {item.checked && (
            <AntDesign name="check" size={17} color={theme.colors.green} />
          )}
        </CheckBox>
        <TextTaskStyled>{item.name}</TextTaskStyled>
        <TouchableOpacity onLongPress={drag}>
          <Feather name="move" size={24} color={theme.colors.white} />
        </TouchableOpacity>
      </TaskContainerStyled>
    );
  };
  return (
    <ScrollContainerScreen>
      <TextStyled fontSize={"large"} marginTop={20} marginBottom={30}>
        {" Lista de tarefas:"}
      </TextStyled>
      <ContainerStyled marginBottom={20}>
        <InputStyled
          placeholder="Adicionar uma nova tarefa..."
          backgroundColor="white"
          color="black"
          onChangeText={}
        />
      </ContainerStyled>
      <NestableDraggableFlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => `draggable-item-${item.key}-${index}`}
        onDragEnd={({ data }) => setData(data)}
      />
    </ScrollContainerScreen>
  );
}
