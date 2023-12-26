import { useParams } from 'react-router-dom';

const Screening = () => {
  const { id } = useParams();

  return (
    <>
      <h1>Screening</h1>
      <p>Movie: {id}</p>
    </>
  )
}

export default Screening