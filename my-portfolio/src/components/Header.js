import { useState } from 'react';
import {Link} from 'react-scroll'

const Header = () => {

  const [menuSelector, setMenuSelector] = useState(0);

  return (
    <header>
      <div className="header">
        <h1 className="Arno_Van_Eetvelde">Arno Van Eetvelde</h1>

        <div className="header_menu">
          <h1 className="header_menu_item" onClick={() => setMenuSelector(0)}><Link activeClass="active" to="about_me" spy={true} smooth={true}>about me</Link></h1>
          <h1 className="header_menu_item" onClick={() => setMenuSelector(1)}><Link to="projects" spy={true} smooth={true}>projects</Link></h1>
          <h1 className="header_menu_item" onClick={() => setMenuSelector(2)}>contact</h1>
        </div>
        
      </div>
      <hr className={menuSelector === 0 ? "selector_pos_0" : menuSelector === 1 ? "selector_pos_1" : "selector_pos_2"} />
      
      <div className="header_spacer" />

    </header>
  )
}

export default Header
