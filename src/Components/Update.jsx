import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './style.scss';
import { useNavigate } from 'react-router-dom';

export default function Update({ }) {
    const navigate=useNavigate();
    const [val, setVal] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    useEffect(() => {
        setVal(localStorage.getItem("ide"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
        setNumber(localStorage.getItem("number"));
        console.log(val);
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`https://646888f8e99f0ba0a826bc81.mockapi.io/sample/${val}`, {
            data: {
                name: e.target[0].value,
                email: e.target[1].value,
                number:e.target[2].value
            }
        }).then(()=>{navigate("/datatoshow")});
    }
    
    return (
        <div className="create">
        <div className='cr00'>
            <div className='cr1'>Update</div>
            <div className='cr2'>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='Write your name here' value={name} onChange={(e)=>{setName(e.target.value)}}/>
                    <input type="text" placeholder='Write your email here' value={email} onChange={e=>{setEmail(e.target.value)}}/>
                    <input type="text" placeholder='Write your Phone number here' value={number} onChange={e=>{setNumber(e.target.value)}}/>
                    <button>UPDATE</button>
                </form>
            </div>
        </div>
    </div>
    )
}
