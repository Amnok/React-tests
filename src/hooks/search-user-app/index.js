import React, {useState} from 'react'
import useData from './hooks/useData';
import Items from './Items';
import qs from 'qs';
import { useNavigate, useLocation } from 'react-router-dom'

function Users(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const params = qs.parse(location.search,{ delimiter: '?' });
    const [type, setType] = useState(params.type);
    const [data] = useData(type);
    return (
        <div>
            <Items items={data}/>
        </div>
    )
}

export default Users;
