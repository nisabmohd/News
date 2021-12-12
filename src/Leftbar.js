import React from 'react'
import logoimg from './ico/image.png'
import uk from './ico/uk.png'
import usa from './ico/usa.png'
import ind from './ico/in.png'
import eg from './ico/egypt.png'
import jp from './ico/japan.png'
import ae from './ico/uae.png'
import ch from './ico/china.png'
import ru from './ico/russia.png'
import './css/Leftbar.css'
import top from './ico/top.png'
export default function Leftbar(props) {
    function demoMethod(a) {
        props.sendDatacn(a);
    }
    function topFunction() {
        window.scrollTo(0, 0);
    }
    return (
        <div>
            <div className="leftbar">
                <div className="logo">
                    <img className="logoimg" src={logoimg} alt="" />
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
                    <img src={top} onClick={topFunction} style={{ marginRight: '12px', marginTop: '72px', cursor: 'pointer' }} className="flatico" alt="" />
                </div>
            </div>
        </div>
    )
}
