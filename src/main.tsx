import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {addPost, state, StateType, subscriber, updateNewPostText} from "./redux/state";
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

export const rerenderEntireTree = (state: StateType) => {
    root.render(
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
    )
}
rerenderEntireTree(state);

subscriber(rerenderEntireTree);