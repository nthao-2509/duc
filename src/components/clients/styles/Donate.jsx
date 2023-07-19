import Colors from "modules/Colors";
import styled from "styled-components";
export const DonateStyled = styled.div`
  background-color: #d1ecef;
  padding: 50px 0;
  .donate {
    display: inline-flex;
    justify-content: flex-start;
    width: 100%;

    height: auto;
    &__left {
      width: 60%;
      display: inline-block;
      position: relative;
      order: ${(props) => props.orderLeft};
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .content__image {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        .content {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          width: 100%;
          height: 100%;
          div {
            width: 60%;
          }
          .heading {
            h3 {
              color: #fdbe33;
              font-family: Quicksand;
              font-size: 24px;
              font-style: normal;
              font-weight: 700;
              line-height: normal;
            }
          }
          .title {
            h1 {
              color: #fff;
              font-family: Quicksand;
              font-size: 26px;
              font-style: normal;
              font-weight: 700;
              line-height: normal;
            }
          }
          .desc {
            p {
              color: #fff;
              font-family: Quicksand;
              font-size: 16px;
              font-style: normal;
              font-weight: 500;
              line-height: normal;
            }
          }
        }
      }
    }
    &__right {
      width: 40%;
      background-color: ${Colors.yellow};
      padding: 28px;
      order: ${(props) => props.orderRight};
      .content {
        width: 100%;
        height: 100%;
        display: inline-flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        gap: 10px;
        .input {
          width: 100%;
          input,
          textarea {
            width: 100%;
            padding: 10px 15px;
            background-color: transparent;
            border: 2px solid #fff;
            outline: none;
            &:not(:placeholder-shown) {
              background-color: #fdbe33;
            }
            &:valid {
              background-color: transparent;
            }
            &::placeholder {
              color: #fff;
              font-family: Quicksand;
              font-size: 14px;
              font-style: normal;
              font-weight: 500;
              line-height: normal;
            }
          }
          input {
            &::-webkit-datetime-edit-month-field,
            &::-webkit-datetime-edit-day-field,
            &::-webkit-datetime-edit-year-field,
            ::-webkit-datetime-edit-text {
              color: #fff;
            }
          }
        }
        .donate {
          display: inline-block;
          padding: 10px 15px;
          height: 50px;
          border: 2px solid #fff;
          color: #fff;
          font-family: Quicksand;
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          transition: all 0.4s ease;
          &:hover {
            background-color: #fff;
            color: ${Colors.yellow};
          }
        }
        .button__upload {
          background-color: #fff;
          color: #fdbe33 !important;
          &:hover {
            border-color: #fdbe33 !important;
          }
        }
      }
    }
  }
`;
