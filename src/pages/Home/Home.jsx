import { useState, useEffect } from 'react';
import { getMoviesTrends } from 'services/Api';
import { TrendsList } from 'components/TrendsList/TrendsList';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [trends, setTrends] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function addTrends() {
      try {
        const { results } = await getMoviesTrends();
        setTrends(results);
      } catch (error) {
        console.log(error);
      }
    }

    addTrends();
  }, []);

  return <TrendsList trends={trends} location={location} />;
};

export default Home;
