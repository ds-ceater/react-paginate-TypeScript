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
          <p className="albumCategory"><span className="albumCategoryLetter">{album.category}</span></p>
          <h1 className="albumTitle">{album.title}</h1>
          <p className="albumPrice"><span className="albumPriceUnit">$</span>{album.price}</p>
        </div>
      ))}
    </div>
  )
}

export default AlbumList

