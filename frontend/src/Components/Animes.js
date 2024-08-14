import Anime from "./Anime";
import axios from "axios";
import { useEffect, useState } from "react";

function Animes() {
  //fetch all animes from the backend and render them as a list using the Anime component. Make sure to style the animes to look like the screenshot from the README. Feel free to use axios to grab data
  const API = process.env.REACT_APP_API_URL;
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    axios.get(`${API}/animes`).then((response) => {
      setAnimes(response.data);
    });
  }, []);

  return (
    <section className="index" id="anime-list">
    {animes.map((anime) => 
      <Anime key={anime.id} name={anime.name} description={anime.description}/>
    )}
    </section>
  );
}

export default Animes;
