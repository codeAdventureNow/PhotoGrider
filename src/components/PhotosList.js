import { useFetchPhotosQuery, useAddPhotoMutation } from '../store';
import Button from './Button';

function PhotosList({ album }) {
  useFetchPhotosQuery(album);
  const [addPhoto, AddPhotoResults] = useAddPhotoMutation();

  const handleAddPhoto = () => {
    addPhoto(album);
  };
  return (
    <div className='m-2 flex flex-row items-center justify-between'>
      <div className='text-lg font-bold'>
        <h3>Photos in {album.title}</h3>
        <Button loading={AddPhotoResults.isLoading} onClick={handleAddPhoto}>
          + Add Photo
        </Button>
      </div>
    </div>
  );
}

export default PhotosList;
