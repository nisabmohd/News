import React from 'react'
import './css/Newsframe.css'
export default function Newsframe(props) {
    return (
        <div>
            <div className="newsframe">
                <div className="newsbox">
                    <div className="headlines">
                        {(props.headline) ? <h3>{props.headline.slice(0, 72)}...</h3> : <h3> </h3>}
                    </div>
                    <div className="imageurl">
                        {(props.img) ? <img src={props.img} alt="img" /> : <img src="https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="img" />}
                    </div>
                    <div className="content">
                        {(props.content) ? <p>{props.content.slice(0, 108)} ...</p> : <p> </p>}
                    </div>
                    <div className="buttonreadmore">
                        <button>
                            <a href={props.url} rel="noreferrer" target="_blank" >𝗥𝗲𝗮𝗱 𝗺𝗼𝗿𝗲</a>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}
