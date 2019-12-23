import React from 'react';

import './App.css';
import IdeaButton from './components/IdeaButton/IdeaButton';
import Copyright from './components/Copyright/Copyright';

function logIdea() {
  console.log('누군가 좋은 생각이 있네!');
}

export default function App() {
  return (
    <div className="main">
      <div className="app">
        <IdeaButton
          message="나한테 좋은 생각이 있어!"
          handleClick={logIdea}
        />
      </div>
      <footer>
        <Copyright />
        <IdeaButton
          message="꼬리말에도 좋은 생각이 있어!"
          handleClick={logIdea}
        />
      </footer>
    </div>
  );
}
