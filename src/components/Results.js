import React, { useState, useEffect} from 'react';
import { isDOMComponent } from 'react-dom/test-utils';
import { Link } from 'react-router-dom'

function Results({ data }) {
    return (
        <div>
            <div className = "imageContainer">
                {data.map(data => (
                    <Link to = {`/description/${data.id}`} key = {data.id} className = "image">
                        <img src = {data.api_link} alt = "artwork"/>
                        <p>{data.api_link}</p>
                    </Link>
                ))}



            </div>
        </div>
    );
}

export default Results;