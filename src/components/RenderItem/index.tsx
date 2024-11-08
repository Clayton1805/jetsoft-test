import { Item } from "../../pages/TaskList";
import { CheckBox } from "../../pages/TaskList/styled";
import { ContainerStyled } from "../../styled/components/ContainerStyled.styled";
import { AntDesign } from "@expo/vector-icons";
import { TextStyled } from "../../styled/components/TextStyled.styled";
import { TouchableOpacity } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { theme } from "../../styled/theme";
import { memo } from "react";

const RenderItem = ({
  item,
  drag,
  index,
  setData,
}: {
  drag: () => void;
  item: Item;
  index: number;
  setData: React.Dispatch<React.SetStateAction<Item[]>>;
}) => (
  <ContainerStyled
    directionRow
    backgroundColor={(index || 0) % 2 ? "primary" : "secondary"}
    paddingRight={5}
  >
    <CheckBox
      activeOpacity={0.8}
      onPress={() =>
        setData((prevData) => [
          ...prevData.slice(0, index),
          {
            ...item,
            checked: !item.checked,
          },
          ...prevData.slice(index + 1, prevData.length),
        ])
      }
    >
      {item.checked && (
        <AntDesign name="check" size={17} color={theme.colors.green} />
      )}
    </CheckBox>
    <ContainerStyled flex1 marginBottom={4} alignItemsCenter={false}>
      <TextStyled fontSize={"span"}>{item.date}</TextStyled>
      <TextStyled>{item.name}</TextStyled>
    </ContainerStyled>
    <TouchableOpacity onLongPress={drag}>
      <Feather name="move" size={24} color={theme.colors.white} />
    </TouchableOpacity>
  </ContainerStyled>
);

export default memo(RenderItem);
