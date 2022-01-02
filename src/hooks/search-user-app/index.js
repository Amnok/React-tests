import React, {useState} from 'react'
import useData from './hooks/useData';
import Items from './Items';

function Users() {
    const [type, setType] = useState('users')
    const [data] = useData(type);
    function onClick() {    
    }
    const style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap:'100px',
        marginTop: '20px'
    }

    return (
        <div>
            <div style={style}>
                <button onClick={() => setType('users')} >Get Users</button>
                <button onClick={() => setType('posts')}>Get Posts</button>
                <button onClick={() => setType('comments')}>Get Comments</button>
            </div>
            <Items items={data} onItemClick={onClick}/>
        </div>
    )
}

export default Users;
