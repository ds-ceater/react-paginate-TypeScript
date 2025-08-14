import { useEffect, useState } from 'react'
import type { Album } from './type';
import './App.css'
import Pagination from './Pagination';

type AlbumApiResponse = {
  products: Album[];
}

function App() {
  const [albums, setAlbums] = useState<Album[]>([]);
  useEffect(() => {
    const getAlbums = async () => {

      try {
        const response = await fetch("https://dummyjson.com/products");
        const data: AlbumApiResponse = await response.json();
        setAlbums(data.products);
      } catch (error) {
        console.error("Failed to fetch albums:", error);
      };
    };
    getAlbums();

  }, []);

  return (
    <>
      <div className="App">
        <Pagination albums={albums} />
      </div>

    </>
  )
}

export default App
