import styled from "styled-components";
import {Container} from "../../styles/Theme.tsx";
import logo from '../../assets/images/logo.png'
import {NavLink} from "react-router-dom";
import {Button, SiteButton} from "../common/Button/Button.tsx";
import {Icon} from "../common/Icon/Icon.tsx";

type HeaderPropsType = {
    isAuth: boolean
    login: string
    id: number
    logoutUserTC: () => void
}
export const Header = (props: HeaderPropsType) => {
    return (
        <SiteHeader>
            <Container>
                <SiteHeaderWrapp>
                    <NavLink to={`/profile`}>
                        <SiteLogo>
                            <img src={logo} alt="logo"/>
                            <span>Connect</span>
                        </SiteLogo>
                    </NavLink>
                    <HeaderUser>
                        {
                            (props.isAuth)
                                ?
                                <Button callback={() => props.logoutUserTC()} transparent={true}>
                                    <span>{props.login}</span>
                                    <Icon id={'logout'} height={'30'} width={'50'} viewBox={'0 0 500 500'}/>
                                </Button>
                                :
                                <NavLink to={'/login'}>Log In</NavLink>
                        }
                    </HeaderUser>
                </SiteHeaderWrapp>
            </Container>
        </SiteHeader>
    )
}

const SiteHeader = styled.header`
  background-color: ${({theme}) => theme.colors.main};
  padding: 10px 0;
  @media ${({theme}) => theme.media.mobile} {
    padding: 5px 0;
  }
`
const SiteHeaderWrapp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const SiteLogo = styled.div`
  display: flex;
  align-items: center;

  &:hover {
    span {
      color: ${({theme}) => theme.colors.second}
    }

    img {
      transform: rotate(-43deg);
    }
  }

  img {
    width: 70px;
    margin-right: 10px;
    transition: all .3s;
    @media ${({theme}) => theme.media.mobile} {
      width: 60px;
    }
  }

  span {
    color: #fff;
    font-size: 20px;
    font-weight: 800;
    transition: all .3s;
    @media ${({theme}) => theme.media.mobile} {
      font-size: 18px;
    }
  }
`
const HeaderUser = styled.div`
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  transition: all .3s;
  &:hover{
    color: ${({theme}) => theme.colors.second};
  }

  
  @media ${({theme}) => theme.media.mobile} {
    font-size: 18px;
  }
  @media ${({theme}) => theme.media.mobileSmall} {
    font-size: 16px;
  }


  ${SiteButton} {
    max-width: 130px;
  }
`
