// src/App.tsx
import React, { useState, useEffect } from 'react';
import Calendar from './components/Calendar';
import BirthdayList from './components/BirthdayList';
import FavoriteBirthdays from './components/FavoriteBirthdays';
import axios from 'axios';

interface Birthday {
    text: string;
}

const App: React.FC = () => {
    const [birthdays, setBirthdays] = useState<Birthday[]>([]);
    const [favorites, setFavorites] = useState<Birthday[]>([]);

    const handleDateChange = async (date: Date | null) => {
        if (date) {
            const month = date.getMonth() + 1;
            const day = date.getDate();
            try {
                const response = await axios.get(`https://api.wikimedia.org/feed/onthisday/births/${month}/${day}`);
                setBirthdays(response.data.births);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        }
    };

    const addFavorite = (birthday: Birthday) => {
        setFavorites([...favorites, birthday]);
    };

    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        setFavorites(savedFavorites);
    }, []);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    return (
        <div>
            <Calendar onDateChange={handleDateChange} />
            <BirthdayList birthdays={birthdays} onFavorite={addFavorite} />
            <FavoriteBirthdays favorites={favorites} />
        </div>
    );
};

export default App;
