import React from 'react';
import ReactDOM from 'react-dom/client';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { frosthavenStore } from './store/configureStore';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

class FrosthavenHelper extends React.PureComponent {
    public render(): JSX.Element {
        return (
            <Provider store={frosthavenStore}>
                <App />
            </Provider>
        )
    }
};

root.render(
    <React.StrictMode>
        <FrosthavenHelper />
    </React.StrictMode>
);