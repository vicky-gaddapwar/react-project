import { use, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [validaname, setValidaname] = useState(false);
    const [validapassword, setValidapassword] = useState(false);
    const [invalidNameMessage, setInvalidNameMessage] = useState('');
    const [invalidPasswordMessage, setInvalidPasswordMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'Login Page'; // Set the document title
    }, []);

    // useEffect(() => { Learing purpose
    //     if (name.length >= 2) {
    //         setValidaname(true);
    //     } else {
    //         setValidaname(false);
    //     }

    //     if (password.length >= 2) {
    //         setValidapassword(true);
    //     } else {
    //         setValidapassword(false);
    //     }
    // }, [name, password]);


    // useEffect(() => { # Learing purpose
    //     if (name.length >= 2) {
    //         setValidaname(true);
    //         setInvalidNameMessage('');
    //     } else {
    //         setValidaname(false);
    //         setInvalidNameMessage('Username must be at least 2 characters long');
    //     }

    //     if (password.length >= 2) {
    //         setValidapassword(true);
    //         setInvalidPasswordMessage('');
    //     } else {
    //         setValidapassword(false);
    //         setInvalidPasswordMessage('Password must be at least 2 characters long');
    //     }
    // }, [name, password]);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (name.length >= 2) {
            setValidaname(true);
            setInvalidNameMessage('');
        } else {
            setValidaname(false);
            setInvalidNameMessage('Username must be at least 2 characters long');
        }

        if (password.length >= 2) {
            setValidapassword(true);
            setInvalidPasswordMessage('');
        } else {
            setValidapassword(false);
            setInvalidPasswordMessage('Password must be at least 2 characters long');
        }
        if (validaname && validapassword) {
            navigate('/first-page');
        }

    }

    return (
        <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4'>
            <div className='bg-white rounded-lg shadow-lg p-8 w-full max-w-md'>
                <h2 className='text-3xl font-bold text-gray-800 mb-2'>Login Page</h2>
                <p className='text-lg text-gray-600 mb-6'>Please enter your credentials to login.</p>
                <form onSubmit={handleSubmit} className='space-y-5'>
                    <div>
                        <label htmlFor="username" className='block text-sm font-semibold text-gray-700 mb-2'>Username:</label>
                        <input 
                            type="text" 
                            id="username" 
                            name="username" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)}
                            className='w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition duration-200'
                        />
                        {!validaname && <span className='text-red-500 text-sm mt-1 block'>{invalidNameMessage}</span>}
                    </div>
                    <div>
                        <label htmlFor="password" className='block text-sm font-semibold text-gray-700 mb-2'>Password:</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}
                            className='w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition duration-200'
                        />
                        {!validapassword && <span className='text-red-500 text-sm mt-1 block'>{invalidPasswordMessage}</span>}
                    </div>
                    <button 
                        type="submit"
                        className='w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200 transform hover:scale-105 active:scale-95'
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
  );
}