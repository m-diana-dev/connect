import ReactDOM from 'react-dom/client'
import './index.css'
import store from "./redux/redux-store.ts";
import {Provider} from "react-redux";
import {App} from "./App.tsx";


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <Provider store={store}>
        <App state={store.getState()}/>
    </Provider>
)