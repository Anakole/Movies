import { useState, useEffect } from 'react';
import { getMoviesTrends } from 'services/Api';
import { TrendsList } from 'components/TrendsList/TrendsList';

const Home = () => {
  const [trends, setTrends] = useState([]);

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

  return <TrendsList trends={trends} />;
};

export default Home;
