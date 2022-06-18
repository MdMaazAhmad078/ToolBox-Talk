import React, { useState } from 'react';
import { BsSearch } from "react-icons/bs";
import TextField from '@mui/material/TextField';
import {useTable,useGlobalFilter} from 'react-table'
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import './index.css';
import './Table.css';
import { useHistory } from "react-router-dom";
import { green } from 'material-ui/colors';
import InputAdornment from '@mui/material/InputAdornment';
import { useTranslation } from 'react-i18next';
// import { ColumnFilter } from './ColumnFilter';

function createData(name, date,  incharge, status, modified_date, modified_by) {
    return {
        name,
        date,
        incharge,
        status,
        modified_date,
        modified_by,

        history: [
            {
              date: '2020-01-05',
              customerId: 'Height Safety',
              amount: 3,
            },
            {
              date: '2020-01-02',
              customerId: 'Fire Safety',
              amount: 1,
            },
          ],

    };
}

function Row(props) {
    let history = useHistory();
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    

    return (
        <React.Fragment>
        
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="center">{row.date}</TableCell>



                <TableCell align="center" > {row.status === 'Open' ? <Button variant="contained" className='status' style={{ backgroundColor: 'red' }}>Open</Button>
                    : row.status === 'Closed' ? <Button variant="contained" className='status' style={{ backgroundColor: 'rgb(228, 48, 213)' }}>Closed</Button>
                        : row.status === 'On-Hold' ? <Button variant="contained" className='status' style={{ backgroundColor: 'Blue' }}>On-Hold</Button> :
                            row.status === 'Completed' ? <Button variant="contained" className='status' style={{ backgroundColor: 'green' }}>Completed</Button> :
                                row.status === 'Delivered' ? <Button variant="contained" className='status' style={{ backgroundColor: 'grey' }}>Delivered</Button> :
                                    row.status === 'In-Progress' ? <Button variant="contained" className='status' style={{ backgroundColor: 'orange' }}>In-Progress</Button> : ''}
                </TableCell>


                <TableCell align="center">{row.incharge}</TableCell>
                <TableCell align="center">{row.modified_date}</TableCell>
                <TableCell align="center">{row.modified_by}</TableCell>

            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 ,marginBottom:"3rem"}} colSpan={7}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 2 }}>
                            <Typography variant="h6" gutterBottom component="div" fontWeight="Bold" color='gray' >
                                Project Meeting details:
                            </Typography>
                            <div style={{ float: "right",marginTop:"-2rem" }}>
                                <Button
                                    onClick={() => { history.push("/Form") }}
                                    style={{ backgroundColor: "rgb(135 130 130)",color:"white",  margin: "3px" }}
                                >Conduct Meeting</Button>
                                {/* <Button style={{ backgroundColor: "rgb(135 130 130)", color:"white", margin: "3px" }}>Persons</Button> */}
                            </div>
                            
                            <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell style={{ fontWeight: 'Bold'}}>Date</TableCell>
                    <TableCell style={{ fontWeight: 'Bold'}} align="center">Meeting Topic</TableCell>
                    <TableCell style={{ fontWeight: 'Bold'}} align="center">Attendance</TableCell>
                    <TableCell style={{ fontWeight: 'Bold'}} align="right">No of Persons</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row" >
                        {historyRow.date}
                      </TableCell>
                      <TableCell align="center">{historyRow.customerId}</TableCell>
                      <TableCell align="center"><Button 
                       onClick={() => { history.push("/Attendence_List") }}
                       style={{ backgroundColor: "rgb(135 130 130)",color:"white",  margin: "3px" }}>Attendance</Button></TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
                           
                        </Box>
                    </Collapse>
                </TableCell>

            </TableRow>
        </React.Fragment>
    );
}



const rows = [
    createData('Project1', '19-05-22', 'Admin', 'Open', '19-06-22', 'Admin', 3.99),
    createData('Project2', '10-05-22', 'Admin', 'In-Progress', '19-05-22', 'Admin', 4.99),
    createData('Project3', '01-05-22', 'Admin', 'Closed', '19-05-22', 'Admin', 3.79),
    createData('Project4', '20-04-22', 'Admin', 'In-Progress', '19-05-22', 'Admin', 2.5),
    createData('Project5', '19-03-22', 'Admin', 'Completed', '19-05-22', 'Admin', 1.5),
    createData('Project5', '19-03-22', 'Admin', 'On-Hold', '19-05-22', 'Admin', 1.5),
];

export default function CollapsibleTable() {
    const[filterFn, setFilterFn] = useState({fn:items => {return items;}});
    
    let history = useHistory();
    
  const { t } = useTranslation(["common","dashboard","projectTable"]);

    const handleSearch = e => {
        let target =e.target
        setFilterFn({
            fn: items => {
                if (target.value === "")
                    return items;
                    else
                    return items.filter(x => x.project.toLowerCase.includes(target.value))
            }
        })
    }
    return (
        <TableContainer component={Paper} style={{ marginLeft: "5%", paddingRight: "6%" }}>
           <div className='flex justify-between mr-t-1rem'>
            <Toolbar >
            <TextField variant="outlined" label={t("searchProject")} className='search-size'
            InputProps={{
                startAdornment : <InputAdornment position="start">
                     <BsSearch/>
                </InputAdornment>
            }}
           
            onChange={{handleSearch}}
            />
            </Toolbar>
            <Button variant="contained" className='project-btn'  onClick={() => { history.push("/Project_Form") }}>{t("createProject")}</Button>
            </div>
            <Table aria-label="collapsible table"  >
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell style={{ fontWeight: 'Bold'}}>{t("project")}</TableCell>
                        <TableCell style={{ fontWeight: 'Bold'}} align="center">{t("startingDate")}</TableCell>
                        <TableCell style={{ fontWeight: 'Bold'}} align="center">{t("status")}</TableCell>
                        <TableCell style={{ fontWeight: 'Bold'}} align="center">{t("incharge")}</TableCell>
                        <TableCell style={{ fontWeight: 'Bold'}} align="center">{t("modifiedDate")}</TableCell>
                        <TableCell style={{ fontWeight: 'Bold'}} align="center">{t("modifiedBy")}</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (

                        <Row key={row.name} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
       
    );
}
