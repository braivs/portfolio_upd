import React from 'react';
import './App.css';
import s from './App.module.scss'
import {Router} from "./router"
function App() {
  return (
    <div className={s.app}>
      <Router />
    </div>
  );
}

export default App;
