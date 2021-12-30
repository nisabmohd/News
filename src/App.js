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
import toast, { Toaster } from 'react-hot-toast';
function App() {
  const [topimg,setTopimg]=useState(top)
  const [logimg,setLogoImg]=useState(logo1)
  const [mode,setmode]=useState(lightimg)
  const [leftbarcolor,setleftbarcol]=useState('rgb(239,239,239)')
  // your API key there in double quotes
  //here is a temporay api for use 
        const apikey = "809e5b65cdf04f2e9fb871bfe1ad88f6"
  //
  const [loading, setLoading] = useState(true)
  const [news, setNews] = useState([]);
  const [country, setCountry] = useState('us');
  const [cat, setCat] = useState('general')
  console.log(cat);
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
  },[api])
  function changecat(valuect) {
    setCat(valuect)
    setApi(`https://newsapi.org/v2/everything?q=${valuect}&apiKey=${apikey}&pageSize=99`)
  }
  function changecountry(value) {
    console.log(value);
    setCountry(value);
    setApi(`https://newsapi.org/v2/top-headlines?country=${value}&apiKey=${apikey}&pageSize=99`)
  }
  function srch(valuesrch) {
    console.log(valuesrch);
    setCat(valuesrch)
    setApi(`https://newsapi.org/v2/everything?q=${valuesrch}&apiKey=${apikey}&pageSize=99`)
  }
  function darkmode(){
    if(dark===false){
      document.body.style.backgroundColor = "rgb(22, 22, 22)"
      document.body.style.color="rgb(160, 160, 160)";
      setTopimg(top1)
      setLogoImg(logo)
      setmode(darkimg)
      toast('Dark Mode Enabled', {
        duration: 1200,
        position: 'top-center',
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      });
      setleftbarcol('rgb(33,33,33)')
      setdark(true)
      return;
    }
    if(dark===true){
      document.body.style.backgroundColor = "white"
      document.body.style.color="black";
      setTopimg(top)
      setLogoImg(logo1)
      setmode(lightimg)
      toast('Dark Mode Disabled', {
        duration: 1200,
        position: 'top-center',
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
        style: {
          backgroundColor:'gray',
          color:'white'
        },
      });
      setleftbarcol('rgb(239,239,239)')
      setdark(false)
      return;
    }
  }
// console.log(dark);
  return (
    <div className="App">
      <Navbar sendData={changecat} s={srch} />
      <Toaster />
      <div className="bottompage">
        <div className="leftbar">
          <Leftbar top={topimg} logo={logimg} aimg={mode} darkmodeget={darkmode} sendDarkStyle={dark} bglf={leftbarcolor} sendDatacn={changecountry} />
        </div>
        {loading === true ?
          (
            <div className='loading' style={{width:'fit-content',margin:'auto'}}>
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
