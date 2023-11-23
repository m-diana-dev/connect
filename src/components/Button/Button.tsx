import styled from "styled-components";

type ButtonPropsType = {
    name: string
    callback?: () => void
    pagination?: boolean
    active?: boolean
    disabled?: boolean
}

export const Button = ({name, callback, pagination, active, disabled}: ButtonPropsType) => {
    return (
        <SiteButton active={active} pagination={pagination} onClick={callback} disabled={disabled}>{name}</SiteButton>
    );
};


const SiteButton = styled.button<{pagination?:boolean, active?:boolean}>`
  display: block;
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  padding: 10px;
  text-align: center;
  border: 1px solid;
  transition: ${({theme}) => theme.transition};
  border-radius: ${(props) => props.pagination ? '50%' : '20px'};
  max-width: ${(props) => props.pagination ? '42px' : '200px'};
  height: ${(props) => props.pagination ? '42px' : 'auto'};
  background-color: ${(props) => props.pagination
          ? props.active ? ({theme}) => theme.colors.main : '#fff'
          : ({theme}) => theme.colors.main};
  color: ${(props) => props.pagination
          ? props.active ? '#fff' : ({theme}) => theme.colors.main
          : '#fff'};
  border-color: ${(props) => props.pagination ? ({theme}) => theme.colors.main : 'transparent'};

  &:hover {
    background-color: ${({theme}) => theme.colors.second};
    border-color: transparent;
    color: #fff;
  }
  &:disabled{
    opacity: 0.5;
    pointer-events: none;
  }

  @media ${({theme}) => theme.media.mobile} {
    max-width: ${(props) => props.pagination ? '35px' : '150px'};
    height: ${(props) => props.pagination ? '35px' : 'auto'};
    font-size: 15px;
    padding: 8px;
    border-radius: ${(props) => props.pagination ? '50%' : '17px'};
  }
  @media ${({theme}) => theme.media.mobileSmall} {
    max-width: ${(props) => props.pagination ? '35px' : '100%'};
  }
`