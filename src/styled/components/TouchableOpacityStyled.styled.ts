import styled from "styled-components/native";
import { colors } from "../theme";

interface InputPropsContainer {
  readonly marginTop?: number;
  readonly marginBottom?: number;
  readonly alignItemsCenter?: boolean;
  readonly backgroundColor?: keyof colors;
  readonly directionRow?: boolean;
  readonly justifyContentCenter?: boolean;
  readonly paddingLeft?: number;
  readonly paddingRight?: number;
  readonly flex1?: boolean;
  readonly marginLeft?: number;
  readonly marginRight?: number;
}

export const TouchableOpacityStyled = styled.TouchableOpacity<InputPropsContainer>`
  align-items: ${({ alignItemsCenter = true }) =>
    alignItemsCenter ? "center" : "start"};
  justify-content: ${({ justifyContentCenter }) =>
    justifyContentCenter ? "center" : "start"};
  margin-top: ${({ marginTop = 0 }) => marginTop}px;
  margin-bottom: ${({ marginBottom = 0 }) => marginBottom}px;
  margin-left: ${({ marginLeft = 0 }) => marginLeft}px;
  margin-right: ${({ marginRight = 0 }) => marginRight}px;
  background-color: ${({ backgroundColor = "transparent", theme }) =>
    theme.colors[backgroundColor]};
  flex-direction: ${({ directionRow }) => (directionRow ? "row" : "column")};
  padding-left: ${({ paddingLeft = 0 }) => paddingLeft}px;
  padding-right: ${({ paddingRight = 0 }) => paddingRight}px;
  ${({ flex1 }) => (flex1 ? "flex: 1;" : "")}
`;
