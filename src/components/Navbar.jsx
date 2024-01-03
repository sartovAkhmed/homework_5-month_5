import React from 'react'
import { useSelector } from 'react-redux'

export const Navbar = () => {
    const count = useSelector((state) => state.count)

    return (
        <header style={{
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            position: 'fixed',
            backgroundColor: 'gray',
            width: '100%',
            padding: '6px'
        }}>
            <div className="logo">logo</div>
            <nav>
                <ul style={{display: 'flex', gap: '5px'}}>
                    <li>home</li>
                    <li>contacts</li>
                    <li>store</li>
                    <li>about us</li>
                </ul>
            </nav>
            <div className="counter"
                style={{fontSize: '24px', color: 'blue'}}>
                <span>{count}</span>
            </div>
        </header>
    )
}
