import {H1} from "../../styles/Theme.tsx";
import {Input} from "../Input/Input.tsx";
import {Button} from "../Button/Button.tsx";
import styled from "styled-components";
import {Checkbox} from "../Checkbox/Checkbox.tsx";
import {FieldValues, useForm} from "react-hook-form";

export const Login = () => {
    const {
        register,
        formState: {
            errors,
            isValid
        },
        handleSubmit,
        reset
    } = useForm({
        mode: "onBlur"
    })

    const onSubmitHandler = (formData: FieldValues) => {
        alert(JSON.stringify(formData));
        reset()
    }

    return (
        <LoginPage>
            <H1>Login</H1>
            <p>
                <span>To log in get registered </span>
                <a href={'https://social-network.samuraijs.com/'}
                   target={'_blank'}>here
                </a>
            </p>
            <p>or use common test account credentials:</p>
            <p>Email: free@samuraijs.com</p>
            <p>Password: free</p>
            <LoginForm onSubmit={handleSubmit(onSubmitHandler)}>
                <Input {...register('email',
                    {
                        required: 'required field',
                        pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'incorrect email'}
                    })}
                       placeholder={'Email'}/>
                {errors?.email && <FormError>{errors.email.message && errors.email.message.toString()}</FormError>}
                <Input {...register('password',
                    {
                        required: 'required field',
                        minLength: {value: 5, message: 'min length - 5'}
                    })}
                       placeholder={'Password'}/>
                {errors?.password && <FormError>{errors.password.message && errors.password.message.toString()}</FormError>}
                <Checkbox label={'Remember me'}/>
                <Button name={'Login'} callback={() => {}} disabled={!isValid}/>
            </LoginForm>
        </LoginPage>
    );
};

const LoginPage = styled.div`
  p {
    font-size: 16px;
    line-height: 120%;
    @media ${({theme}) => theme.media.mobileSmall} {
      font-size: 14px;
    }

    &:not(:last-child) {
      margin-bottom: 10px;
      @media ${({theme}) => theme.media.mobileSmall} {
        margin-bottom: 7px;
      }
    }
  }

  a {
    color: ${({theme}) => theme.colors.main};
    text-decoration: underline;
    transition: all .3s;

    &:hover {
      color: ${({theme}) => theme.colors.second};
    }
  }
`

const LoginForm = styled.form`
  padding: 20px 0;
  max-width: 500px;
  width: 100%;
  @media ${({theme}) => theme.media.mobileSmall} {
    padding: 10px 0;
  }

  input {
    &:not(:last-child) {
      margin-bottom: 20px;
      @media ${({theme}) => theme.media.mobileSmall} {
        margin-bottom: 10px;
      }
    }
  }
`

const FormError = styled.div`
  font-size: 15px;
  margin-bottom: 20px;
  color: #c40a0a;
  @media ${({theme}) => theme.media.mobileSmall} {
    margin-bottom: 10px;
  }
`
