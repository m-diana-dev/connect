import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {addPost, state} from "./redux/state";
import {rerenderEntireTree} from "./render.tsx";

rerenderEntireTree(state);