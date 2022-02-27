import Link from 'next/link'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
    return (  
        <footer className="footer">
            <Link href='https://www.github.com/EmmanuelOmoiya'><a><FaGithub  className='icon'/></a></Link>
            &copy;Copyright 2022 Gorgey Inc
        </footer>
    );
}
 
export default Footer;