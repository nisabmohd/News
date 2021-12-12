import './App.css';
import Navbar from './Navbar.js'
import Leftbar from './Leftbar';
import './css/Button.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Newsframe from './Newsframe';
function App() {

  // your API key there in double quotes
        //here is a temporay api for use 
    const apikey="ffe4806ecb8a4868a3e52b5731eb4d94"
  //
  const [news, setNews] = useState([]);
  const [country, setCountry] = useState('us');
  const [cat, setCat] = useState('general')
  const [api, setApi] = useState(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apikey}&pageSize=99`)
  useEffect(() => {
    async function getData() {
      const response = await axios.get(api)
      setNews(response.data.articles);
    }
    getData()
  }, [api])
  function changecat(valuect) {
    setCat(valuect)
    setApi(`https://newsapi.org/v2/everything?q=${cat}&apiKey=${apikey}&pageSize=99`)
  }
  function changecountry(value) {
    setCountry(value);
    setApi(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apikey}&pageSize=99`)
  }
  function srch(valuesrch) {
    setCat(valuesrch)
    setApi(`https://newsapi.org/v2/everything?q=${cat}&apiKey=${apikey}&pageSize=99`)
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
              {/* <button disabled={page===1} onClick={()=>setPage(page - 1)}>Previous</button>
              <button onClick={()=>setPage(page + 1)}>Next</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
