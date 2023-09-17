import React, {useState} from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import photosData from '../mocks/photos.js';
import topicsData from '../mocks/topics.js';
import PhotoDetailsModal from './PhotoDetailsModal'

import '../styles/HomeRoute.scss';

const HomeRoute = () => {
  const [favorites, setFavorites] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleImageClick = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  }

  console.log(favorites);
  return (
    <div className="home-route">
      <TopNavigationBar topics={topicsData} favorites={favorites} />
      <PhotoList photos={photosData} onFavorite={
        (photo) => {
          setFavorites(prevFavorites => [...prevFavorites, photo]);
        }}
        onImageClick={handleImageClick}
        />
        {isModalOpen && <PhotoDetailsModal photo={selectedPhoto} onClose={() => setIsModalOpen(false)}/>}
    </div>
  );
};

export default HomeRoute;
