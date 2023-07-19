import Colors from "modules/Colors";
import styled from "styled-components";
export const RecentPostStyled = styled.div`
  padding: 50px 0;
  .title {
    display: inline-block;
    border-bottom: 1px solid ${Colors.yellow};
    h1 {
      color: #000;
      font-family: Quicksand;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 16px;
      letter-spacing: 0.1px;
    }
  }
  .content {
    padding: 20px 0;
    .items {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      gap: 20px;
      .item {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 20px;
        .left {
          width: 30%;
        }
        .right {
          width: calc(70% - 20px);
          line-height: 16px;
          letter-spacing: 0.075px;
          font-style: normal;
          font-family: Quicksand;
          font-size: 15px;

          &__title {
            h1 {
              color: #359dd9;
              font-weight: 500;
            }
          }
          &__des {
            P {
              color: #000;
              font-weight: 500;
            }
          }
        }
      }
    }
  }
`;
export const AuthorNameStyled = styled.div`
  padding: 30px 0;
  .author {
    width: 100%;
    height: 100%;
    background-color: #f1e9e9;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 30px;
    .left {
      width: 25%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .right {
      width: calc(75% - 30px);
      .name {
        h1 {
          color: #359dd9;
          font-family: Inter;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 16px;
          letter-spacing: 0.075px;
        }
      }
      .info {
        p {
          margin-top: 20px;
          color: #000;
          font-family: Inter;
          font-size: 15px;
          font-style: normal;
          font-weight: 400;
          line-height: 16px;
          letter-spacing: 0.075px;
        }
      }
    }
  }
`;
export const CategoriesStyle = styled.div`
  padding: 50px 0;
  .title {
    margin-bottom: 30px;
    h1 {
      color: #184afb;
      font-family: Inter;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0.12px;
    }
  }
  .ant-collapse,
  .ant-collapse-item {
    border: none;
    background-color: transparent !important;
  }
  .ant-collapse .ant-collapse-content {
    background-color: transparent !important;
  }
  .title__collapse {
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      margin: 0 !important;
    }
  }
`;
export const TagsStyled = styled.div`
  .title {
    display: inline-block;
    border-bottom: 1px solid ${Colors.yellow};
    h1 {
      color: #1857fb;
      font-family: Inter;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px; /* 80% */
      letter-spacing: 0.1px;
    }
  }
  .tags {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 20px;
    p {
      margin: 0 !important;
      padding: 10px 15px;
      border: 1px solid #777;
      background-color: transparent;
    }
  }
`;
export const CommentsStyled = styled.div`
  .title {
    display: inline-block;
    border-bottom: 1px solid ${Colors.yellow};
    h1 {
      color: #777;
      font-family: Inter;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px; /* 80% */
      letter-spacing: 0.1px;
    }
  }
  .content {
    .items {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      gap: 50px;
      margin-top: 20px;
      max-height: 60vh;
      padding: 0 20px;
      overflow-y: auto;
      scroll-behavior: smooth;
      ::-webkit-scrollbar {
        width: 10px;
      }
      ::-webkit-scrollbar-track {
        border-radius: 10px;
        background: #f1f1f1;
      }

      ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 10px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #555;
        border-radius: 10px;
      }
      .item {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 20px;
        .avt {
          width: 20%;
          height: 100%;
          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: cover;
          }
        }
        .info {
          width: calc(80% - 20px);
          .date {
            p {
              color: #777;
              font-size: 14px;
            }
          }
          .input__reply {
            position: relative;
            input {
              width: 100%;
              padding: 10px 15px;
              border: 1px solid #777;
              outline: none;
              background-color: transparent;
              border-radius: 5px;
            }
            i {
              position: absolute;
              top: 50%;
              right: 20px;
              transform: translateY(-50%);
              cursor: pointer;
            }
          }
          .reply {
            padding: 10px 15px;
            border: 1px solid ${Colors.yellow};
            color: #000;
            font-family: Inter;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: 16px;
            letter-spacing: 0.075px;
            margin: 0 !important;
          }
        }
      }
    }
  }
`;
