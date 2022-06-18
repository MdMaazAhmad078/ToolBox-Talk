import React, { useState } from 'react';
import './index.css';
import './Dashboard.css';
import './Form.css';
import './User_Form.css';
import Select from 'react-select';
import { useHistory } from "react-router-dom";



const Form = () => {
  
    let history = useHistory();
    const project = [
        { value: '', label: 'Select' },
        { value: 'project1', label: 'Project1' },
        { value: 'project2', label: 'Project2' },
        { value: 'project3', label: 'Project3' },
        { value: 'project4', label: 'Project4' },
        { value: 'project5', label: 'Project5' },

    ];
    
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <main className='main1'>
            <div className='form-body-1'>
                <div className='container-User'>
                    <div className='title'>Conduct Toolbox Talk</div>
                    <hr />
                    <form action='#'>
                        <div className='user-details-2'>
                        <div className='input-box-2'>
                                <span style={{ fontWeight: 'Bold'}} className='details'>Project <span style={{ color: 'red' }}>*</span></span>
                                <Select options={project} defaultValue={selectedOption} onChange={setSelectedOption} />
                            </div>
                            <div className='input-box'>
                                <span className='details' style={{ fontWeight: 'Bold'}}>Function/Sub-Function <span style={{ color: 'red' }}>*</span></span>
                                <input type="text" required />
                            </div>
                            <div className='input-box'>
                                <span className='details' style={{ fontWeight: 'Bold'}}>Location <span style={{ color: 'red' }}>*</span></span>
                                <input type="text" required />
                            </div>
                            <div className='input-box'>
                                <span className='details' style={{ fontWeight: 'Bold'}}>Toolbox Talk Topic <span style={{ color: 'red' }}>*</span></span>
                                <input type="text" required />
                            </div>
                            <div className='input-box'>
                                <span className='details' style={{ fontWeight: 'Bold'}}>Date <span style={{ color: 'red' }}>*</span></span>
                                <input type="date" required />
                            </div>
                            <div className='input-box'>
                                <span className='details' style={{ fontWeight: 'Bold'}}>Time <span style={{ color: 'red' }}>*</span></span>
                                <input type="time" required />
                            </div>
                            <div className='input-box'>
                                <span className='details' style={{ fontWeight: 'Bold'}}>No of Persons <span style={{ color: 'red' }}>*</span></span>
                                <input type="text" required />
                            </div>
                        </div>
                        <div className='flex m-3' style={{ gap: '1rem' }}>
                            <div className='button1' >
                                <input type="submit" value="Submit" />
                            </div>
                            <div className='cancle'>
                                <input type="button" value="Cancle" onClick={() => { history.push("/Project_Table") }} />
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </main>
    );
}
export default Form;