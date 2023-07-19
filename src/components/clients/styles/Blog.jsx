import styled from "styled-components";
export const BlogStyled = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px 0;
  background-color: #d1ecef;
  .cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
`;
