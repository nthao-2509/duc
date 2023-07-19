import styled from "styled-components";

export const JobStyled = styled.div`
  background-color: #d1ecef;
  width: 100%;
  height: 100%;
  .job {
    padding: 32px 0 50px;
    width: 100%;
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
    .job__list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
      margin-top: 50px;
      .item {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        .content {
          &__title {
            h1 {
              color: #000;
              text-align: center;
              font-family: Work Sans;
              font-size: 15px;
              font-style: normal;
              font-weight: 600;
              line-height: normal;
              letter-spacing: -0.2px;
            }
          }
          &__description {
            p {
              color: #000;
              font-family: Work Sans;
              font-size: 14px;
              font-style: normal;
              font-weight: 300;
              line-height: normal;
              letter-spacing: -0.16px;
            }
          }
        }
      }
    }
  }
`;
