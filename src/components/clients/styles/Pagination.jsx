import Colors from "modules/Colors";
import styled from "styled-components";
export const PaginationStyled = styled.div`
  padding: 50px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    padding: 10px 15px;
    border: 1px solid #565a81;
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.04px;
    transition: all 0.4s ease;
    &:hover,
    &.active {
      background-color: #565a81;
      color: ${Colors.yellow};
    }
  }
`;
