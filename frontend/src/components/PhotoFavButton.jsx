import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [favIconStatus, setFavIconStatus] = useState(false);

  const handleFavIcon = () => {
    setFavIconStatus(!favIconStatus);
    // favIconStatus === true ? setFavIconStatus(false) : setFavIconStatus(true);
    // console.log('clicked fav icon and its status is: ', favIconStatus)
  }

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={handleFavIcon}>
        <FavIcon selected={favIconStatus}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;