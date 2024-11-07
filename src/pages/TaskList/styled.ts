import styled from "styled-components/native";
import { ContainerStyled } from "../../styled/components/ContainerStyled.styled";
import { TextStyled } from "../../styled/components/TextStyled.styled";

export const TaskContainerStyled = styled(ContainerStyled)`
  border: 1px solid ${({ theme }) => theme.colors.black};
`;

export const TextTaskStyled = styled(TextStyled)`
  height: 40px;
  width: 80%;
`;
