import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useNavListAnimated } from '../hooks/gsap';


const Navbar = () => {


    const logoRef = useRef(null)
    const list1 = useRef(null)
    const list2 = useRef(null)
    const list3 = useRef(null)
    const walletRef = useRef(null)

    const listArr = [logoRef,list1,list2,list3,walletRef]

    useNavListAnimated(listArr)

    return (
        <div className='wrapper'>
            <nav className="navbar">
                <div className="logo" ref={logoRef}>
                    <Link to="/">NFT</Link>
                </div>
                <ul className="nav-links">
                    <li ref={list1}>
                       <Link to="/marketplace">MarketPlace</Link>
                    </li>
                    <li ref={list2}>
                    <Link to="/">Activity</Link>
                    </li>
                    <li ref={list3}>
                    <Link to="/creators">Creator</Link>
                    </li>
                </ul>
                <div className="wallet" ref={walletRef}>
                <Link to="/">Connect Wallet</Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;