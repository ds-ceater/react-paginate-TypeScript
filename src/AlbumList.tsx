import "./AlbumList.css";
import type { Album } from "./type";

type Props = {
  currentAlbums: Album[];
}

const AlbumList = (props: Props) => {

  const { currentAlbums } = props;
  return (
    <div className="albumGridWrapper">
      {currentAlbums.map((album) => (
        <div key={album.id}>
          <img src={album.thumbnail} alt="album" />
        </div>

      ))}
    </div>
  )
}

export default AlbumList

