import './Header.css'
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
return(
    <div className="Header">
       <ul className='MainList'>
        <li><Link to = "/ritualnye-uslugi">Ритуальные услуги</Link></li>
        <li><Link to = "blog">Блог</Link></li>
        <li><Link to="info">Информация</Link></li>
        <li><Link to="sotrudnitchestvo">Сотрудничество</Link></li>
        <li><Link to="catalog">Каталог</Link></li>      
       </ul>
    </div>
)
}
export default Header;