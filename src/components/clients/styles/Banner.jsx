import styled from "styled-components";
export const BannerStyled = styled.div`
  width: 100%;
  height: 350px;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  .items {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 40px;
    flex-wrap: wrap;
    .item {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      h1 {
        color: #fff;
        font-family: Quicksand;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: 16px;
        letter-spacing: 0.055px;
      }
    }
  }
`;
