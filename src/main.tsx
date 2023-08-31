import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import store, {AppStateType} from "./redux/redux-store.ts";
import {Provider} from "./StoreContext.tsx";


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

export const rerenderEntireTree = (state: AppStateType) => {
    root.render(
        <Provider store={store}>
            <App/>
            {/*<App state={store.getState()} dispatch={store.dispatch.bind(store)}/>*/}
        </Provider>
    )
}
rerenderEntireTree(store.getState());

store.subscribe(() => {
    const state = store.getState()
    rerenderEntireTree(state)
});