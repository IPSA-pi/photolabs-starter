import React from 'react';
import PhotoFavButton from './components/PhotoFavButton';
import PhotoListItem from './components/PhotoListItem';
import PhotoList from './components/PhotoList';
import TopicList from './components/TopicList';
import TopicListItem from './components/TopicListItem';
import TopNavigationBar from './components/TopNavigationBar'
import './App.scss';


// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      <TopNavigationBar />
    </div>
  );
};

export default App;
