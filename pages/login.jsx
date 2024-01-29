import { signIn } from 'next-auth/react';
import React from 'react';

const Login = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-black">
            <button onClick={() => {
                signIn('spotify', { callbackUrl: "/" })
            }} className='text-white px-8 py-2 rounded-full bg-green-500 font-bold'>Login with Spotify</button>
        </div>
    );
}

export default Login;
