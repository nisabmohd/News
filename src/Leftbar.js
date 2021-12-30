import React from 'react'
import uk from './ico/uk.png'
import usa from './ico/usa.png'
import ind from './ico/in.png'
import eg from './ico/egypt.png'
import jp from './ico/japan.png'
import ae from './ico/uae.png'
import ch from './ico/china.png'
import ru from './ico/russia.png'
import './css/Leftbar.css'
export default function Leftbar(props) {
    function demoMethod(a) {
        props.sendDatacn(a);
    }
    function darkmodesend(){
        props.darkmodeget();
    }
    function topFunction() {
        window.scrollTo(0, 0);
    }
    const darkstyle={
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: 'fit-content',
        padding: '0 19px',
        zIndex: '999',
        // backgroundColor: 'rgb(22, 22, 22)',
        // borderRight: '0.1px solid rgb(248, 248, 248)',
        position: 'fixed',
        top:'0px',
        left:'0px',
        alignItems: 'center',
        // backgroundColor: 'rgb(33,33,33)',
        backgroundColor:props.bglf

    }
    return (
        <div>
            <div className="leftbar" style={darkstyle} >
                <div className="logo">
                    <img className="logoimg" src={props.logo} alt="" />
                </div>
                <div className="country">
                    <img onClick={() => { demoMethod('us') }} className="flatico" src={usa} alt="" />
                    <img onClick={() => { demoMethod('gb') }} className="flatico" src={uk} alt="" />
                    <img onClick={() => { demoMethod('in') }} className="flatico" src={ind} alt="" />
                    <img onClick={() => { demoMethod('jp') }} className="flatico" src={jp} alt="" />
                    <img onClick={() => { demoMethod('eg') }} className="flatico" src={eg} alt="" />
                    <img onClick={() => { demoMethod('ae') }} className="flatico" src={ae} alt="" />
                    <img onClick={() => { demoMethod('ch') }} className="flatico" src={ch} alt="" />
                    <img onClick={() => { demoMethod('ru') }} className="flatico" src={ru} alt="" />

                </div>
                <div className="totop">
                    <img src={props.top} title="Back To Top" onClick={topFunction} style={{ marginRight: '12px', marginTop: '72px', cursor: 'pointer' }} className="flatico" alt="" />
                </div>
                <div className="modechange">
                    <img onClick={darkmodesend} className="flatico" src={props.aimg} alt='' />
                </div>
            </div>
        </div>
    )
}
