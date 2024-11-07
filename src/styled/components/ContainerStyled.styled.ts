import styled from "styled-components/native";
import { colors } from "../theme";

interface InputPropsContainer {
  readonly marginTop?: number;
  readonly marginBottom?: number;
  readonly widthPercentage?: number;
  readonly alignItemsCenter?: boolean;
  readonly backgroundColor?: keyof colors;
  readonly directionRow?: boolean;
  readonly justifyContentCenter?: boolean;
}

export const ContainerStyled = styled.View<InputPropsContainer>`
  width: ${({ widthPercentage }) => widthPercentage ?? 100}%;
  align-items: ${({ alignItemsCenter = true }) =>
    alignItemsCenter ? "center" : "start"};
  justify-content: ${({ justifyContentCenter }) =>
    justifyContentCenter ? "center" : "start"};
  margin-top: ${({ marginTop }) => marginTop ?? 0}px;
  margin-bottom: ${({ marginBottom }) => marginBottom ?? 0}px;
  background-color: ${({ backgroundColor = "transparent", theme }) =>
    theme.colors[backgroundColor]};
  flex-direction: ${({ directionRow }) => (directionRow ? "row" : "column")};
`;
