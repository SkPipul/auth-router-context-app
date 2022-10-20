import React, { useContext } from 'react';
import { AuthContext } from '../Context/UserContext';

const Home = () => {
    const {user} = useContext(AuthContext)
    return ( 
        <div>
            <h1 className='text-4xl'><span className='text-5xl font-sans font-bold text-white'>{user?.email}</span> Welcome to our Page!!</h1>
        </div>
    );
};

export default Home;