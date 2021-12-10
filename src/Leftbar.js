import React from 'react'
import logoimg from './ico/image.png'
import world from './ico/world.png'
import uk from './ico/uk.png'
import usa from './ico/usa.png'
import ind from './ico/in.png'
import './css/Leftbar.css'
export default function Leftbar(props) {
    function demoMethod(a) {
        props.sendDatacn(a);
    }
    return (
        <div>
            <div className="leftbar">
                <div className="logo">
                    <img className="logoimg" src={logoimg} alt="" />
                </div>
                <div className="country">
                    <img className="flatico" src={world} alt="" />
                    <img onClick={() => { demoMethod('us') }} className="flatico" src={usa} alt="" />
                    <img onClick={() => { demoMethod('gb') }} className="flatico" src={uk} alt="" />
                    <img onClick={() => { demoMethod('in') }} className="flatico" src={ind} alt="" />

                </div>
            </div>
        </div>
    )
}
