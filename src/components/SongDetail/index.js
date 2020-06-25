import React, { useEffect, useState } from 'react';
import { getPostById } from '../../request';

function SongDetail({  match }) {
    const [items, setItems] = useState({})
    const id = match.params.id
    useEffect(() => {
        getPostById(id).then(result => setItems(result.data));
    }, [])

    const style = {
       listStyle: 'none',
       textAlign: 'left'
    }
    return (
            <ul style={style}>
                <li><strong>Id:</strong> {items.id}</li>
                <li><strong>UserId:</strong> {items.userId}</li>
                <li><strong>Title:</strong> {items.title}</li>
                <li><strong>Body:</strong> {items.body}</li>
            </ul>
    );
}

export default SongDetail;