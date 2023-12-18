import dotenv from 'dotenv';

// ENV variables
dotenv.config();
const TMDB_API_KEY = process.env.TMDB_API_KEY;

// Get movie info from TMDB API
async function getMovieInfo(movieId: string): Promise<any> {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?language=fr-FR`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${TMDB_API_KEY}`
    }
  };

  try {
    const response = await fetch(url, options);
    if (response.ok) {
      const json = await response.json();
      return json;
    } else {
      throw new Error('Failed to fetch movie information');
    }
  } catch (err: any) {
    console.error('Error:', err);
    throw err;
  }
}

// Get a movie's casting from TMDB API
async function getCasting(movieId: string): Promise<any> {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=fr-FR`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${TMDB_API_KEY}`
    }
  };

  try {
    const response = await fetch(url, options);
    if (response.ok) {
      const json = await response.json();
      return json;
    } else {
      throw new Error('Failed to fetch casting information');
    }
  } catch (err: any) {
    console.error('Error:', err);
    throw err;
  }
}

// Get a movie's videos from TMDB API
async function getVideos(movieId: string): Promise<any> {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=fr-FR`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${TMDB_API_KEY}`
    }
  };

  try {
    const response = await fetch(url, options);
    if (response.ok) {
      const json = await response.json();
      return json;
    } else {
      throw new Error('Failed to fetch videos');
    }
  } catch (err: any) {
    console.error('Error:', err);
    throw err;
  }
}

export { getCasting, getVideos, getMovieInfo }