import React from 'react';
import TopicList from './TopicList';
import FavIcon from './FavIcon';
import PhotoFavButton from './PhotoFavButton'

import '../styles/TopNavigationBar.scss'

const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={props.topics}/>
      <PhotoFavButton alwaysSelected={true} favorites={props.favorites}/>
    </div>
  )
}

export default TopNavigation;