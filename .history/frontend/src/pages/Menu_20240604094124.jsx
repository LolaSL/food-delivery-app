import  { useState,  useContext, useEffect } from 'react';
import axios from 'axios';
import { StoreContext } from "../context/StoreContext.jsx";
import PropTypes from "prop-types";

const Menu = ({ id, name,  image }) => {
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

Menu.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  };
export default Menu;
