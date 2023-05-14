// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
   
//     <App />
   
//   </React.StrictMode>
// );


// reportWebVitals();

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {stores} from './ReduxContainer/StoreVal';

import App from './App';
const rootElement= document.getElementById("root");
 const root= createRoot(rootElement)
   root.render(
    <StrictMode>
      <Provider store={stores}>
        <App/>
      </Provider>
    </StrictMode>
   );
