import styled from "styled-components/native";
import { colors } from "../theme";

interface InputProps {
  readonly widthPercentage?: number;
  readonly backgroundColor?: keyof colors;
  readonly color?: keyof colors;
}

export const InputStyled = styled.TextInput<InputProps>`
  height: 40px;
  width: ${({ widthPercentage }) => widthPercentage ?? 95}%;
  background-color: ${({ theme, backgroundColor = "secondary" }) =>
    theme.colors[backgroundColor]};
  color: ${({ theme, color = "white" }) => theme.colors[color]};
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 5px;
`;
