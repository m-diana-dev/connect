import styled from "styled-components";

type ButtonPropsType = {
    name: string
    callback: () => void
}

export const Button = ({name, callback}: ButtonPropsType) => {
    return (
        <SiteButton onClick={callback}>{name}</SiteButton>
    );
};


const SiteButton = styled.button`
  display: inline-block;
  max-width: 200px;
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  background-color: ${({theme}) => theme.colors.main};
  padding: 10px;
  text-align: center;
  color: #fff;
  border-radius: 20px;
  transition: ${({theme}) => theme.transition};

  &:hover {
    background-color: ${({theme}) => theme.colors.second};
  }
`