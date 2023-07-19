import styled from "styled-components";

export const DashboardStyled = styled.div`
  padding: 20px 0;
  .cards__total-donate {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
  .total__calling-mount {
    padding: 40px 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
    .item {
      background-color: #fff;
      .title {
        padding: 20px 20px;
        border-bottom: 1px solid #000;
        h1 {
          color: #000;
          font-family: Inter;
          font-size: 20px;
          font-style: normal;
          font-weight: 700;
          line-height: 16px;
          letter-spacing: 0.12px;
        }
      }
      .process {
        padding: 30px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 30px;
        &__item {
          width: 50%;
          p {
            margin: 0 !important;
            color: #000;
            font-family: Inter;
            font-size: 16px;
            font-style: normal;
            font-weight: 700;
            line-height: 16px;
            letter-spacing: 0.08px;
          }
        }
      }
    }
  }
  .overview-report {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    .overview {
      width: 60%;
      min-height: 50vh;
      background-color: #fff;
      padding: 10px 20px;
    }
    .report {
      min-height: 50vh;
      background-color: #fff;
      width: 40%;
      padding: 10px 20px;

      .title {
        h1 {
          color: #000;
          font-family: Inter;
          font-size: 24px;
          font-style: normal;
          font-weight: 700;
          line-height: 16px;
          letter-spacing: 0.12px;
        }
      }
    }
  }
`;
export const CardTotalDonate = styled.div`
  background: ${(props) => props.bg};
  padding: 20px 10px;
  border-radius: 20px;
  .title {
    h1 {
      color: #fff;
      font-family: Quicksand;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 16px;
      letter-spacing: 0.08px;
    }
  }
  .total {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 20px 0;
    p {
      margin: 0 !important;
      color: #fff;
      font-family: Quicksand;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 16px; /* 100% */
      letter-spacing: 0.08px;
    }
  }
`;
