import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App: React.FC = () => {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    console.log('Making request to:', `${process.env.REACT_APP_API_URL}/`);

    axios.get(`${process.env.REACT_APP_API_URL}/`)
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Saylor-Stock Frontend</h1>
      <p>{data}</p>
    </div>
  );
};

export default App;

