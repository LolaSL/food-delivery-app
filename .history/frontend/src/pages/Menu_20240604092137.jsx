import  { useState, useEffect } from 'react';
import axios from 'axios';

const Menu = () => {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/menu');
                setMenuItems(response.data);
            } catch (error) {
                console.error('Error fetching the menu items', error);
            }
        };

        fetchMenuItems();
    }, []);

    return (
        <div>
            <h1>Menu</h1>
            <ul>
                {menuItems.map((item) => (
                    <li key={item._id}>
                        <h2>{item.menu_name}</h2>
                        <img src={item.menu_image} alt={item.menu_name} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;
