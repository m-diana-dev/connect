import styled, {createGlobalStyle, DefaultTheme, ThemeProvider} from "styled-components";
import {ReactNode} from "react";


const GlobalStyles = createGlobalStyle`
  * {
    padding: 0px;
    margin: 0px;
    border: 0px;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  :focus,
  :active {
    // outline: none;
  }

  a:focus,
  a:active {
    // outline: none;
  }

  html,
  body {
    height: 100%;
  }

  body {
    line-height: 1;
    //text-rendering: optimizeLegibility;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${({theme})=>theme.fontFamily.Montserrat};
    color: #1B1B1B;
    background: ${({theme})=>theme.colors.bgBody};
    padding: 0 0 30px 0;
  }

  input,
  button,
  textarea {
    font-size: inherit;
    font-family: ${({theme})=>theme.fontFamily.Montserrat};
  }

  button {
    cursor: pointer;
    color: inherit;
    background-color: inherit;
  }

  a {
    color: inherit;
  }

  a:link,
  a:visited {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  ul li {
    list-style: none;
  }

  img {
    vertical-align: top;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: inherit;
    font-size: inherit;
  }
`
//type Theme
declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            main: string
            second: string
            border: string
            bgBody: string
        }
        title: {
            h1: string
            h2: string
            h3: string
            btn: string
            text: string
        }
        fontFamily: {
            Montserrat: string
        }
        transition: string
        media: {
            tablet: string,
            mobile: string,
            mobileSmall: string,
        }
    }
}

const theme: DefaultTheme = {
    colors: {
        main: '#A72DFF',
        second: '#EFB701',
        border: '#DEDCFF',
        bgBody: '#ffffff'
    },
    title: {
        h1: '30px',
        h2: '25px',
        h3: '20px',
        btn: '16px',
        text: '16px',
    },
    fontFamily: {
        Montserrat: 'Montserrat, sans-serif'
    },
    transition: 'all .3s',
    media: {
        tablet: '(max-width: 991px)',
        mobile: '(max-width: 768px)',
        mobileSmall: '(max-width: 480px)',
    }
}

export const H1= styled.h1`
  font-size: ${({theme})=>theme.title.h1};
  margin-bottom: 20px;
  font-weight: 600;
  @media ${({theme}) => theme.media.tablet} {
    font-size: 26px;
  }
  @media ${({theme}) => theme.media.mobile} {
    font-size: 24px;
    margin-bottom: 15px;
  }
  @media ${({theme}) => theme.media.mobileSmall} {
    font-size: 22px;
    margin-bottom: 10px;
  }
`
export const H2= styled.h2`
  font-size: ${({theme})=>theme.title.h2};
  margin-bottom: 15px;
  font-weight: 500;
  @media ${({theme}) => theme.media.tablet} {
    font-size: 22px;
  }
  @media ${({theme}) => theme.media.mobile} {
    font-size: 20px;
  }
  @media ${({theme}) => theme.media.mobileSmall} {
    font-size: 18px;
  }
`
export const Textarea= styled.textarea`
  width: 100%;
  height: 200px;
  resize: none;
  border: 1px solid ${({theme}) => theme.colors.border};
  margin-bottom: 15px;
  border-radius: 10px;
  padding: 20px;
  font-size: 16px;
  @media ${({theme}) => theme.media.mobileSmall} {
    height: 120px;
    margin-bottom: 10px;
    padding: 15px;
  }
`

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
  @media ${({theme}) => theme.media.mobile} {
    width: 100%;
    padding: 0 15px;
  }
`

export const Section= styled.section`
    padding: 20px 0;
`
export const Flex= styled.div`
  display: flex;
  justify-content: space-between;
  @media ${({theme}) => theme.media.mobile} {
    flex-direction: column;
  }
`
export const MainBlock= styled.main`
  width: calc(70% - 20px);
  @media ${({theme}) => theme.media.tablet} {
    width: calc(70% - 10px);
  }
  @media ${({theme}) => theme.media.mobile} {
    width: 100%;
  }
`

type ThemeProps = {
    children: ReactNode
}

export const Theme = ({children}: ThemeProps) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            {children}
        </ThemeProvider>
    );
};