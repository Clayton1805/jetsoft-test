import { ScrollView } from "react-native";
import { NestableScrollContainer } from "react-native-draggable-flatlist";
import styled from "styled-components/native";

interface ScrollViewProps {
  readonly backgroundColor?: string;
  readonly borderTopRadius?: number;
}

export const ScrollContainerScreen = styled(
  NestableScrollContainer
)<ScrollViewProps>`
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor ?? theme.colors.primary};
  border-top-left-radius: ${({ borderTopRadius }) => borderTopRadius ?? 0}px;
  border-top-right-radius: ${({ borderTopRadius }) => borderTopRadius ?? 0}px;
`;
