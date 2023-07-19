import Colors from "modules/Colors";
import styled from "styled-components";

export const NavbarStyle = styled.nav`
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.bgColor};
  padding: 0 50px;
  .navbar {
    width: 100%;
    padding: 51px 0 20px;
    display: flex;
    justify-content: space-between;
    gap: 40px;
    border-bottom: 1px solid ${Colors.white};
    .logo {
      width: 20%;
      font-size: 24px;
      text-align: center;
      letter-spacing: 0.1px;
      line-height: 32px;
      font-weight: 600;
      color: ${Colors.white};
      h1 {
        padding: 0 !important;
        margin: 0 !important;
      }
    }
    .menu {
      width: calc(80% - 40px);
      display: flex;
      justify-content: end;
      .nav {
        padding: 0;
        margin: 0;
        list-style: none;
        color: ${Colors.white};
        gap: 15px;
        justify-content: flex-start !important;
        align-items: center;
        display: flex !important;
        &__item {
          /* &:hover { */
          position: relative;
          z-index: 99;
          a {
            display: block;
            position: relative;
            z-index: 1;
            text-decoration: none;
            font-size: 16px;
            color: ${Colors.white};
            margin: 0;
            text-transform: uppercase;
            &::after {
              position: absolute;
              content: "";
              width: 0;
              bottom: 0;
              left: 0;
              height: 1px;
              background: #23a6f0;
              transition: all 0.5s;
            }
            &:hover {
              text-decoration: none !important;
            }
          }
          .transition {
            transition: 0.3s ease-out;
            &:hover {
              text-decoration: none !important;
            }
          }
          &:hover {
            a {
              color: #23a6f0;
            }
            > a:after {
              width: 100%;
            }
          }
        }
        .menu__line {
          position: static !important;

          &:hover .sub {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
          }
          .sub {
            display: block;
            position: absolute;
            top: 90px;
            background-color: ${Colors.mainColor};
            visibility: hidden;
            opacity: 0;
            transition: all 0.5s ease;
            transform: translateY(-20px);
            &__ctt {
              padding: 10px 0px;
              background: ${Colors.mainColor};
            }
            &__item {
              width: 100px;
              &-list {
                width: 100%;
                padding: 0px;
                margin: 0;
                list-style: none;
                text-transform: uppercase;
                li {
                  position: relative;
                  z-index: 99;
                  float: none !important;
                  padding: 0 !important;
                  display: list-item;
                  text-transform: uppercase;
                  text-align: -webkit-match-parent;
                  & > a {
                    display: block;
                    position: relative;
                    z-index: 1;
                    padding: 10px 20px;
                    color: ${Colors.dark};
                    text-transform: none !important;
                    font-size: 13px !important;
                    text-transform: uppercase !important;
                    transition: all 0.4s ease;
                    &:hover {
                      color: #23a6f0;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  .user {
    display: flex;
    align-items: center;
  }
`;
