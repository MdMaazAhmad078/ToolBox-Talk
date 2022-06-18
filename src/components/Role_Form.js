import React from 'react';
import './index.css';
import './Dashboard.css';
import './Form.css';


import { useHistory } from "react-router-dom";



const Role_Form = () => {
  
    let history = useHistory();


    return (
        <main className='main1'>
            <div className='form-body'>
                <div className='container-role'>
                    <div className='title'>Create Role</div>
                    <hr />
                    <form action='#'>
                        <div className='user-details-2'>
                            <div className='input-box'>
                                <span style={{ fontWeight: 'Bold'}} className='details'>Name <span style={{ color: 'red' }}>*</span></span>
                                <input type="text" required />
                            </div>
                            <div className='input-box'>
                                <span style={{ fontWeight: 'Bold'}} className='details'>Label <span style={{ color: 'red' }}>*</span></span>
                                <input type="text" required />
                            </div>
                            <div className='input-box'>
                                <span style={{ fontWeight: 'Bold'}} className='details'>Category <span style={{ color: 'red' }}>*</span></span>
                                <input type="text" required />
                            </div>
                            
                        </div>
                        <div className='flex m-3' style={{ gap: '1rem', marginTop:'0.5rem' }}>
                            <div className='button1'>
                                <input type="submit" value="Submit" />
                            </div>
                            <div className='cancle'>
                                <input type="button" value="Cancle" onClick={() => { history.push("/Role") }} />
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </main>
    );
}
export default Role_Form;