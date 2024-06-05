// src/components/FavoriteBirthdays.tsx
import React from 'react';

interface Birthday {
    text: string;
}

const FavoriteBirthdays: React.FC<{ favorites: Birthday[] }> = ({ favorites }) => {
    return (
        <div>
            <h3>Favorite Birthdays</h3>
            <ul>
                {favorites.map((birthday, index) => (
                    <li key={index}>{birthday.text}</li>
                ))}
            </ul>
        </div>
    );
};

export default FavoriteBirthdays;
