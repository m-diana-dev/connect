import styled from "styled-components";


export const Error404 = () => {
    return (
        <Error>
            <Title>404</Title>
            <Text>Page not found 🙅</Text>
        </Error>
    )
}

const Error = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  height: 100%;
`

const Title = styled.h1`
  font-size: 100px;
  margin-bottom: 20px;
`
const Text = styled.p`
  font-size: 30px;
`