import Colors from "modules/Colors";
import styled from "styled-components";
export const FooterStyled = styled.footer`
  background-color: #000;
  height: 320px;
  width: 100%;
  padding: 50px 0;
  .items {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #c4c4c4;
    .item {
      .title {
        margin-bottom: 30px;
        h1 {
          color: #f2bc33;
          font-family: Quicksand;
          font-size: 16px;
          font-style: normal;
          font-weight: 700;
          line-height: 16px;
          letter-spacing: 0.065px;
        }
      }
      ul {
        li {
          .link {
            display: flex;
            align-items: center;
            gap: 10px;
            color: #fff;
            font-family: Quicksand;
            font-size: 14px;
            font-style: normal;
            font-weight: 700;
            line-height: 16px;
            letter-spacing: 0.055px;
            margin: 15px 0;
            p {
              margin: 0 !important;
            }
          }
        }
      }
      .input {
        input {
          padding: 20px;
          width: 100%;
          background-color: ${Colors.white};
          &::placeholder {
            color: #c2c2c2;
            font-family: Quicksand;
            font-size: 16px;
            font-style: normal;
            font-weight: 700;
            line-height: 16px;
            letter-spacing: 0.055px;
          }
        }
      }
      .button {
        button {
          padding: 15px;
          margin-top: 10px;
          border: 1px solid ${Colors.yellow};
          color: #c2c2c2;
          font-family: Quicksand;
          font-size: 16px;
          font-style: normal;
          font-weight: 700;
          line-height: 16px;
          letter-spacing: 0.055px;
          background-color: transparent;
          width: 100%;
        }
      }
      p {
        color: #c2c2c2;
        font-family: Quicksand;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 16px;
        letter-spacing: 0.05px;
        margin-top: 10px;
      }
    }
  }
  .bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    p {
      color: #c2c2c2;
      font-family: Quicksand;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 16px;
      letter-spacing: 0.055px;
      margin: 0 !important;
    }
  }
`;
