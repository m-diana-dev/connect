var p=Object.defineProperty;var d=(s,t,e)=>t in s?p(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var c=(s,t,e)=>(d(s,typeof t!="symbol"?t+"":t,e),e);import{n as a,r as C,j as o,B as r,H as h,U as x,R as U,P as f,c as P,s as w,a as S,t as j,b as T,d as b,e as z,f as k,g as F,h as H,i as I,k as v,u as L,l as N}from"./index-47fbf49b.js";const y=s=>{const[t,e]=C.useState(1),i=Math.ceil(s.totalItemsCount/s.pageSize),l=[];for(let n=1;n<=i;n++)l.push(n);console.log(t);const g=Math.ceil(i/s.portionSize),u=(t-1)*s.portionSize+1,m=t*s.portionSize;return o.jsxs(B,{children:[t>1&&o.jsx(r,{name:"prev",callback:()=>e(t-1)}),l.filter(n=>n>=u&&n<=m).map(n=>o.jsx(r,{active:s.currentPage===n,pagination:!0,callback:()=>s.onClickHandler(n),name:n.toString()})),g>t&&o.jsx(r,{name:"next",callback:()=>e(t+1)})]})},B=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  @media ${({theme:s})=>s.media.mobileSmall} {
    flex-wrap: wrap;
  }
`,M=s=>{const t=e=>{s.onClickHandler(e)};return o.jsxs(o.Fragment,{children:[o.jsxs(R,{children:[o.jsx(h,{children:"Users"}),o.jsx("span",{children:s.users.length})]}),o.jsx(A,{children:s.users.map(e=>o.jsx(x,{id:e.id,img:e.photos.small,name:e.name,followed:e.followed,status:e.status,isFollowing:s.isFollowing,unfollowUsersTC:s.unfollowUsersTC,followUsersTC:s.followUsersTC},e.id))}),o.jsx(y,{onClickHandler:t,totalItemsCount:s.totalUsersCount,pageSize:s.pageSize,currentPage:s.currentPage,portionSize:10})]})},R=a.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  h1 {
    margin-bottom: 0;
  }

  span {
    color: #929CAB;
    font-size: 18px;
    margin-left: 15px;
  }
`,A=a.div`
  &:not(:last-child) {
    margin-bottom: 40px;
    @media ${({theme:s})=>s.media.mobileSmall} {
      margin-bottom: 60px;
    }
  }
`;class E extends U.Component{constructor(){super(...arguments);c(this,"onClickHandler",e=>{this.props.setCurrentPage(e),this.props.getUsersTC(this.props.pageSize,e)})}componentDidMount(){this.props.getUsersTC(this.props.pageSize,this.props.currentPage)}render(){return o.jsx(o.Fragment,{children:this.props.isLoading?o.jsx(f,{}):o.jsx(M,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,users:this.props.users,onClickHandler:this.onClickHandler,isFollowing:this.props.isFollowing,unfollowUsersTC:this.props.unfollowUsersTC,followUsersTC:this.props.followUsersTC})})}}const $=s=>({users:w(s),pageSize:S(s),totalUsersCount:j(s),currentPage:T(s),isLoading:b(s),isFollowing:z(s)}),G=P($,{setUsers:k,setCurrentPage:F,setTotalUsersCount:H,toggleIsLoading:I,getUsersTC:v,unfollowUsersTC:L,followUsersTC:N})(E);export{E as UsersContainerAPI,G as default};
