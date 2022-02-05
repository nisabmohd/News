import './App.css';
import Navbar from './Navbar.js'
import Leftbar from './Leftbar';
import './css/Button.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Newsframe from './Newsframe';
// import load from './ico/load.gif'
import top from './ico/top.png'
import top1 from './ico/top1.png'
import logo1 from './ico/image1.png'
import logo from './ico/image.png'
import lightimg from './ico/night-mode.png'
import darkimg from './ico/day-mode.png'
import toast, { Toaster } from 'react-hot-toast';
import LoadingBar from 'react-top-loading-bar'

function App() {
  const [topimg,setTopimg]=useState(top)
  const [logimg,setLogoImg]=useState(logo1)
  const [mode,setmode]=useState(lightimg)
  const [navbarcol,setnavbarcol]=useState('Black')
  const [leftbarcolor,setleftbarcol]=useState('rgb(220,220,220)')
  // your API key there in double quotes
  //here is a temporay api for use :
  //-----------------------------------------------
  const apikey = "e3192ea88c944bd3a871dfcd4a68407a"  
  //-----------------------------------------------
  const [loading, setLoading] = useState(true)
  const [news, setNews] = useState([]);
  const [country, setCountry] = useState('us');
  const [cat, setCat] = useState('general')
  // console.log(cat);
  const [api, setApi] = useState(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apikey}&pageSize=99`)
  const [dark,setdark]=useState(false)
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    async function getData() {
      setProgress(25)
      setLoading(true)
      setProgress(55)
      const response = await axios.get(api)
      setNews(response.data.articles);
      setProgress(70)
      if(response.data.totalResults ===0){
        toast.error('Sorry No Data Found', {
          duration: 1200,
          position: 'center',
          ariaProps: {
            role: 'status',
            'aria-live': 'polite',
          },
          style: {
            backgroundColor:'gray',
            color:'white'
          },
        });
      }
      setLoading(false)
      setProgress(100)
      return () => { setNews(""); setCat(''); setCountry(''); setApi(''); }
    }
    getData()
  },[country,api,cat])
  function changecat(valuect) {
    setApi(`https://newsapi.org/v2/top-headlines?country=${country}&category=${valuect}&apiKey=${apikey}&pageSize=99`)
    setCat(valuect)
  }
  function changecountry(value) {
    setApi(`https://newsapi.org/v2/top-headlines?country=${value}&category=${cat}&apiKey=${apikey}&pageSize=99`)
    setCountry(value);
    console.log(api);
    console.log(api)
  }
  function srch(valuesrch) {
    setApi(`https://newsapi.org/v2/everything?q=${valuesrch}&apiKey=${apikey}&pageSize=99`)
  }
  function darkmode(){
    if(dark===false){
      document.body.style.backgroundColor = "rgb(22, 22, 22)"
      document.body.style.color="rgb(160, 160, 160)";
      setTopimg(top1)
      setLogoImg(logo)
      setnavbarcol("white")
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
      setnavbarcol("black")
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
  return (
    <div className="App">
       <LoadingBar
        color='red'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar col={navbarcol} sendData={changecat} s={srch} />
      <Toaster />
      <div className="bottompage">
        <div className="leftbar">
          <Leftbar col={country} top={topimg} logo={logimg} aimg={mode} darkmodeget={darkmode} sendDarkStyle={dark} bglf={leftbarcolor} sendDatacn={changecountry} />
        </div>
        {loading === true ?
          (
            <div className='loading' style={{width:'fit-content',margin:'auto'}}>
              {/* <img style={{ width: '95px' }} src={load} alt="" /> */}
             <h4 style={{color:'gray'}}>Loading ....</h4> 
            </div>
          )
          :
          (
            <div className="pageframe">
              <div className="header">
                <h3>Country code: {country}</h3>
                <h4>Cateogery : {cat}</h4>
              </div>
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
