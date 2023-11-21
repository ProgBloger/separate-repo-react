import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState  } from 'react';

function App() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://localhost:7105/WeatherForecast');
        setItems(response.data);
      } catch(error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h2>Items List</h2>
      <ul>
        {items.map(item => (
          <li key={item.date}>On {item.date} temp is {item.temperatureC} and it's {item.summary}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
