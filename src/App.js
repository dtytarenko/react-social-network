import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// import style
import './App.css';

// import components
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';


const App = (props) => {

  return (
    <BrowserRouter>
      <div className="app__wrapper">
        <Header />
        <Navbar />
        <div className="app__wrapper_content">
          <Route exact path='/profile'
            render={() => <Profile 
              profilePage={props.state.profilePage} 
              addPost={props.addPost}
              updateNewPostText={props.updateNewPostText}
              />}
          />
          <Route exact path='/dialogs'
            render={() => <Dialogs state={props.state.dialogsPage} />}
          />
          <Route exact path='/news'
            render={() => <News />}
          />
          <Route exact path='/music'
            render={() => <Music />}
          />
          <Route exact path='/settings'
            render={() => <Settings />}
          />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;