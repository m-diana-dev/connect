import styled from "styled-components";
import {Container} from "../../styles/Theme.tsx";
import logo from '../../images/logo.png'
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean
    login: string
    id: number
    SetUser: (id: number, login: string, email: string) => void
}
export const Header = (props: HeaderPropsType) => {
    return (
        <SiteHeader>
            <Container>
                <SiteHeaderWrapp>
                    <NavLink to={`/profile/${props.id}`}>
                        <SiteLogo>
                            <img src={logo} alt="logo"/>
                            <span>Connect</span>
                        </SiteLogo>
                    </NavLink>
                    <HeaderUser>
                        {(props.isAuth) ? <NavLink to={`/profile/${props.id}`}>{props.login}</NavLink> :
                            <a>Log In</a>}
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
    span{
      color: ${({theme}) => theme.colors.second}
    }
    img{
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
  @media ${({theme}) => theme.media.mobile} {
    font-size: 18px;
  }
  @media ${({theme}) => theme.media.mobileSmall} {
    font-size: 16px;
  }

  &:hover {
    color: ${({theme}) => theme.colors.second}
  }
`
