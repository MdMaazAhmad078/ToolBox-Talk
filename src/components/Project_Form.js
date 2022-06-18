import React, { useState } from 'react';
import './index.css';
import './Dashboard.css';
import './Form.css';
import { Multiselect } from 'multiselect-react-dropdown';
import { useHistory } from "react-router-dom";
import Select from 'react-select';




const Project_Form = () => {

    let history = useHistory();

    const status = [
        { value: 'open', label: 'Open' },
        { value: 'closed', label: 'Closed' },
        { value: 'in-progress', label: 'In-Progress' },
        { value: 'completed', label: 'Completed' },
        { value: 'on-hold', label: 'On-Hold' },

    ];

    const officer_data = [
        { Officer: 'Officer1', id: 1 },
        { Officer: 'Officer2', id: 2 },
        { Officer: 'Officer3', id: 3 },
        { Officer: 'Officer4', id: 4 },
        { Officer: 'Officer5', id: 5 },
        { Officer: 'Officer6', id: 6 }
    ]
    const worker_data = [
        { Worker: 'Worker1', id: 7 },
        { Worker: 'Worker2', id: 8 },
        { Worker: 'Worker3', id: 9 },
        { Worker: 'Worker4', id: 10 },
        { Worker: 'Worker5', id: 11 },
        { Worker: 'Worker6', id: 12 }
    ]
    const incharge_data = [
        { Incharge: 'Incharge1', id: 13 },
        { Incharge: 'Incharge2', id: 14 },
        { Incharge: 'Incharge3', id: 15 },
        { Incharge: 'Incharge4', id: 16 },
        { Incharge: 'Incharge5', id: 17 },
        { Incharge: 'Incharge6', id: 18 }
    ]

    const [officer_option] = useState(officer_data);
    const [worker_option] = useState(worker_data);
    const [incharge_option] = useState(incharge_data);
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <main className='main1'>
            <div className='form-body'>
                <div className='container'>
                    <div className='title'>Create Project</div>
                    <hr />
                    <form action='#'>
                        <div className='user-details'>
                            <div className='input-box'>
                                <span style={{ fontWeight: 'Bold'}} className='details'>Project Name <span style={{ color: 'red' }}>*</span></span>
                                {/* <TextField id="outlined-basic" type="text" required /> */}
                                <input type="text" required />
                            </div>
                            <div className='input-box'>
                                <span style={{ fontWeight: 'Bold'}} className='details'>Description <span style={{ color: 'red' }}>*</span></span>
                                {/* <TextField id="outlined-basic" type="text" required /> */}
                                <input type="text" required />
                            </div>
                            <div className='input-box'>
                                <span style={{ fontWeight: 'Bold'}} className='details'>Date <span style={{ color: 'red' }}>*</span></span>
                                <input type="date" required />
                            </div>

                            <div className='input-box-2'>
                                <span style={{ fontWeight: 'Bold'}} className='details'>Status <span style={{ color: 'red' }}>*</span></span>
                                <Select options={status} defaultValue={selectedOption} onChange={setSelectedOption} />
                            </div>
                            <div className='input-box-2'>
                                <span style={{ fontWeight: 'Bold'}} className='details'>Officers <span style={{ color: 'red' }}>*</span></span>
                                <Multiselect options={officer_option} displayValue="Officer" />
                            </div>

                            <div className='input-box-2'>
                                <span style={{ fontWeight: 'Bold'}} className='details'>Worker <span style={{ color: 'red' }}>*</span></span>
                                <Multiselect options={worker_option} displayValue="Worker" />
                            </div>
                            <div className='input-box-2'>
                                <span style={{ fontWeight: 'Bold'}} className='details'>Incharge <span style={{ color: 'red' }}>*</span></span>
                                <Multiselect options={incharge_option} displayValue="Incharge" />
                            </div>


                        </div>
                        <div className='flex m-3' style={{ gap: '1rem'  }}>
                            <div className='button1'>
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
export default Project_Form;