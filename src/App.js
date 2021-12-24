import './App.css';
import Navbar from './Navbar.js'
import Leftbar from './Leftbar';
import './css/Button.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Newsframe from './Newsframe';
import load from './ico/load.gif'
import top from './ico/top.png'
import top1 from './ico/top1.png'
import logo1 from './ico/image1.png'
import logo from './ico/image.png'
import lightimg from './ico/night-mode.png'
import darkimg from './ico/day-mode.png'
function App() {
  const [topimg,setTopimg]=useState(top)
  const [logimg,setLogoImg]=useState(logo1)
  const [mode,setmode]=useState(lightimg)
  // your API key there in double quotes
  //here is a temporay api for use 
        const apikey = "ffe4806ecb8a4868a3e52b5731eb4d94"
  //
  const [loading, setLoading] = useState(true)
  const [news, setNews] = useState([]);
  const [country, setCountry] = useState('us');
  const [cat, setCat] = useState('general')
  const [api, setApi] = useState(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apikey}&pageSize=99`)
  const [dark,setdark]=useState(false)
  useEffect(() => {
    async function getData() {
      setLoading(true)
      const response = await axios.get(api)
      setNews(response.data.articles);
      setLoading(false)
      return () => { setNews(""); setCat(''); setCountry(''); setApi(''); }
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
  function darkmode(){
    if(dark===false){
      document.body.style.backgroundColor = "rgb(22, 22, 22)"
      document.body.style.color="rgb(160, 160, 160)";
      setTopimg(top1)
      setLogoImg(logo)
      setmode(darkimg)
      setdark(true)
      return;
    }
    if(dark===true){
      document.body.style.backgroundColor = "white"
      document.body.style.color="black";
      setTopimg(top)
      setLogoImg(logo1)
      setmode(lightimg)
      setdark(false)
      return;
    }
  }
// console.log(dark);
  return (
    <div className="App">
      <Navbar sendData={changecat} s={srch} />
      <div className="bottompage">
        <div className="leftbar">
          <Leftbar top={topimg} logo={logimg} aimg={mode} darkmodeget={darkmode} sendDarkStyle={dark} sendDatacn={changecountry} />
        </div>
        {loading === true ?
          (
            <div className='loading'>
              <img style={{ width: '95px' }} src={load} alt="" />
            </div>
          )
          :
          (
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
          )
        }

      </div>
    </div>
  );
}

export default App;
