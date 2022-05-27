import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import StoreIcon from '@mui/icons-material/Store';
import InventoryIcon from '@mui/icons-material/Inventory';
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';

const Sidebar = () => {

    const { dispatch } = useContext(DarkModeContext)

    return (
        <div className="sidebar">
            <div className="top">
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <span className="logo">.admin.</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <li>
                            <DashboardIcon className="icon" />
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <p className="title">LISTS</p>
                    <Link to='/users' style={{ textDecoration: 'none' }}>
                        <li>
                            <PersonOutlineIcon className="icon" />
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to='/products' style={{ textDecoration: 'none' }}>
                        
                    <li>
                        <StoreIcon className="icon" />
                        <span>Products</span>
                    </li>
                </Link>
                    <li>
                        <InventoryIcon className="icon" />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingOutlinedIcon className="icon" />
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <InsertChartIcon className="icon" />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsOutlinedIcon className="icon" />
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <SettingsSystemDaydreamOutlinedIcon className="icon" />
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyOutlinedIcon className="icon" />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsOutlinedIcon className="icon" />
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <AccountCircleOutlinedIcon className="icon" />
                        <span>Profile</span>
                    </li>
                    <li>
                        <ExitToAppOutlinedIcon className="icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption" onClick={() => dispatch({type: 'LIGHT'})}></div>
                <div className="colorOption" onClick={() => dispatch({type: 'DARK'})}></div>
            </div>
        </div>
    )
}

export default Sidebar