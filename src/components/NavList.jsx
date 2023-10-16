import React from 'react';
export default function NavList(){
    return(
        <nav className='navlist'>
            <li className='active'>
            <img width="20" height="20" src="/dashboard.png" alt="key--v2"/>
                <span>Dashboard</span>
            </li>
            <li>
                <img width="20" height="20" src="./cube.png" alt=""/>
                <span>Product</span>
                <img width="20" height="20" src="https://img.icons8.com/material-rounded/24/FFFFFF/forward.png" alt="forward"/>
            </li>
            <li>
            <img width="20" height="20" src="./customer.png" alt="gender-neutral-user"/>
                <span>Customer</span>
                <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/FFFFFF/forward.png" alt="forward"/>
            </li>
            <li>

                <img width="20" height="20" src="https://img.icons8.com/pastel-glyph/64/FFFFFF/coin-wallet--v5.png" alt="coin-wallet--v5"/>
                <span>Income</span>
                <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/FFFFFF/forward.png" alt="forward"/>
            </li>
            <li>
                <img width="23" height="23" src="./promote.png" alt="key"/>
                <span>Promote</span>
                <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/FFFFFF/forward.png" alt="forward"/>
            </li>
            <li>
                <img width="24" height="24" src="./help.png" alt="key"/>
                <span>Help</span>
                <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/FFFFFF/forward.png" alt="forward"/>
            </li>
        </nav>
    );
}