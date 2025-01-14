import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
const PhotoList = (props) => {
  return (
    <ul className="photo-list">
      {props.photos.map(item => <PhotoListItem key={item.id} data={item} onFavorite={props.onFavorite} onImageClick={props.onImageClick}/>)}
    </ul>
  );
};

export default PhotoList;
