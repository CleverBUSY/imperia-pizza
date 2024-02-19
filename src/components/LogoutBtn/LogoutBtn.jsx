import React from 'react';

const LogoutButton = () => {
    const handleLogout = () => {
        // Удаляем данные о пользователе из локального хранилища
        localStorage.removeItem('registeredEmail');
        localStorage.removeItem('registeredName');
        // Перезагружаем страницу
        window.location.reload();
    };

    return (
        <button onClick={handleLogout}>Выйти</button>
    );
};

export default LogoutButton;
