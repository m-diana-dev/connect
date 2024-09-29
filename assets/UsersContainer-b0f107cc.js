var m=Object.defineProperty;var h=(s,t,e)=>t in s?m(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var c=(s,t,e)=>(h(s,typeof t!="symbol"?t+"":t,e),e);import{n as i,r as C,j as o,B as r,I as g,H as x,U,R as w,P as f,c as P,s as j,a as S,t as T,b,d as z,e as k,f as I,g as F,h as H,i as v,k as B,u as L,l as N}from"./index-fbf8dd69.js";const y=s=>{const[t,e]=C.useState(1),a=Math.ceil(s.totalItemsCount/s.pageSize),l=[];for(let n=1;n<=a;n++)l.push(n);console.log(t);const u=Math.ceil(a/s.portionSize),p=(t-1)*s.portionSize+1,d=t*s.portionSize;return o.jsxs(M,{children:[t>1&&o.jsx(r,{pagination:!0,callback:()=>e(t-1),children:o.jsx(g,{id:"arrow-prev",height:"30",width:"30",viewBox:"0 0 25 25"})}),l.filter(n=>n>=p&&n<=d).map(n=>o.jsx(r,{active:s.currentPage===n,pagination:!0,callback:()=>s.onClickHandler(n),name:n.toString()})),u>t&&o.jsx(r,{pagination:!0,callback:()=>e(t+1),children:o.jsx(g,{id:"arrow-next",height:"30",width:"30",viewBox:"0 0 25 25"})})]})},M=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  @media ${({theme:s})=>s.media.mobileSmall} {
    flex-wrap: wrap;
  }
`,R=s=>{const t=e=>{s.onClickHandler(e)};return o.jsxs(o.Fragment,{children:[o.jsxs(A,{children:[o.jsx(x,{children:"Users"}),o.jsx("span",{children:s.totalUsersCount})]}),o.jsx(E,{children:s.users.map(e=>o.jsx(U,{id:e.id,img:e.photos.small,name:e.name,followed:e.followed,status:e.status,isFollowing:s.isFollowing,unfollowUsersTC:s.unfollowUsersTC,followUsersTC:s.followUsersTC},e.id))}),o.jsx(y,{onClickHandler:t,totalItemsCount:s.totalUsersCount,pageSize:s.pageSize,currentPage:s.currentPage,portionSize:10})]})},A=i.div`
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
`,E=i.div`
  &:not(:last-child) {
    margin-bottom: 40px;
    @media ${({theme:s})=>s.media.mobileSmall} {
      margin-bottom: 60px;
    }
  }
`;class $ extends w.Component{constructor(){super(...arguments);c(this,"onClickHandler",e=>{this.props.setCurrentPage(e),this.props.getUsersTC(this.props.pageSize,e)})}componentDidMount(){this.props.getUsersTC(this.props.pageSize,this.props.currentPage)}render(){return o.jsx(o.Fragment,{children:this.props.isLoading?o.jsx(f,{}):o.jsx(R,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,users:this.props.users,onClickHandler:this.onClickHandler,isFollowing:this.props.isFollowing,unfollowUsersTC:this.props.unfollowUsersTC,followUsersTC:this.props.followUsersTC})})}}const D=s=>({users:j(s),pageSize:S(s),totalUsersCount:T(s),currentPage:b(s),isLoading:z(s),isFollowing:k(s)}),J=P(D,{setUsers:I,setCurrentPage:F,setTotalUsersCount:H,toggleIsLoading:v,getUsersTC:B,unfollowUsersTC:L,followUsersTC:N})($);export{$ as UsersContainerAPI,J as default};
