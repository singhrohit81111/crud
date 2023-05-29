import React from 'react'
import axios from 'axios';
import './style.scss';
import { useNavigate } from 'react-router-dom';

export default function Dummy() {
    const navigate=useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://646888f8e99f0ba0a826bc81.mockapi.io/sample", {
            data: {
                name: e.target[0].value,
                email: e.target[1].value,
                number:e.target[2].value
            }
        }).then(()=>{navigate("/datatoshow")})
        e.target[0].value = "";
        e.target[1].value = "";
        e.target[2].value = "";
    }
    return (
        <div className="create">
            <div className='cr00'>
                <div className='cr1'>Create</div>
                <div className='cr2'>
                    <form onSubmit={handleSubmit}>
                        <input type='text' placeholder='Write your name here'/>
                        <input type="text" placeholder='Write your email here'/>
                        <input type="text" placeholder='Write your Phone number here'/>
                        <button>Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
