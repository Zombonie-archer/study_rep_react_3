import styles from "./SearchBar.module.css";
import {type SearchMovieHandler} from '../../types/movie'
import { toast } from "react-hot-toast/headless";

interface SearchBarProps {
  onSubmit?: SearchMovieHandler;
}

export default function SearchBar({
  onSubmit,
}: SearchBarProps) {
  function handleSubmit(data: FormData) {
    const query: string | null = data.get("query") as string | null;
    if (!query || query.trim() === "") {
      toast.error("Please enter your search query.");
      return;
    } else {
      onSubmit(data);
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a
          className={styles.link}
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by TMDB
        </a>
        <form className={styles.form} action={handleSubmit}>
          <input
            className={styles.input}
            type="text"
            name="query"
            autoComplete="off"
            placeholder="Search movies..."
            autoFocus
          />
          <button className={styles.button} type="submit">
            Search
          </button>
        </form>
      </div>
    </header>
  );
}
