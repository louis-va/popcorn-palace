import { useState, useEffect } from 'react';
import Typography from "../../components/Typography"
import ScreeningCard from "./ScreeningCard"

interface IScreening {
  movie: {
    title: string;
    poster: string;
  },
  _id: string;
  date: Date;
}

const fetchScreenings = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/screenings`, {
      method: 'GET',
    });
    if (!response.ok) throw new Error('Failed to fetch data');

    const screenings: IScreening[] = await response.json();
    const sortedScreenings = screenings
      .map(screening => ({ ...screening, date: new Date(screening.date) }))
      .sort((a, b) => a.date.getTime() - b.date.getTime());

    return sortedScreenings;
  } catch (error: any) {
    throw new Error(error.message || 'An error occurred');
  }
};

const Screenings = () => {
  const [screeningsData, setScreeningsData] = useState<IScreening[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sortedScreenings = await fetchScreenings();
        setScreeningsData(sortedScreenings);
        setLoading(false);
      } catch (error: any) {
        setError(error.message || 'An error occurred');
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);

  return (
    <section className="mt-12">
      <Typography as="h2" variant="h2">Nos prochaines projections</Typography>
      { loading ? (
        <div className="mt-6">Chargement...</div>
      ) : error ? (
        <div className="mt-6">Une erreur s'est produite lors du chargement des séances.</div>
      ) : (
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {screeningsData?.map((screening) => (
            <ScreeningCard
              key={screening._id}
              id={screening._id}
              title={screening.movie.title}
              poster={screening.movie.poster}
              date={screening.date}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default Screenings