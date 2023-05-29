import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './datastyle.scss';

export default function DataToShow() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const getData = () => {
        axios.get("https://646888f8e99f0ba0a826bc81.mockapi.io/sample").then(res => { setData(res.data) });
    }
    useEffect(() => {
        getData();
    }, [])
    const handleClick1 = (e) => {
        localStorage.setItem("ide", e.id);
        localStorage.setItem("name", e.data.name);
        localStorage.setItem("email", e.data.email)
        localStorage.setItem("number", e.data.number)
        navigate("/update");
    }

    const handleClick2 = (id) => {
        axios.delete(`https://646888f8e99f0ba0a826bc81.mockapi.io/sample/${id}`).then(getData);
    }
    console.log(data);
    return (
        <div className='dts'>
            <div className='DataToShow'>
                <div className='d10' onClick={()=>{navigate("/")}}>CREATE</div>
                <div className='d1'>Data</div>
                <div className='d2'>
                    <table>
                        <thead>
                            <tr>
                                <th>SNo.</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Contact No.</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(e => {
                                return <tr>
                                    <td className='td1'>{e.id}</td>
                                    <td className='td2'>{e.data.name}</td>
                                    <td className='td3'>{e.data.email}</td>
                                    <td className='td4'>{e.data.number}</td>
                                    <td className='td5'>
                                        <button onClick={() => { handleClick1(e) }}>Edit</button>
                                        <button onClick={() => { handleClick2(e.id) }}>Delete</button>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
