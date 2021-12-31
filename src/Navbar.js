import React,{useState,useEffect} from 'react'
import './css/Navbar.css'
import searchicon from './ico/search.png'
export default function Navbar(props) {
    const[eid,seteid]=useState('gnrl')
    useEffect(() => {
        document.getElementById('gnrl').style.color="gray"
        document.getElementById('bsn').style.color="gray"
        document.getElementById('spo').style.color="gray"
        document.getElementById('hlt').style.color="gray"
        document.getElementById('sci').style.color="gray"
        document.getElementById('ent').style.color="gray"
        document.getElementById('tech').style.color="gray"
        document.getElementById(eid).style.color=props.col

    }, [props.col,eid])
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
    function colour(e){
        seteid(e.target.id);
        document.getElementById('gnrl').style.color="gray"
        document.getElementById('bsn').style.color="gray"
        document.getElementById('spo').style.color="gray"
        document.getElementById('hlt').style.color="gray"
        document.getElementById('sci').style.color="gray"
        document.getElementById('ent').style.color="gray"
        document.getElementById('tech').style.color="gray"
        document.getElementById(e.target.id).style.color=props.col
    }
    return (
        <div>
            <div className="navbar">
                <div id='nbar' className="tagsnavbar">
                    <p id="gnrl" onClick={(e) => {demoMethod('general'); colour(e)}}>#General</p>
                    <p id="bsn" onClick={(e) => {demoMethod('business');colour(e)}}>#Business</p>
                    <p id="spo" onClick={(e) => {demoMethod('sports'); colour(e)}}>#Sports</p>
                    <p id="hlt" onClick={(e) => {demoMethod('health');colour(e)}}>#Health</p>
                    <p id="sci" onClick={(e) => {demoMethod('science');colour(e)}}>#Science</p>
                    <p id="ent" onClick={(e) => {demoMethod('entertainment');colour(e)}}>#Entertainment</p>
                    <p id="tech" onClick={(e) => {demoMethod('technology');colour(e)}}>#Technology</p>
                </div>
                <div className="searchbarnav">
                    <input onChange={searchdata} type="text" placeholder="Search" id="sbrnv" />
                    <img style={{cursor:'pointer'}} onClick={sendsearch} src={searchicon} alt="" />
                </div>
            </div>
        </div>
    )
}
