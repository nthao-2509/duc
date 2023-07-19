import Colors from "modules/Colors";
import styled from "styled-components";
export const StyleHeader = styled.div`
  height: 100%;
  width: 100%;
  background-color: #252b42;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${Colors.white};
    padding: 0 24px;
    p {
      margin: 0;
      padding: 0;
    }
    &__left {
      display: flex;
      align-items: center;
      gap: 10px;
      width: calc(100% / 3);
      .item {
        display: flex;
        align-items: center;
        gap: 5px;
        padding: 14px 10px;
      }
    }
    &__center {
      width: calc(100% / 3);
      text-align: center;
    }
    &__right {
      width: calc(100% / 3);
      ul {
        display: flex;
        align-items: center;
        justify-content: end;
        gap: 5px;
        margin-bottom: 0 !important;
        i {
          padding: 5px;
        }
      }
    }
  }
`;
