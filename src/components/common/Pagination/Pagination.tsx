
import styled from "styled-components";
import {Button} from "../Button/Button.tsx";
import {useState} from "react";

type PaginationPropsType= {
    pageSize: number
    currentPage: number
    totalItemsCount: number
    portionSize: number
    onClickHandler: (page: number) => void
}
export const Pagination = (props: PaginationPropsType) => {
    const [portionNumber, setPortionNumber] = useState(1)
    const pageCount = Math.ceil(props.totalItemsCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
    }
    console.log(portionNumber)

    const portionCount = Math.ceil(pageCount / props.portionSize)
    const leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1
    const rightPortionPageNumber = portionNumber * props.portionSize

    return (
        <SitePagination>
            {portionNumber > 1 && <Button name={'prev'} callback={() => setPortionNumber(portionNumber - 1)}></Button>}
            {pages.filter(el => el>= leftPortionPageNumber && el<= rightPortionPageNumber)
                .map(el => <Button active={props.currentPage === el}
                                     pagination={true}
                                     callback={() => props.onClickHandler(el)}
                                     name={el.toString()}></Button>)}
            {portionCount > portionNumber && <Button name={'next'} callback={() => setPortionNumber(portionNumber + 1)}></Button>}
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