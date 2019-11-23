import React from "react"
import { Http2ServerRequest } from "http2"

export const Smurf = ({ name, age, height, id }) => {
    return (
        <>
            <div className="smurfCardContainer">
                    <h2>    name:{name}   </h2>
                <ul>
                    <li>     age:{age}    </li>
                    <li>  height:{height} </li>
                    <li>      id:{id}     </li>
                </ul>
            </div>
        </>
    )
}