import { memo, useCallback, useEffect, useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  NestableDraggableFlatList,
  RenderItemParams,
} from "react-native-draggable-flatlist";
import { InputStyled } from "../../styled/components/InputStyled.styled";
import { TextStyled } from "../../styled/components/TextStyled.styled";
import { ScrollContainerScreen } from "../../styled/components/ScrollContainerScreenStyled.styled";
import { ContainerStyled } from "../../styled/components/ContainerStyled.styled";
import { AntDesign } from "@expo/vector-icons";
import { theme } from "../../styled/theme";
import styled from "styled-components/native";
import Feather from "@expo/vector-icons/Feather";
import { CheckBox } from "./styled";
import DatePicker from "react-native-date-picker";
import { ButtonStyled } from "../../styled/components/ButtonStyled.styled";
import Fontisto from "@expo/vector-icons/Fontisto";
import { TouchableOpacityStyled } from "../../styled/components/TouchableOpacityStyled.styled";
import { formattedDate } from "../../utils/formattedDate";
import RenderItem from "../../components/RenderItem";
import getObjectStorage from "../../services/AsyncStorage/getObjectStorage";
import setObjectStorage from "../../services/AsyncStorage/setObjectStorage";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface Item {
  name: string;
  checked: boolean;
  date: string;
}

export default function TaskList() {
  const dateNow = new Date();

  const [data, setData] = useState<Item[]>([]);
  const [date, setDate] = useState(dateNow);
  const [openDate, setOpenDate] = useState(false);
  const [name, setName] = useState("");

  const asyncNewTask = ({ name, checked, date }: Item) => {
    setData((prevData) => [
      ...prevData,
      { name, checked, date: formattedDate(dateNow) },
    ]);
  };

  const asyncChecked = () => {
    setData((prevData) =>
      prevData.map((item, index) =>
        index === 0
          ? {
              ...item,
              checked: !item.checked,
            }
          : item
      )
    );
  };

  const asyncMove = () => {
    setData((prevData) => [...prevData.slice(1, prevData.length), prevData[0]]);
  };

  const simulateSynchronization = async () => {
    setTimeout(() => {
      asyncNewTask({
        name: "New Task",
        checked: false,
        date: formattedDate(dateNow),
      });
      setTimeout(() => {
        asyncChecked();
        setTimeout(() => {
          asyncMove();
        }, 5000);
      }, 5000);
    }, 10000);
  };

  useEffect(() => {
    getObjectStorage("data").then((dataStorage) => {
      if (dataStorage) {
        setData(dataStorage);
      }
    });
    // simulateSynchronization();
  }, []);

  useEffect(() => {
    setObjectStorage("data", data);
    // AsyncStorage.clear();
  }, [data]);

  const handleSaveClick = () => {
    if (name !== "") {
      setData((prevData) => [
        ...prevData,
        { name, checked: false, date: formattedDate(date) },
      ]);
      setName("");
    }
  };

  const renderItem = ({ item, drag, getIndex }: RenderItemParams<Item>) => {
    const index = getIndex() || 0;
    return (
      <RenderItem item={item} drag={drag} index={index} setData={setData} />
    );
  };

  return (
    <ScrollContainerScreen>
      <DatePicker
        modal
        mode="date"
        open={openDate}
        date={date}
        onConfirm={(date) => {
          setOpenDate(false);
          if (date >= dateNow) {
            setDate(date);
          }
        }}
        onCancel={() => {
          setOpenDate(false);
        }}
      />
      <TextStyled
        fontSize={"large"}
        marginTop={20}
        marginBottom={30}
        marginLeft={10}
      >
        Lista de tarefas:
      </TextStyled>
      <ContainerStyled marginBottom={20}>
        <InputStyled
          placeholder="Adicionar titulo da nova tarefa"
          backgroundColor="white"
          color="black"
          onChangeText={setName}
          value={name}
        />
        <ContainerStyled widthPercentage={95} directionRow marginLeft={10}>
          <TouchableOpacityStyled
            activeOpacity={0.8}
            onPress={() => setOpenDate(true)}
            flex1
            directionRow
          >
            <Fontisto name="date" size={24} color={theme.colors.white} />
            <TextStyled color="white" marginLeft={10}>
              {formattedDate(date)}
            </TextStyled>
          </TouchableOpacityStyled>
          <ContainerStyled flex1>
            <ButtonStyled title="Salvar" onPress={handleSaveClick} />
          </ContainerStyled>
        </ContainerStyled>
      </ContainerStyled>
      <NestableDraggableFlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => `draggable-item-${item.name}-${index}`}
        onDragEnd={({ data }) => setData(data)}
      />
    </ScrollContainerScreen>
  );
}
