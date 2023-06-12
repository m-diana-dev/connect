import styled from "styled-components";

export type MessageItemPropsType = {
    my?: boolean
    text: string
}
export const MessageItem = ({my, text}: MessageItemPropsType) => {
    return (
        <Message my={my}>{text}</Message>
    )
}


const Message = styled.div<{my?:boolean}>`
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  max-width: 80%;
  width: fit-content;
  white-space: normal;
  font-size: 18px;
  background-color: ${(props) => props.my ? '#D0D0D2' : ({theme}) => theme.colors.main};
  color: ${(props) => props.my ? '#000' : '#fff'};
  margin-right: ${(props) => props.my ? '0' : 'auto'};
  margin-left: ${(props) => props.my ? 'auto' : '0'};

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`