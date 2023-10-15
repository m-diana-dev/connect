import styled from "styled-components";
import {Container} from "../../styles/Theme.tsx";
import logo from '../../images/logo.png'

type HeaderPropsType = {
    isAuth: boolean
    login: string
    SetUser: (id: number, login: string, email: string) => void
}
export const Header = (props: HeaderPropsType) => {
    return (
        <SiteHeader>
            <Container>
                <SiteHeaderWrapp>
                    <SiteLogo>
                        <img src={logo} alt="logo"/>
                        <span>Connect</span>
                    </SiteLogo>
                    <HeaderUser>
                        {(props.isAuth) ? props.login : <a>Log In</a>}
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

  img {
    width: 70px;
    margin-right: 10px;
    @media ${({theme}) => theme.media.mobile} {
      width: 60px;
    }
  }

  span {
    color: #fff;
    font-size: 20px;
    font-weight: 800;
    @media ${({theme}) => theme.media.mobile} {
      font-size: 18px;
    }
  }
`
const HeaderUser = styled.div `
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: all .3s;
  &:hover{
    color: ${({theme}) => theme.colors.second}
  }
`
