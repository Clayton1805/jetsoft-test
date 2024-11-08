import styled from "styled-components/native";

export const CheckBox = styled.TouchableOpacity`
  width: 25px;
  height: 25px;
  border: 1.6px solid ${({ theme }) => theme.colors.green};
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.transparent};
  align-items: center;
  justify-content: center;
  margin-left: 15px;
  margin-right: 15px;
`;
