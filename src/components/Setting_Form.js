import React from 'react';
import './index.css';
import './Dashboard.css';
import './Form.css';


import { useHistory } from "react-router-dom";



const Setting_Form = () => {
  
    let history = useHistory();
    var currDate2 = new Date();
    var date = currDate2.getDate()+'/'+(currDate2.getMonth()+1)+'/'+currDate2.getFullYear();
    var time = currDate2.getHours()+':'+currDate2.getMinutes();

    return (
        <main className='main1'>
            <div className='form-body'>
                <div className='container-role'>
                    <div className='title'>Create Setting</div>
                    <hr />
                    <form action='#'>
                        <div className='user-details-2'>
                            <div className='input-box'>
                                <span className='details'>Key <span style={{ color: 'red' }}>*</span></span>
                                <input type="text" required />
                            </div>
                            <div className='input-box'>
                                <span className='details'>Value <span style={{ color: 'red' }}>*</span></span>
                                <input type="text" required />
                            </div>
                            <div className='input-box'>
                                <span className='details'>Description <span style={{ color: 'red' }}>*</span></span>
                                <input type="text" required />
                            </div>

                            {/* <div className='input-box'>
                                <span className='details'>Modufied By <span style={{ color: 'red' }}>*</span></span>
                                <input type="text" required />
                            </div> */}
                            <div className='input-box'>
                                <span style={{ fontWeight: 'Bold'}} className='details'>Date <span style={{ color: 'red' }}>*</span></span>
                                <input  value={date}  readOnly="true" disabled="true"/>
                            </div>
                            
                        </div>
                        <div className='flex m-3 mt-2' style={{ gap: '1rem' }}>
                            <div className='button1'>
                                <input type="submit" value="Submit" />
                            </div>
                            <div className='cancle'>
                                <input type="button" value="Cancle" onClick={() => { history.push("/Setting") }} />
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </main>
    );
}
export default Setting_Form;