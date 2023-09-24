import styled from "styled-components";

export const Burger = () => {
    return (
        <SiteBurger>
            <span></span>
        </SiteBurger>
    );
};



const SiteBurger = styled.button`
  display: none;

  @media ${({theme}) => theme.media.mobile} {
    display: block;
    position: relative;
    width: 20px;
    height: 15px;
    cursor: pointer;
    z-index: 10;

    span,
    &::before,
    &::after {
      content: "";
      transition: all 0.3s ease 0s;
      left: 0px;
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: #fff;
    }

    &::before {
      top: 0px;
    }

    &::after {
      bottom: 0px;
    }

    span {
      top: calc(50% - 1px);
    }

    .menuOpen & {
      span {
        transform: scale(0);
      }

      &::before {
        transform: rotate(-45deg);
        top: calc(50% - 1px);
      }

      &::after {
        transform: rotate(45deg);
        bottom: calc(50% - 1px);
      }

      span,
      &::before,
      &::after {
        background-color: #fff;
      }
    }
  }
`