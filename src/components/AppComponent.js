import React, { useState } from 'react';
import axios from 'axios';

function AppComponent() {
    const [apps, setApps] = useState([]);
    const [query, setQuery] = useState('');


    const fetchData = () => {

        axios.get(`http://localhost:8080/ethereum/get-apps?query=${query}`, { mode: 'cors' })
            .then(res => res.data).then(data => {
                const apps = [];
                for (let i = 0; i < data.length; i++) {

                    apps.push({ name: data[i].name, id: data[i].id, type: data[i].type })
                }
                setApps(apps);
            })
    }

    return (
        <div>

            <input className="m-2  form-control" value={query} onChange={e => setQuery(e.target.value)} />

            <div className='m-2'><button className="btn btn-dark" onClick={fetchData} >Get Apps</button></div>

            <table className="m-2 table ">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">ID</th>
                    </tr>
                </thead>
                <tbody>
                    {apps.map(app => (
                        <tr>
                            <td key={`name-${app.id}`} href="#" >{app.name}</td>
                            <td key={`type-${app.id}`} href="#" >{app.type}</td>
                            <td key={`id-${app.id}`} href="#">{app.id}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>);
}

export default AppComponent;