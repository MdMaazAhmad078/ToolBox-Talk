import React, { useState } from 'react';
import './index.css';
import './Dashboard.css';
import './User_Form.css';

import { Multiselect } from 'multiselect-react-dropdown';

import { useHistory } from "react-router-dom";



const User_Form = () => {
  
    const officer_data = [
        { Officer: 'Role1', id: 1 },
        { Officer: 'Role2', id: 2 },
        { Officer: 'Role3', id: 3 },
        { Officer: 'Role4', id: 4 },
        { Officer: 'Role5', id: 5 },
        { Officer: 'Role6', id: 6 }
    ]

    
    const [officer_option] = useState(officer_data);
    let history = useHistory();
    var currDate2 = new Date();
    var date = currDate2.getDate()+'/'+(currDate2.getMonth()+1)+'/'+currDate2.getFullYear();
    var time = currDate2.getHours()+':'+currDate2.getMinutes();


    return (
        <main className='main1'>
            <div className='form-body-1'>
                <div className='container-User'>
                    <div className='title'>Create User</div>
                    <hr />
                    <form action='#'>
                        <div className='user-details-2'>
                            <div className='input-box'>
                                <span style={{ fontWeight: 'Bold'}} className='details'>Name <span style={{ color: 'red' }}>*</span></span>
                                <input type="text" required />
                            </div>
                            <div className='input-box'>
                                <span style={{ fontWeight: 'Bold'}} className='details'>Login <span style={{ color: 'red' }}>*</span></span>
                                <input type="text" required />
                            </div>
                            <div className='input-box'>
                                <span style={{ fontWeight: 'Bold'}} className='details'>Expiry Date <span style={{ color: 'red' }}>*</span></span>
                                <input type="date" required />
                            </div>
                            <div className='input-box'>
                                <span style={{ fontWeight: 'Bold'}} className='details'>Category <span style={{ color: 'red' }}>*</span></span>
                                <input type="text" required />
                            </div>
                            <div className='input-box-2'>
                                <span style={{ fontWeight: 'Bold'}} className='details'>Roles <span style={{ color: 'red' }}>*</span></span>
                                <Multiselect options={officer_option} displayValue="Officer" />
                            </div>
                            <div className='input-box'>
                                <span style={{ fontWeight: 'Bold'}} className='details'>Level <span style={{ color: 'red' }}>*</span></span>
                                <input type="text" required />
                            </div>

                            <div className='input-box'>
                                <span style={{ fontWeight: 'Bold'}} className='details'>Status <span style={{ color: 'red' }}>*</span></span>
                                <input type="text" required />
                            </div>
                            
                           
                            
                        </div>
                        <div className='flex m-3 mt-2' style={{ gap: '1rem' }}>
                            <div className='button1'>
                                <input type="submit" value="Submit" />
                            </div>
                            <div className='cancle'>
                                <input type="button" value="Cancle" onClick={() => { history.push("/User") }} />
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </main>
    );
}
export default User_Form;