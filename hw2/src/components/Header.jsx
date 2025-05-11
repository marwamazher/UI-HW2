import { Link } from 'react-router-dom';
import './Header.css';
import Logo from '../assets/images/logo.png';
import { IoIosHome } from "react-icons/io";
import { IoIosBrush } from "react-icons/io";
import { IoIosChatboxes } from "react-icons/io";
import { IoMdRestaurant } from "react-icons/io";

// header component
function Header() {
    return (
      <header>
        {/* display logo at the top, designed on canva */}
         <img src={Logo} alt="Logo" style={{ width: '150px', height: '100px' }} />
         {/* navigation bar to navigate to other pages */}
        <nav>
          <ul>
          <li><Link to="/"><IoIosHome /> Home</Link></li>
          <li><Link to="/unique-food"><IoMdRestaurant /> Unique Food</Link></li>
          <li><Link to="/art-and-culture"><IoIosBrush /> Art and Culture</Link></li>
          <li><Link to="/contact"><IoIosChatboxes /> Contact Us</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;
  