import React, { useState } from 'react';
import './index.css';
import './Dashboard.css';
import './User_Form.css';
import { Multiselect } from 'multiselect-react-dropdown';
import { useHistory } from "react-router-dom";
import Select from 'react-select';
import { ConstructionRounded } from '@mui/icons-material';




const LogIncident_Form = () => {

    let history = useHistory();

    const status = [
        { value: 'project1', label: 'Project1' },
        { value: 'project2', label: 'Project2' },
        { value: 'project3', label: 'Project3' },
        { value: 'project4', label: 'Project4' },
        { value: 'project5', label: 'Project5' },

    ];

    const officer_data = [
        { Officer: 'Officer1', id: 1 },
        { Officer: 'Officer2', id: 2 },
        { Officer: 'Officer3', id: 3 },
        { Officer: 'Officer4', id: 4 },
        { Officer: 'Officer5', id: 5 },
        { Officer: 'Officer6', id: 6 }
    ]

    const [officer_option] = useState(officer_data);
    const [selectedOption, setSelectedOption] = useState(null);
    const [file, setFile] = useState('');

    const handleChange =(e) => {
        console.log(e.target.files)
        setFile(e.target.files[0])
    }
    var currDate2 = new Date();
    var date = currDate2.getDate()+'/'+(currDate2.getMonth()+1)+'/'+currDate2.getFullYear();
    var time = currDate2.getHours()+':'+currDate2.getMinutes();

    return (
        <main className='main1'>
            <div className='form-body'>
                <div className='container'>
                    <div className='title'>Create Log Incident</div>
                    <hr />
                    <form action='#'>
                        <div className='user-details'>
                            <div className='input-box'>
                                <span style={{ fontWeight: 'Bold'}} className='details'>Location <span style={{ color: 'red' }}>*</span></span>
                                {/* <TextField id="outlined-basic" type="text" required /> */}
                                <input type="text" required />
                            </div>
                            <div className='input-box'>
                                <span style={{ fontWeight: 'Bold'}} className='details'>File <span style={{ color: 'red' }}>*</span></span>
                                {/* <TextField id="outlined-basic" type="text" required /> */}
                                <input type="file" required style={{border:"none"}} onChange={handleChange} />
                            </div>
                            <div className='input-box-2 dropdown '>
                                <span style={{ fontWeight: 'Bold'}} className='details'>Project <span style={{ color: 'red' }}>*</span></span>
                                <Select options={status} defaultValue={selectedOption} onChange={setSelectedOption} />
                            </div>
                            {/* <div className='input-box-2 '>
                                <span className='details ml-px'>Tag To <span style={{ color: 'red' }}>*</span></span>
                                <Multiselect className='dropdown ml-px' options={officer_option} displayValue="Officer" />
                            </div> */}
                            <div className='input-box'>
                                <span style={{ fontWeight: 'Bold'}} className='details'>Date <span style={{ color: 'red' }}>*</span></span>
                                <input  value={date}  readOnly="true" disabled="true"/>
                            </div>
                            <div className='input-box'>
                                <span style={{ fontWeight: 'Bold'}} className='details'>Time <span style={{ color: 'red' }}>*</span></span>
                                <input    value={time} readOnly="true" disabled="true"/>
                            </div>

                          


                        </div>
                        <div className='flex m-3' style={{ gap: '1rem'  }}>
                            <div className='button1'>
                                <input type="submit" value="Submit" />
                            </div>
                            <div className='cancle'>
                                <input type="button" value="Cancle" onClick={() => { history.push("/") }} />
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </main>
    );
}
export default LogIncident_Form;