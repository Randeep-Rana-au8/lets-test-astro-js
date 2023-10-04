import { useState, useEffect } from 'react';
import Loader from './Loader.jsx';

const Container = ({ onUpdate = null }) => {
  const [bg, setBg] = useState('blue');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      setIsLoading(false);
    };

    fetchData();
  }, []);

  //   const fetchData = async () => {
  //     const response = await fetch('https://jsonplaceholder.typicode.com/photos');
  //     console.log(response);
  //   };

  //   fetchData();

  if (isLoading) {
    return <Loader />;
  } else {
    return <h1 style={{ color: bg, textAlign: 'center' }} onClick={() => setBg('white')}>
    Container
  </h1>
  }

//   isLoading ? (
//     <Loader />
//   ) : (
//     <h1 style={{ color: bg, textAlign: 'center' }} onClick={() => setBg('white')}>
//       Container
//     </h1>
//   );
};

export default Container;
