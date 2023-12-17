import preloader from '../../../images/loading.svg'
import styled from "styled-components";

export const Preloader = () => {
    return (
        <SitePreloader>
            <img src={preloader}/>
        </SitePreloader>
    );
};

const SitePreloader = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    width: 200px;
    height: 200px;
    object-fit: cover;
    @media ${({theme}) => theme.media.mobile} {
      width: 150px;
      height: 150px;
    }
    @media ${({theme}) => theme.media.mobileSmall} {
      width: 100px;
      height: 100px;
    }
  }
`