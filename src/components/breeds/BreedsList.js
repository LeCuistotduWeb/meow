import React from 'react'
import {Link} from "react-router-dom";

function BreedsList ({breeds}){
    return (
            <ul className={"breeds-list"}>
                    {breeds.map(breed => {
                        return ( 
                            <li className={"breeds-item"} key={breed.id} style={{backgroundImage: "url(" + breed.picture + ")"}}>
                                <Link to={`/breeds/${breed.name}`}>
                                    {breed.name}
                                </Link>
                            </li>
                        )
                    })}  
            </ul>
        )
}

export default BreedsList;
