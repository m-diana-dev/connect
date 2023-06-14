import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {addPost, StateType} from "./redux/state";

export let rerenderEntireTree = (state: StateType) => {
    ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
        <App state={state} addPost={addPost}/>
    )
}