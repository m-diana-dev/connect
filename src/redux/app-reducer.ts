import {ActionType} from "./actions-types.ts";
import {authMeTC} from "./auth-reducer.ts";
import {AppThunk} from "./redux-store.ts";

const SET_INITIALIZED = 'APP/SET-INITIALIZED';

type AppType = {
    initialized: boolean
}

const initialState: AppType = {
    initialized: false
}
export const appReducer = (state: AppType= initialState, action: ActionType): AppType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: action.initialized
            }
        default: return state
    }
}


//AC
export const SetInitialized = (initialized: boolean) => ({type: SET_INITIALIZED, initialized} as const)


//TC
export const initializedAppTC = (): AppThunk => (dispatch) => {
    dispatch(authMeTC())
        .then(()=>{
            dispatch(SetInitialized(true))
        })
}
