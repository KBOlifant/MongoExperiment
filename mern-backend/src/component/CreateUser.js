import {useState } from 'react';
import axios from 'axios';

const CreateUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:500/api/users/register', {
                name,
                email,
                password,
            });
            setMessage('User created successfully!');
        } catch(err){
            setMessage('Error creating user.');
        }
    };
};

export default CreateUser;