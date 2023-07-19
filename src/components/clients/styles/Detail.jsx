import Colors from "modules/Colors";
import styled from "styled-components";
export const DetailStyled = styled.div`
  padding: 50px 0;
  background-color: #d1ecef;
  .detail {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 40px;
    .left {
      width: 60%;
    }
    .right {
      width: calc(40% - 40px);

      .search {
        position: relative;
        input {
          width: 100%;
          padding: 10px 15px;
          outline: none;
          border: 1px solid #777;
          border-radius: 20px;
        }
        i {
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
        }
      }
      .widget {
        &__title {
          display: inline-block;
          border-bottom: 1px solid ${Colors.yellow};
          h1 {
            color: #3545d9;
            font-family: Inter;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 16px;
            letter-spacing: 0.1px;
          }
        }
        &__des {
          margin-top: 20px;
          p {
            color: #000;
            font-family: Inter;
            font-size: 15px;
            font-style: normal;
            font-weight: 300;
            line-height: 16px;
            letter-spacing: 0.075px;
          }
        }
      }
    }
  }
`;
