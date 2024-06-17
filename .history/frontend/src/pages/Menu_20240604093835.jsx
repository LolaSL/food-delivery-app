import  { useState,  useContext, useEffect } from 'react';
import axios from 'axios';
import { StoreContext } from "../context/StoreContext.jsx";


const Menu = ({ id, name, price, description, image }) => {
    const { url} = useContext(StoreContext);
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                const response = await axios.get( `${url}/api/menu`);
                setMenuItems(response.data.data);
                console.log(response.data.data);
            } catch (error) {
                console.error('Error fetching the menu items', error);
            }
        };

        fetchMenuItems();
    }, [url]);

    return (
        <div>
            <h1>Menu</h1>
            <ul>
                {menuItems.map((item) => (
                    <li key={item._id}>
                        <h2>{item.menu_name}</h2>
                        <img src={url + "/images/" + image} alt={name} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;
