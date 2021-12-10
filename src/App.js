import './App.css';
import Home from './Home';
import Navbar from './Navbar.js'
import Leftbar from './Leftbar';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Newsframe from './Newsframe';
function App() {
  const [news, setNews] = useState([]);
  const [country, setCountry] = useState('us');
  const [cat, setCat] = useState('general')
  const [api, setApi] = useState(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=0ab64559a1ff44cbbe217684e5b02839`)
  useEffect(() => {
    async function getData() {
      const response = await axios.get(api)
      setNews(response.data.articles);
    }
    getData()
  }, [api])
  function changecat(valuect) {
    setCat(valuect)
    setApi(`https://newsapi.org/v2/everything?q=${cat}&apiKey=0ab64559a1ff44cbbe217684e5b02839`)
  }
  function changecountry(value) {
    setCountry(value);
    setApi(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=0ab64559a1ff44cbbe217684e5b02839`)
  }
  function srch(valuesrch){
    setCat(valuesrch)
    setApi(`https://newsapi.org/v2/everything?q=${cat}&apiKey=0ab64559a1ff44cbbe217684e5b02839`)
  }
  return (
    <div className="App">
      <Navbar sendData={changecat} s={srch} />
      <div className="bottompage">
        <div className="leftbar">
          <Leftbar sendDatacn={changecountry} />
        </div>
        <div className="pageframe">
          <div className="newsframe">
            {
              news.map((item) => {
                return <Newsframe id={item.id} headline={item.title} img={item.urlToImage} content={item.content} url={item.url} />
              })
            }

          </div>
        </div>
      </div>
      <Home />
    </div>
  );
}

export default App;
