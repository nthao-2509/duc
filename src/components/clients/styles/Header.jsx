import Colors from "modules/Colors";
import styled from "styled-components";
export const StyleHeader = styled.header`
  max-width: 100vw;
  min-height: 100vh;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 50px;
    width: 100%;
    min-height: calc(100vh - 105px);
    .title {
      h1 {
        color: ${Colors.white};
        text-align: center;
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        line-height: 30px;
        letter-spacing: 0.18px;
      }
    }
    .description {
      display: flex;
      align-items: center;
      justify-content: center;
      p {
        max-width: 45%;
        color: ${Colors.white};
        text-align: center;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 16px;
      }
    }
    .button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      color: ${Colors.white};
      button {
        border: 1px solid ${Colors.yellow};
        padding: 10px 15px;
        text-align: center;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 16px;
      }
    }
  }
`;
