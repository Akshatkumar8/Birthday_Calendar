// src/components/BirthdayList.tsx
import React from 'react';

interface Birthday {
    text: string;
}

const BirthdayList: React.FC<{ birthdays: Birthday[]; onFavorite: (birthday: Birthday) => void }> = ({ birthdays, onFavorite }) => {
    return (
        <div>
            <h3>Birthdays</h3>
            <ul>
                {birthdays.map((birthday, index) => (
                    <li key={index}>
                        {birthday.text}
                        <button onClick={() => onFavorite(birthday)}>Add to Favorites</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BirthdayList;
