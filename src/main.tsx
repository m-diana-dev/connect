import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {StateType, store} from "./redux/state";
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

export const rerenderEntireTree = (state: StateType) => {
    root.render(
        <App state={store.getState()} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}/>
    )
}
rerenderEntireTree(store.getState());

store.subscriber(rerenderEntireTree);