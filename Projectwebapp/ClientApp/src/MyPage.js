import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import Navbar from './component/MyNav';
import Main from './component/MainOrder';
import Items from './component/Items-data';

function MainPage() {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <Navbar />
      <Main />
      <Items />
    </React.StrictMode>
  );
}

MainPage();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default MainPage;
