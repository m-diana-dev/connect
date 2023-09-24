import styled from "styled-components";
import {Container} from "../../styles/Theme.tsx";
import logo from '../../images/logo.png'

export const Header = () => {
    return (
        <SiteHeader>
            <Container>
                <SiteHeaderWrapp>
                    <SiteLogo>
                        <img src={logo} alt="logo"/>
                        <span>Connect</span>
                    </SiteLogo>
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
