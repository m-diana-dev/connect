import React, {InputHTMLAttributes} from 'react';
import {Input} from "../Input/Input";
import styled from "styled-components";


export type CheckboxPropsType = {
    label?: string
} & InputHTMLAttributes<HTMLInputElement>
export const Checkbox: React.FC<CheckboxPropsType> = (props) => {
    const {label, ...restProps} = props
    return (
        <SiteCheckbox>
            <Input type="checkbox" {...restProps}/>
            <SiteCheckboxLabel>{label}</SiteCheckboxLabel>
        </SiteCheckbox>
    );
};

const SiteCheckbox = styled.div `
  position: relative;
  display: inline-block;
  margin-bottom: 20px;
  @media ${({theme}) => theme.media.mobileSmall} {
    margin-bottom: 15px;
  }
  &.disabled{
    opacity: 0.5;
    pointer-events: none;
  }
  input{
    position: absolute;
    cursor: pointer;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 2;
    &:checked+label:after {
      transform: scale(1);
    }
  }
`
const SiteCheckboxLabel = styled.label `
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  position: relative;
  gap: 10px;
  font-size: 16px;
  @media ${({theme}) => theme.media.mobileSmall} {
    font-size: 14px;
  }
  &:before {
    content: "";
    align-self: flex-start;
    flex: 0 0 17px;
    width: 17px;
    height: 17px;
    border-radius: 50%;
    border: 1px solid ${({theme}) => theme.colors.border};
  }
  &::after {
    content: '';
    width: 9px;
    height: 9px;
    transform: scale(0);
    position: absolute;
    top: 4px;
    left: 4px;
    background-color: ${({theme}) => theme.colors.second};
    border-radius: 50%;
    transition: all .3s;
  }
`