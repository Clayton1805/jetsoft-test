import styled from "styled-components/native";
import { colors, fontSize } from "../theme";

export type FontSizeTextStyled = keyof fontSize | number;
type ColorTextStyled = keyof colors;

interface TextStyledProps {
  readonly fontSize?: FontSizeTextStyled;
  readonly color?: ColorTextStyled;
  readonly marginTop?: number;
  readonly letterSpacing?: number;
  readonly justify?: boolean;
  readonly marginBottom?: number;
  readonly marginLeft?: number;
  readonly marginRight?: number;
}

export const TextStyled = styled.Text<TextStyledProps>`
  font-size: ${({ theme, fontSize = "medium" }) =>
    typeof fontSize === "string" ? theme.fontSize[fontSize] : fontSize}px;
  color: ${({ theme, color = "white" }) => theme.colors[color]};
  margin-top: ${({ marginTop = 0 }) => marginTop}px;
  margin-bottom: ${({ marginBottom = 0 }) => marginBottom}px;
  margin-left: ${({ marginLeft = 0 }) => marginLeft}px;
  margin-right: ${({ marginRight = 0 }) => marginRight}px;
  letter-spacing: ${({ letterSpacing = 0 }) => letterSpacing}px;
  text-align: ${({ justify }) => (justify ? "justify" : "start")};
`;
