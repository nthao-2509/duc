import Colors from "modules/Colors";
import styled from "styled-components";
export const OurTeamStyled = styled.div`
  padding: 50px 0;
  background-color: #dcf9fc;
  .content {
    .items {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 20px;
      .item {
        background-color: ${Colors.white};
        .info {
          background-color: #d9d9d9;
          padding: 10px 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          color: #000;
          font-family: Quicksand;
          font-size: 11px;
          font-style: normal;
          font-weight: 700;
          line-height: 16px;
          letter-spacing: 0.055px;
        }
      }
    }
  }
`;
