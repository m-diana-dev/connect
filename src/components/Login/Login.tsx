import {H1} from "../../styles/Theme.tsx";
import {Input} from "../common/Input/Input.tsx";
import {Button} from "../common/Button/Button.tsx";
import styled from "styled-components";
import {Checkbox} from "../common/Checkbox/Checkbox.tsx";
import {Controller, FieldValues, useForm} from "react-hook-form";
import {connect} from "react-redux";
import {loginUserTC} from "../../redux/auth-reducer.ts";
import {AppStateType} from "../../redux/redux-store.ts";
import {Navigate} from "react-router-dom";
import {selectCaptcha, selectError, selectIsAuth} from "../../redux/selectors/auth-selectors.ts";


type mapStateToPropsType = {
    isAuth: boolean
    error: string
    captcha: string
}
type mapDispatchToPropsType = {
    loginUserTC: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

type LoginPropsType = mapStateToPropsType & mapDispatchToPropsType
const Login = (props: LoginPropsType) => {
    const {
        register,
        formState: {
            errors,
            isValid
        },
        handleSubmit,
        control
    } = useForm({
        mode: "onBlur"
    })

    const onSubmitHandler = (formData: FieldValues) => {
        const {email, password, rememberMe, captcha} = formData
        props.loginUserTC(email, password, rememberMe, captcha)
    }

    if (props.isAuth) return <Navigate to={'/profile'}/>

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
                {props.error && <FormError>{props.error}</FormError>}
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
                       placeholder={'Password'} type={'password'}/>
                {errors?.password &&
                    <FormError>{errors.password.message && errors.password.message.toString()}</FormError>}
                <Controller
                    name="rememberMe"
                    control={control}
                    defaultValue={false}
                    render={({field: {ref, ...rest}}) => <Checkbox {...rest} label={'Remember me'}/>}
                />

                {props.captcha && <Captcha src={props.captcha} alt='captcha'/>}
                {
                    props.captcha &&
                    <Input {...register('captcha',
                        {
                            required: 'required field',
                        })}
                           placeholder={'Captcha'}/>
                }
                <Button name={'Login'} disabled={!isValid}/>
            </LoginForm>
        </LoginPage>
    );
};

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        isAuth: selectIsAuth(state),
        error: selectError(state),
        captcha: selectCaptcha(state)
    };
};
export default connect(mapStateToProps, {loginUserTC})(Login)

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
const Captcha = styled.img`
  display: block;
  border: 1px solid ${({theme}) => theme.colors.border};
  width: 200px;
  border-radius: 5px;
  margin-bottom: 20px;
  @media ${({theme}) => theme.media.mobileSmall} {
    margin-bottom: 10px;
    width: 150px;
  }
`