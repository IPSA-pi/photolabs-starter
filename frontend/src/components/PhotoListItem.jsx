import React from "react";
import PhotoFavButton from './PhotoFavButton';
import "../styles/PhotoListItem.scss";
import TopicListItem from './TopicListItem';




const PhotoListItem = (props) => {
  return(
  <div className="photo-list__item">
    <PhotoFavButton/>
    <img className="photo-list__image" src={props.data.urls.full} alt="" />
    <img className="photo-list__user-profile" src={props.data.user.profile} alt="profile" />
    <div className="photo-list__user-details">
      <h2 className="photo-list_user-info">{props.data.username}</h2>
      <p className="photo-list__user-location">{props.data.location.city}, {props.data.location.country}</p>
    </div>
    <TopicListItem />

  </div>
  )

};

export default PhotoListItem;
