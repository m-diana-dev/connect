import {AppStateType} from "./redux/redux-store.ts";
import MainPagesContainer from "./components/Main/MainPagesContainer.tsx";

type AppPropsType = {
    state: AppStateType
}
export const App = ({state}: AppPropsType) => {
    return (
        <MainPagesContainer/>
    );
};
