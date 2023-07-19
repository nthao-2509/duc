import styled from "styled-components";
export const TestimonialStyled = styled.div`
  padding: 50px 0;
  background-color: #dcf9fc;
  .content {
    /* display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px; */
    .item {
      height: 300px;
      padding: 0 20px;
      .top {
        display: flex;
        align-items: end;
        justify-content: start;
        border-bottom: 1px solid #777;
        &__left {
          width: 50%;
          height: 60%;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        &__right {
          h1 {
            color: #000;
            font-family: Quicksand;
            font-size: 14px;
            font-style: normal;
            font-weight: 700;
            line-height: 16px;
            letter-spacing: 0.06px;
          }
        }
      }
      .bottom {
        padding: 30px 10px;
        p {
          color: #000;
          font-family: Quicksand;
          font-size: 13px;
          font-style: normal;
          font-weight: 400;
          line-height: 16px;
          letter-spacing: 0.055px;
        }
      }
    }
  }
`;
