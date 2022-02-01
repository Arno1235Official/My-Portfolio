import { useState } from 'react';

const Header = () => {

  const [menuSelector, setMenuSelector] = useState(0);

  return (
    <header>
      <div className="header">
        <h1 className="Arno_Van_Eetvelde">Arno Van Eetvelde</h1>

        <div className="header_menu">
          <h1 className="header_menu_item" onClick={() => setMenuSelector(0)}>about me</h1>
          <h1 className="header_menu_item" onClick={() => setMenuSelector(1)}>projects</h1>
          <h1 className="header_menu_item" onClick={() => setMenuSelector(2)}>contact</h1>
        </div>
        
      </div>
      <hr className={menuSelector === 0 ? "selector_pos_0" : menuSelector === 1 ? "selector_pos_1" : "selector_pos_2"} />
      
    </header>
  )
}

export default Header
