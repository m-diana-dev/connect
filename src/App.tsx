import {AppStateType} from "./redux/redux-store.ts";
import MainPagesContainer from "./components/Main/MainPagesContainer.tsx";
import {Theme} from "./styles/Theme.tsx";
import {BrowserRouter} from "react-router-dom";
import {Preloader} from "./components/common/Preloader/Preloader.tsx";
import {Suspense} from "react";

type AppPropsType = {
    state: AppStateType
}
export const App = ({state}: AppPropsType) => {
    console.log(state)
    return (
        <Theme>
            <BrowserRouter basename="/connect">
                <Suspense fallback={<div><Preloader /></div>}>
                    <MainPagesContainer/>
                </Suspense>
            </BrowserRouter>
        </Theme>
    );
};
