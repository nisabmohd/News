import React from 'react'
import './css/Newsframe.css'
export default function Newsframe(props) {
    return (
        <div>
            <div className="newsframe">
                <div className="newsbox">
                    <div className="headlines">
                        <h3>
                            {props.headline}
                        </h3>
                    </div>
                    <div className="imageurl">{}
                        <img src={props.img} alt="img" />
                    </div>
                    <div className="content">
                        <p>
                           {props.content}
                        </p>
                    </div>
                    <div className="buttonreadmore">
                        <button>
                            <a href={props.url} rel="noreferrer" target="_blank" >Read more</a>
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
