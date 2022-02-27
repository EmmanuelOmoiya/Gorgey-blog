import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
    const [show, setShow] = useState(false);
    const toggle = () =>{
        setShow(!show);
    }
    return (
        <nav className="navbar">
            <h2 className='logo'>Gorgey</h2>
            <ul className={show ? 'list show' : 'list'}>
                <li className="links" onClick={toggle}><Link href='/'><a>Home</a></Link></li>
                <li className="links" onClick={toggle}><Link href='/about'><a>About</a></Link></li>
                <li className="links" onClick={toggle}><Link href='/write'><a>Write</a></Link></li>
                <li className="links" onClick={toggle}><Link href='https://wa.me/+2347043738436'><a>Contact</a></Link></li>
            </ul>
            <div className={show ? 'hamburger drop' : 'hamburger'} onClick={toggle}>
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>
    );
}
 
export default Navbar;