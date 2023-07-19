import Colors from "modules/Colors";
import styled from "styled-components";
export const CardStyled = styled.div`
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
      .comment {
        padding: 20px 20px;
        margin-top: 20px;
        &__content {
          border-top: 1px solid #777;
          display: flex;
          align-items: center;
        }
        .item {
          margin: 20px 0 0;
          display: flex;
          align-items: center;
          color: #565a81;
          font-family: Inter;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          letter-spacing: 0.04px;
          display: flex;
          align-items: center;
          gap: 20px;
          &:first-child {
            border-right: 2px solid #777;
            padding-right: 10px;
          }
          &:last-child {
            padding: 0 20px;
          }
          p,
          h1 {
            margin: 0 !important;
          }
        }
      }
    }
  }
`;
