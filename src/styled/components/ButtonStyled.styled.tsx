import styled from "styled-components/native";
import { FontSizeTextStyled, TextStyled } from "./TextStyled.styled";

interface ButtonPropsStyled {
  readonly widthPercentage?: number;
  readonly marginTop?: number;
  readonly marginBottom?: number;
}

const TouchableOpacityStyled = styled.TouchableOpacity<ButtonPropsStyled>`
  width: ${({ widthPercentage }) => widthPercentage ?? 75}%;
  justify-content: center;
  align-items: center;
  margin: 8px;
  padding: 5px;
  border-radius: 30px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  margin-top: ${({ marginTop = 8 }) => marginTop}px;
  margin-bottom: ${({ marginBottom = 8 }) => marginBottom}px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

interface ButtonProps {
  onPress: () => void;
  title: string;
  widthPercentage?: number;
  fontSize?: FontSizeTextStyled;
  marginTop?: number;
  marginBottom?: number;
}

export const ButtonStyled = ({
  onPress,
  title,
  widthPercentage,
  fontSize,
  marginTop,
  marginBottom,
}: ButtonProps) => (
  <TouchableOpacityStyled
    activeOpacity={0.8}
    onPress={onPress}
    widthPercentage={widthPercentage}
    marginTop={marginTop}
    marginBottom={marginBottom}
  >
    <TextStyled fontSize={fontSize}>{title}</TextStyled>
  </TouchableOpacityStyled>
);
