import { useState, useEffect } from 'react';

import Typography from "../common/Typography"
import ScreeningCard from "../ui-elements/ScreeningCard"

interface Screening {
  movie: {
    title: string;
    poster: string;
  },
  _id: string;
  date: Date;
}

const Screenings = () => {
  const [screeningsData, setScreeningsData] = useState<Array<Screening> | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getScreenings = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/screenings`, 
          { method: "GET" }
        );
        if (!response.ok) throw new Error('Failed to fetch data');

        const screenings: Array<Screening> = await response.json();
        const sorted = screenings
          .map(screening => { return {...screening, date: new Date(screening.date)} })
          .sort((a, b) => a.date.getTime() - b.date.getTime());
        setScreeningsData(sorted);
      } catch (error: any) {
        setError(error.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    getScreenings();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="mt-12">
      <Typography tag="h2" variant="h2">Nos prochaines projections</Typography>
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {screeningsData!.map((screening, index) => (
          <ScreeningCard
            key={index}
            id={screening._id}
            title={screening.movie.title}
            poster={screening.movie.poster}
            date={screening.date}
          />
        ))}
      </div>
    </section>
  )
}

export default Screenings