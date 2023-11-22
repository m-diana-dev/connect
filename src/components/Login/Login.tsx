import {H1} from "../../styles/Theme.tsx";
import {Input} from "../Input/Input.tsx";
import {Button} from "../Button/Button.tsx";
import styled from "styled-components";
import {Checkbox} from "../Checkbox/Checkbox.tsx";

export const Login = () => {
    return (
        <>
            <H1>Login</H1>
            <LoginForm>
                <Input placeholder={'Email'}/>
                <Input placeholder={'Password'}/>
                <Checkbox label={'Remember me'}/>
                <Button name={'Login'} callback={()=>{}}/>
            </LoginForm>
        </>
    );
};

const LoginForm = styled.form `
  padding: 20px 0;
  max-width: 500px;
  width: 100%;
  @media ${({theme}) => theme.media.mobileSmall} {
    padding: 10px 0;
  }
  input{
    &:not(:last-child){
      margin-bottom: 20px;
      @media ${({theme}) => theme.media.mobileSmall} {
        margin-bottom: 10px;
      }
    }
  }
`
