import Colors from "modules/Colors";
import styled from "styled-components";

export const ContactStyled = styled.div`
  width: 100%;
  min-height: calc(70vh + 499px);
  background-color: #dcf9fc;
  position: relative;
  padding: 50px 0;
  z-index: 1;
  .bg-img {
    position: absolute;
    top: 15%;
    left: 0;
    width: 100%;
    height: 499px;
    object-fit: cover;
    z-index: -1;
  }
  .form {
    position: absolute;
    width: 1024px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -30%);
    padding: 23px 67px;
    background-color: #edf5fa;
    border: 1px solid #c4c4c4;
    .input,
    .textarea {
      background-color: transparent;
      width: 100%;
      margin: 20px 0;
      input,
      textarea {
        background-color: transparent;
        width: 100%;
        border: 1px solid #c4c4c4;
        outline: none;
        padding: 5px;
        &::placeholder {
          color: #000;
          font-family: Inter;
          font-size: 12px;
          font-style: normal;
          font-weight: 500;
          line-height: 16px;
        }
      }
    }
    .button {
      width: 100%;
      border: 1px solid ${Colors.yellow};
      padding: 10px;
      text-align: center;
      button {
        color: #000;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 16px;
      }
    }
  }
`;
