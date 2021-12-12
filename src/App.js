import './App.css';
import Navbar from './Navbar.js'
import Leftbar from './Leftbar';
import './css/Button.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Newsframe from './Newsframe';
function App() {

  //

  // your API key there in double quotes
  const apikey="0ab64559a1ff44cbbe217684e5b02839"

  //
  const [news, setNews] = useState([]);
  const [country, setCountry] = useState('us');
  const [cat, setCat] = useState('general')
  const [page, setPage] = useState(1)
  const [api, setApi] = useState(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apikey}&page=${page}`)
  useEffect(() => {
    async function getData() {
      const response = await axios.get(api)
      setNews(response.data.articles);
    }
    getData()
  }, [api])
  function changecat(valuect) {
    setCat(valuect)
    setApi(`https://newsapi.org/v2/everything?q=${cat}&apiKey=${apikey}&page=${page}`)
  }
  function changecountry(value) {
    setCountry(value);
    setApi(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apikey}&${page}`)
  }
  function srch(valuesrch) {
    setCat(valuesrch)
    setApi(`https://newsapi.org/v2/everything?q=${cat}&apiKey=${apikey}&page=${page}`)
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
          <div className="buttons">
            <div className='btns'>
              <button disabled={page===1} onClick={()=>setPage(page - 1)}>Previous</button>
              <button onClick={()=>setPage(page + 1)}>Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
