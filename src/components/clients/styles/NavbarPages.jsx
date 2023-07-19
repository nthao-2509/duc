import styled from "styled-components";
export const NavbarPagesStyled = styled.header`
  max-width: 100vw;
  min-height: 70vh;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .title {
      display: inline-block;
      border-bottom: 2px solid #f2bc33;

      h1 {
        color: #f2bc33;
        font-family: Quicksand;
        font-size: 50px;
        font-style: normal;
        font-weight: 700;
        line-height: 16px;
        letter-spacing: 0.25px;
      }
    }
  }
`;
