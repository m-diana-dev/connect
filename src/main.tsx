import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {StateType} from "./redux/store.tsx";
import store from "./redux/redux-store.ts";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

export const rerenderEntireTree = (state: StateType) => {
    root.render(
        <App state={store.getState()}
             addPost={store.dispatch.bind(store)}
             updateNewPostText={store.dispatch.bind(store)}
             sendMessage={store.dispatch.bind(store)}
             updateNewMessageText={store.dispatch.bind(store)}/>
    )
}
rerenderEntireTree(store.getState());

store.subscribe(()=>{
    let state = store.getState()
    rerenderEntireTree(state)
});