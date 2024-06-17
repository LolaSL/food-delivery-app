// import { useState, useContext, useEffect } from 'react';
// import axios from 'axios';
// import { StoreContext } from "../context/StoreContext.jsx";

// const Menu = () => {
//     const { url } = useContext(StoreContext);
//     const [menuItems, setMenuItems] = useState([]);

//     useEffect(() => {
//         const fetchMenuItems = async () => {
//             try {
//                 const response = await axios.get(`${url}/api/menu`);
//                 setMenuItems(response.data);  // Adjust this line based on the actual response structure
//                 console.log(response.data);
//             } catch (error) {
//                 console.error('Error fetching the menu items', error);
//             }
//         };

//         fetchMenuItems();
//     }, [url]);

//     return (
//         <div>
//             <h1>Menu</h1>
//             <ul>
//                 {menuItems && menuItems.length > 0 ? (
//                     menuItems.map((item) => (
//                         <li key={item._id}>
//                             <h2>{item.menu_name}</h2>
//                             <img src={item.menu_image} alt={item.menu_name} />
//                         </li>
//                     ))
//                 ) : (
//                     <p>No menu items available.</p>
//                 )}
//             </ul>
//         </div>
//     );
// };

// export default Menu;
import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { StoreContext } from "../../context/StoreContext.jsx";
import PropTypes from "prop-types";


const Menu = ({image, name}) => {
    const { url } = useContext(StoreContext);
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                const response = await axios.get(`${url}/api/menu`);
                setMenuItems(response.data.data);  // Adjust this line based on the actual response structure
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
                {menuItems && menuItems.length > 0 ? (
                    menuItems.map(menuItem  => (
                        <li key={menuItem._id}>
                            <h2>{menuItem.menu_name}</h2>
                            <img src={`${url}${`/images/`}${image}`} alt={menuItem.menu_name}  />
                        </li>
                    ))
                ) : (
                    <p>No menu items available.</p>
                )}
            </ul>
        </div>
    );
};

FoodItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  };
export default Menu;