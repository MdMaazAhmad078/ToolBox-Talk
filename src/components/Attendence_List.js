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
// import { ColumnFilter } from './ColumnFilter';

function createData(name, description,content) {
    return {
        name,
        description,
        content



    };
}

function Row(props) {
    let history = useHistory();
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                {/* <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell> */}
                <TableCell  align="center" component="th" scope="row">
                    {row.name}
                </TableCell>
                 <TableCell align="center">{row.description}</TableCell>
                <TableCell align="center">{row.content}</TableCell>
                <TableCell align="center" style={{padding:'0px 0px 0px 0px',width:'20rem'}} >  <Button variant="contained" className='status' style={{ backgroundColor: 'rgb(135 130 130)' }}>Present</Button></TableCell>
                <TableCell align="center" style={{padding:'0px 0px 0px 0px',width:'20rem'}}>  <Button variant="contained" className='status' style={{ backgroundColor: 'rgb(135 130 130)'}}>Absent</Button></TableCell>
            </TableRow>
           
        </React.Fragment>
    );
}



const rows = [
    createData('Name 1', 'description1', 'content1'),
    createData('Name 2', 'description2', 'content2'),
    createData('Name 3', 'description3', 'content3'),
    createData('Name 4', 'description4', 'content4'),
    createData('Name 5', 'description5', 'content5'),
    createData('Name 6', 'description6', 'content6'),
];

export default function Attendence_List() {
    const[filterFn, setFilterFn] = useState({fn:items => {return items;}});
    
    let history = useHistory();
    

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
            <div>
                <h1 className='font-f' style={{color:'gray'}}>Attendance Sheet</h1>
            </div>
            <div >
            <Button variant="contained"  className='project-btn'  onClick={() => { history.push("/Attendence") }}> Generate QR Code</Button>
            &nbsp;&nbsp;
            <Button variant="contained" className='project-btn'  onClick={() => { history.push("/Scan_QR") }}> Scan QR Code</Button>
            </div>
           
            </div>
            <Table aria-label="collapsible table"  >
                <TableHead>
                    <TableRow>
                        {/* <TableCell /> */}
                        <TableCell style={{ fontWeight: 'Bold'}} align="center">Name</TableCell>
                        <TableCell style={{ fontWeight: 'Bold'}} align="center">Description</TableCell>
                        <TableCell style={{ fontWeight: 'Bold'}} align="center">Content</TableCell>
                        <TableCell style={{ fontWeight: 'Bold'}} align="center">Present</TableCell>
                        <TableCell style={{ fontWeight: 'Bold'}} align="center">Absent</TableCell>

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
