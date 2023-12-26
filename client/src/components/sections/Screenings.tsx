import { useState, useEffect } from 'react';
import Typography from "../common/Typography"
import ScreeningCard from "../ui-elements/ScreeningCard"
import { IScreening } from '../../types/types';
import { fetchScreenings } from '../../utils/fetchScreenings';

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