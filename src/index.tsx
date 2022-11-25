import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import './index.css';
import { App } from './App';
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