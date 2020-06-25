import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom'
import { getPostById } from '../../request';
function SongDetail({  match }) {
    const [items, setItems] = useState({})
    const itemId = match.params.id
    useEffect(() => {
         getPostById(itemId).then(result => setItems(result.data));
    }, [])

    const style = {
       listStyle: 'none',
       textAlign: 'left'
    }
    return (
        <div>
            {itemId === 'allibaba' && <Redirect to="/404" /> }
            <h2>Song Detail</h2>
            <ul style={style}>
                <li><strong>Id:</strong> {items.id}</li>
                <li><strong>UserId:</strong> {items.userId}</li>
                <li><strong>Title:</strong> {items.title}</li>
                <li><strong>Body:</strong> {items.body}</li>
            </ul>
        </div>
    );
}

export default SongDetail;