import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import '../App.css';
import Profile from "../images/images.jpeg";
import { Link } from "react-router-dom";


const Sidebar = () => {
  return (
    <div className="bg-slate-900">
      <div style={{ height: '100vh', display: 'flex' }}>
        <div style={{ position: 'fixed', top: 0 }}>
          <div className="p-10">
            <img className="rounded-full w-40 h-40" src={Profile} alt="Profile" />
          </div>

          <div className="flex flex-col m-2">
            <Link to="/" className="flex flex-row mb-8">
              < AppstoreOutlined
                className="text-3xl text-white hover:text-gray-400 mr-2" />
              <h1 className="text-start text-2xl font-bold text-white hover:text-gray-400">
                Dashboard
              </h1>
            </Link>
            <Link to="/inventory" className="flex flex-row mb-8">
              < ShopOutlined
                className="text-3xl text-white hover:text-gray-400 mr-2" />
              <h1 className="text-start text-2xl font-bold text-white hover:text-gray-400">
                Inventory
              </h1>
            </Link>
            <Link to="/orders" className="flex flex-row mb-8">
              < ShoppingCartOutlined
                className="text-3xl text-white hover:text-gray-400 mr-2" />
              <h1 className="text-start text-2xl font-bold text-white hover:text-gray-400">
                Orders
              </h1>
            </Link>
            <Link to="/customers" className="flex flex-row mb-8">
              < UserOutlined
                className="text-3xl text-white hover:text-gray-400 mr-2" />
              <h1 className="text-start text-2xl font-bold text-white hover:text-gray-400">
                Customers
              </h1>
            </Link>
            
          </div>

        </div>
      </div>
    </div>


  );
}

export default Sidebar;