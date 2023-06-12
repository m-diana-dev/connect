import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {state} from "./redux/state";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <App state={state}/>
)
