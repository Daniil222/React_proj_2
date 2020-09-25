import React from 'react';
import { Link } from 'react-router-dom'

import './style.scss';
import user from'./icons/user.png'

export const Profile = () => {

    return(
        <div className="profile">
            <div className="profile__img">
                <img src={user} alt="User"/>
            </div>
            <ul className="profile__menu">
                <li>
                    <Link to='/'>Мій профіль</Link>
                </li>
                <li>
                    <Link to='/'>Обговорення</Link>
                </li>
                <li>
                    <Link to='/'>Списки</Link>
                </li>
                <li>
                    <Link to='/'>Рейтинги</Link>
                </li>
                <li>
                    <Link to='/'>Переглянути пізніше</Link>
                </li>
                <li>
                    <Link to='/'>Редагувати профіль</Link>
                </li>
                <li>
                    <Link to='/'>Параметри</Link>
                </li>
                <li>
                    <Link to='/'>Вихід</Link>
                </li>
            </ul>
        </div>
    )
}