import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import store, {AppStateType} from "./redux/redux-store.ts";
import {Provider} from "react-redux";


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

export const rerenderEntireTree = (state: AppStateType) => {
    root.render(
        <Provider store={store}>
            <App state={store.getState()}/>
        </Provider>
    )
}
rerenderEntireTree(store.getState());

store.subscribe(() => {
    const state = store.getState()
    rerenderEntireTree(state)
});