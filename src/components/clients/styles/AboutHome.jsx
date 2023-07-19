import styled from "styled-components";
export const AboutUsHomeStyle = styled.div`
  background-color: #dcf9fc;
  .about {
    padding: 32px 16px;
    display: flex;
    align-items: center;
    gap: 40px;
    .left {
      width: 30%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .right {
      width: calc(70% - 40px);
      height: 100%;
      display: flex;
      align-items: start;
      justify-content: center;
      flex-direction: column;
      gap: 30px;
      .heading {
        h3 {
          color: #f2bc33;
          font-family: Quicksand;
          font-size: 16px;
          font-style: normal;
          font-weight: 700;
          line-height: 16px; /* 100% */
          letter-spacing: 0.08px;
        }
      }
      .title {
        h1 {
          color: #767676;
          font-family: Quicksand;
          font-size: 24px;
          font-style: normal;
          font-weight: 700;
          line-height: 20px; /* 83.333% */
          letter-spacing: 0.12px;
        }
      }
    }
  }
`;
