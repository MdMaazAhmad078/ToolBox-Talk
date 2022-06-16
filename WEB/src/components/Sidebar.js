import React, { useState, useEffect } from 'react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import './index.css';
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa";
import { FaIdCardAlt, FaTools } from "react-icons/fa";
import { AiTwotoneSetting } from "react-icons/ai";
import { GiHazardSign } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { MdNotifications, MdLibraryBooks  } from "react-icons/md";
import { GrPowerShutdown } from "react-icons/gr";
import IconButton from '@mui/material/IconButton';
import { FaUserCircle } from "react-icons/fa";
import { BiFoodMenu } from "react-icons/bi";
import Tooltip from '@mui/material/Tooltip';
import { RiEyeCloseFill } from "react-icons/ri";
import { useHistory } from "react-router-dom";




const Sidebar = () => {
    
    let history = useHistory();
     
    const {i18n, t} = useTranslation(["common","dashboard"]);

    useEffect(() => {
        if (localStorage.getItem("i18nextLng")?.length >2){
            i18next.changeLanguage("en");
        }
    }, []);

    const handleLanguageChange = (e) => {
        i18n.changeLanguage(e.target.value);
    }

    const [show, setShow] = useState(false)
    const [drop, setDrop] = useState(false)
    const [drop1, setDrop1] = useState(false)

    return (
        <main className={show ? 'space-toggle' : null}>
            <header className={`header ${show ? 'space-toggle' : null}`}>
                <div className='header-toggle' onClick={() => setShow(!show)}>
                    <i class="fas fa-bars "> &nbsp; &nbsp;{t("toolboxtalk")}</i>


                </div>
               
                <div className='flex' style={{ paddingTop: '10px' }}>
                <div className='lang-select'>
                <select 
                className='select-l'
                value={localStorage.getItem("i18nextLng")}
                onChange={handleLanguageChange}
                >
                       <option className='option-l' value="en">English</option>
                       <option  className='option-l'value="ar">Arabic</option>
                   </select>
                </div>
              
                    <Tooltip title={t("notification")} arrow>
                        <IconButton className='top-icon'><MdNotifications /></IconButton>
                    </Tooltip>
                    <Tooltip title={t("profile")} arrow>
                        <IconButton className='top-icon'><FaUserCircle /></IconButton>
                    </Tooltip>
                    <Tooltip title={t("logout")} arrow>
                        <IconButton className='top-icon' ><GrPowerShutdown onClick={() => { history.push("/") }} /></IconButton>
                    </Tooltip>


                </div>

            </header>
            <aside className={`sidebar ${show ? 'show' : null}`}>
                <nav className='nav'>
                    <ul>
                        <li>
                            <Link to="/Dashboard" className='nav-logo'>
                                <i class="fas fa-home nav-logo-icon"></i>
                                <span className='nav-logo-name'> {t("home")} </span>
                            </Link>
                        </li>



                        <div className='nav-list '>
                           
                            <li>
                                <Link  className='nav-link' onClick={() => setDrop(!drop)}>
                                    
                                    <FaUserShield className='new-logo'/>
                                    <span className='nav-link-name'>{t("admin")}<IoIosArrowDown className='arrow' /></span>
                                </Link>
                                <ul className={` ${drop ? 'drop1' : null}`}>
                                    <li>
                                        <Link to="/Role" className='nav-link-drop '>
                                            <FaIdCardAlt className='logo-size'/>
                                            <span className='nav-link-name'>{t("role")}</span>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/User" className='nav-link-drop '>
                                            <FaUser  className='logo-size'/>
                                            <span className='nav-link-name'>{t("user")}</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Setting" className='nav-link-drop '>
                                            <AiTwotoneSetting className='logo-size'/>
                                            <span className='nav-link-name'>{t("setting")}</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Parameter" className='nav-link-drop '>
                                            <FaTools  className='logo-size'/>
                                            <span className='nav-link-name'>{t("parameters")}</span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/project" className='nav-link'>
                                    <MdLibraryBooks className='new-logo'/>
                                    <span className='nav-link-name'>{t("dashboard:projects")}</span>
                                </Link>
                            </li>
                            <li>
                                <Link  className='nav-link' onClick={() => setDrop1(!drop1)}>
                                    <GiHazardSign className='new-logo' />
                                    <span className='nav-link-name'>{t("dashboard:incident&hazards")}<IoIosArrowDown className='arrow' /></span>
                                </Link>
                                <ul className={` ${drop1 ? 'drop1' : null}`}>
                                    <li>
                                        <Link to="/LogIncident_Form" className='nav-link-drop '>
                                            <BiFoodMenu className='logo-size'/>
                                            <span className='nav-link-name'>{t("dashboard:logincident")}</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/ViewIncident" className='nav-link-drop '>
                                            <RiEyeCloseFill className='logo-size'/>
                                            <span className='nav-link-name'>{t("viewincident")}</span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/Notification" className='nav-link-drop '>
                                    <MdNotifications className='new-logo' />
                                    <span className='nav-link-name'>{t("notification")}</span>
                                </Link>
                            </li>
                        </div>


                    </ul>

                </nav>
            </aside>

            {/* <Dashboard/> */}

        </main>
    );


}

export default Sidebar;