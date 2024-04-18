import styled from "styled-components";
import {Button} from "../Button/Button.tsx";
import {useState} from "react";
import {Icon} from "../Icon/Icon.tsx";

type PaginationPropsType = {
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
            {portionNumber > 1 && <Button pagination={true} callback={() => setPortionNumber(portionNumber - 1)}>
                <Icon id={'arrow-prev'} height={'30'} width={'30'} viewBox={'0 0 25 25'}/>
            </Button>}
            {pages.filter(el => el >= leftPortionPageNumber && el <= rightPortionPageNumber)
                .map(el => <Button active={props.currentPage === el}
                                   pagination={true}
                                   callback={() => props.onClickHandler(el)}
                                   name={el.toString()}></Button>)}
            {portionCount > portionNumber &&
                <Button pagination={true} callback={() => setPortionNumber(portionNumber + 1)}>
                    <Icon id={'arrow-next'} height={'30'} width={'30'} viewBox={'0 0 25 25'}/>
                </Button>}
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