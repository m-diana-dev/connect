// import React from "react";
// import {ActionType, StateType} from "./redux/store.tsx";
//
// const StoreContext = React.createContext({} as {
//     getState: () => StateType
//     dispatch: (action: ActionType) => void
// });
//
// type ProviderPropsType = {
//     store: {
//         getState: () => StateType
//         dispatch: (action: ActionType) => void
//     }
//     children: React.ReactNode
// }
// export const Provider = (props: ProviderPropsType) => {
//     return (
//         <StoreContext.Provider value={props.store}>
//             {props.children}
//         </StoreContext.Provider>
//     )
// }
//
// export default StoreContext