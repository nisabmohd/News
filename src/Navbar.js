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
    function sendsearch(){
        props.s(sr)
        document.getElementById('sbrnv').value="";
    }
    return (
        <div>
            <div className="navbar">
                <div className="tagsnavbar">
                    <p onClick={() => demoMethod('general')}>#General</p>
                    <p onClick={() => demoMethod('business')}>#Business</p>
                    <p onClick={() => demoMethod('sports')}>#Sports</p>
                    <p onClick={() => demoMethod('health')}>#Health</p>
                    <p onClick={() => demoMethod('science')}>#Science</p>
                    <p onClick={() => demoMethod('entertainment')}>#Entertainment</p>
                    <p onClick={() => demoMethod('technology')}>#Technology</p>
                </div>
                <div className="searchbarnav">
                    <input onChange={searchdata} type="text" placeholder="Search" id="sbrnv" />
                    <img onClick={sendsearch} src={searchicon} alt="" />
                </div>
            </div>
        </div>
    )
}
