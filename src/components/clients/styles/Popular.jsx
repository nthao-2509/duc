import Colors from "modules/Colors";
import styled from "styled-components";
export const PopularStyled = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px 0;
  background-color: #d1ecef;
  .top {
    .heading {
      text-align: center;

      h3 {
        color: #f5c433;
        font-family: Inter;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.1px;
      }
    }
    .title {
      width: 100%;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      h1 {
        max-width: 430px;
        color: #4a4c70;
        font-family: Work Sans;
        font-size: 30px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: -0.6px;
      }
    }
  }
  .content {
    .cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      .item {
        .top {
          width: 100%;
          height: 250px;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .bottom {
          background-color: ${Colors.white};
          .content {
            padding: 30px 19px 0;
            .raised-goal {
              display: flex;
              align-items: center;
              justify-content: space-between;
              p {
                color: #000;
                text-align: center;
                font-family: Inter;
                font-size: 12px;
                font-style: normal;
                font-weight: 300;
                line-height: normal;
                letter-spacing: 0.03px;
              }
            }
            .title {
              margin: 11px 0 3px;
              h1 {
                color: #000;
                font-family: Inter;
                font-size: 16px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
                letter-spacing: 0.05px;
              }
            }
            .description {
              p {
                color: #000;
                font-family: Inter;
                font-size: 14px;
                font-style: normal;
                font-weight: 200;
                line-height: normal;
                letter-spacing: 0.05px;
              }
            }
          }
          .button {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            margin-top: 30px;
            button {
              width: 50%;
              text-align: center;
              font-family: Inter;
              font-size: 14px;
              font-style: normal;
              font-weight: 300;
              line-height: normal;
              letter-spacing: 0.06px;
              padding: 6px 12px;
              &.learnMore {
                border: 1px solid ${Colors.yellow};
                color: #797799;
                background-color: transparent;
              }
              &.DonateNow {
                border: 1px solid ${Colors.yellow};
                background-color: ${Colors.yellow};
                color: ${Colors.dark};
              }
            }
          }
        }
      }
    }
  }
`;
