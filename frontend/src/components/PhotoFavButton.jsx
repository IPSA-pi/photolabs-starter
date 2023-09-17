import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const [favIconStatus, setFavIconStatus] = useState(false);

  const handleFavIcon = () => {
    setFavIconStatus(!favIconStatus);
    if(!favIconStatus || props.alwaysSelected) {
      props.onFavorite();
    }
  }

  const shouldDisplayAlert = props.favorites && props.favorites.length > 0;

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={handleFavIcon}>
        <FavIcon selected={favIconStatus || props.alwaysSelected} displayAlert={shouldDisplayAlert} />
      </div>
    </div>
  );
}

export default PhotoFavButton;