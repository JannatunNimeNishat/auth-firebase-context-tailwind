import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Home = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
    return (
        <div>
            <h3>THis is home 
            {/* {user &&
            {user.displayName}
            
            } */}
            {
            
            user && 

           <span>{user.displayName}</span>
            
            }            
            </h3>
        </div>
    );
};

export default Home;