
import styled from "styled-components";
import {Button} from "../Button/Button.tsx";

type PaginationPropsType= {
    pageSize: number
    currentPage: number
    totalUsersCount: number
    onClickHandler: (page: number) => void
}
export const Pagination = (props: PaginationPropsType) => {
    const pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= pageCount; i++) {
        if (pages.length < 10) {
            pages.push(i)
        }
    }
    return (
        <SitePagination>
            {pages.map(el => <Button active={props.currentPage === el}
                                     pagination={true}
                                     callback={() => props.onClickHandler(el)}
                                     name={el.toString()}></Button>)}
        </SitePagination>
    );
};


const SitePagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  @media ${({theme}) => theme.media.mobileSmall} {
    flex-wrap: wrap;
  }
`