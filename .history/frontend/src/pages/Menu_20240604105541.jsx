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
import { StoreContext } from "../context/StoreContext.jsx";



const Menu = () => {
    const { url } = useContext(StoreContext);
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                const response = await axios.get(`${url}/api/menu`);
                setMenuItems(response.data);  // Adjust this line based on the actual response structure
                console.log(response.data);
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
                    menuItems.map((item) => (
                        <li key={item._id}>
                            <h2>{item.menu_name}</h2>
                            <img src={`${url}${`/images/`}${item.image}`} alt={item.menu_name}  />
                        </li>
                    ))
                ) : (
                    <p>No menu items available.</p>
                )}
            </ul>
        </div>
    );
};
Menu.propTypes = {
    id: PropTypes.string.isRequired,
    menu_name: PropTypes.string.isRequired,
   image: PropTypes.string.isRequired,
  };
export default Menu;