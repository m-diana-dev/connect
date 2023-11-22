import React, {InputHTMLAttributes} from "react";
import styled from "styled-components";


type InputPropsType = {
    
} & InputHTMLAttributes<HTMLInputElement>
export const Input: React.FC<InputPropsType> = (props) => {
    const {...restProps} = props
    return (
        <SiteInput {...restProps}/>
    );
}


const SiteInput = styled.input `
  display: block;
  padding: 0 20px;
  border-radius: 5px;
  border: 1px solid ${({theme}) => theme.colors.border};
  height: 50px;
  background-color: #fff;
  font-size: 18px;
  line-height: 120%;
  @media ${({theme}) => theme.media.mobileSmall} {
    height: 40px;
    font-size: 16px;
    padding: 0 15px;
  }
`