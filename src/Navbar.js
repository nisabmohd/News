import React,{useState} from 'react'
import './css/Navbar.css'
import searchicon from './ico/search.png'
export default function Navbar(props) {
    const [sr, setsearch] = useState('')
    function demoMethod(a) {
        props.sendData(a);
    }
    function searchdata(e){
        setsearch(e.target.value)
    }
    function sendsearch(b){
        props.s(b)
    }
    return (
        <div>
            <div className="navbar">
                <div className="tagsnavbar">
                    {/* <p onClick={()=>demoMethod('all')}>#All</p> */}
                    <p onClick={() => demoMethod('sports')}>#Sports</p>
                    <p onClick={() => demoMethod('buissness')}>#Buissness</p>
                    <p onClick={() => demoMethod('science')}>#Science</p>
                    <p onClick={() => demoMethod('entertainment')}>#Entertainment</p>
                    <p onClick={() => demoMethod('health')}>#Health</p>
                    <p onClick={() => demoMethod('technology')}>#Technology</p>
                    <p onClick={() => demoMethod('general')}>#General</p>
                </div>
                <div className="searchbarnav">
                    <input onChange={searchdata} type="text" placeholder="Search" id="" />
                    <img onClick={sendsearch} src={searchicon} alt="" />
                </div>
            </div>
        </div>
    )
}
