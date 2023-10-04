import { useState, useEffect } from 'react';

const Container = ({ onUpdate = null }) => {
  const [bg, setBg] = useState('blue');

  console.log('reactjs client side', onUpdate)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      console.log(response);
      onUpdate && onUpdate(response);
    };

    fetchData();
  }, []);

//   const fetchData = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/photos');
//     console.log(response);
//   };

//   fetchData();

  return (
    <h1 style={{ color: bg, textAlign: 'center' }} onClick={() => setBg('white')}>
      Container
    </h1>
  );
};

export default Container;
