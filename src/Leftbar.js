import React ,{useEffect,useState}from 'react'
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
    const [idst, setid] = useState('usa')
    useEffect(() => {
        document.getElementById('usa').style.backgroundColor = props.bglf
        document.getElementById('gb').style.backgroundColor = props.bglf
        document.getElementById('in').style.backgroundColor = props.bglf
        document.getElementById('jp').style.backgroundColor = props.bglf
        document.getElementById('eg').style.backgroundColor = props.bglf
        document.getElementById('ae').style.backgroundColor = props.bglf
        document.getElementById('ch').style.backgroundColor = props.bglf
        document.getElementById('ru').style.backgroundColor = props.bglf

        document.getElementById(idst).style.backgroundColor = "rgb(191, 191, 191)"
    }, [props.bglf,idst])
    function demoMethod(a) {
        props.sendDatacn(a);
    }
    function darkmodesend() {
        props.darkmodeget();
    }
    function topFunction() {
        window.scrollTo(0, 0);
    }
    const darkstyle = {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: 'fit-content',
        padding: '0 19px',
        zIndex: '999',
        position: 'fixed',
        top: '0px',
        left: '0px',
        alignItems: 'center',
        backgroundColor: props.bglf
    }
    function colour(id) {
        document.getElementById('usa').style.backgroundColor = props.bglf
        document.getElementById('gb').style.backgroundColor = props.bglf
        document.getElementById('in').style.backgroundColor = props.bglf
        document.getElementById('jp').style.backgroundColor = props.bglf
        document.getElementById('eg').style.backgroundColor = props.bglf
        document.getElementById('ae').style.backgroundColor = props.bglf
        document.getElementById('ch').style.backgroundColor = props.bglf
        document.getElementById('ru').style.backgroundColor = props.bglf
        setid(id)
        document.getElementById(idst).style.backgroundColor ="rgb(198, 198, 191)"
    }
    return (
        <div>
            <div className="leftbar" style={darkstyle} >
                <div className="logo">
                    <img className="logoimg" src={props.logo} alt="" />
                </div>
                <div className="country">
                    <div id="usa" className='activecount' onClick={() => { demoMethod('us'); colour('usa') }}>
                        <img className="flatico" src={usa} alt="" />
                    </div>
                    <div id="gb" className='activecount' onClick={() => { demoMethod('gb'); colour('gb') }} >
                        <img className="flatico" src={uk} alt="" />
                    </div>
                    <div id="in" className='activecount' onClick={() => { demoMethod('in'); colour('in') }} >
                        <img className="flatico" src={ind} alt="" />
                    </div>
                    <div id="jp" className='activecount' onClick={() => { demoMethod('jp'); colour('jp') }}>
                        <img className="flatico" src={jp} alt="" />
                    </div>
                    <div id="eg" className='activecount' onClick={() => { demoMethod('eg'); colour('eg') }}>
                        <img className="flatico" src={eg} alt="" />
                    </div>
                    <div id="ae" className='activecount' onClick={() => { demoMethod('ae'); colour('ae') }} >
                        <img className="flatico" src={ae} alt="" />
                    </div>
                    <div id="ch" className='activecount' onClick={() => { demoMethod('ch'); colour('ch') }}>
                        <img className="flatico" src={ch} alt="" />
                    </div>
                    <div id="ru" className='activecount' onClick={() => { demoMethod('ru'); colour('ru') }}>
                        <img className="flatico" src={ru} alt="" />
                    </div>

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
