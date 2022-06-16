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
                 <TableCell>{row.description}</TableCell>
                <TableCell align="center">{row.content}</TableCell>

            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 2 }}>
                            <Typography variant="h6" gutterBottom component="div" style={{ fontWeight: 'Bold', color: 'gray'}}>
                                Safety Talk Details:
                            </Typography>
                            <div className='exp-btn'>
                                <Button
                                    onClick={() => { history.push("/Content") }}
                                    style={{ backgroundColor: "rgb(135 130 130)",color:"white",  margin: "3px" }}
                                >Content</Button>
                                <Button
                                 onClick={() => { history.push("/Photos") }} 
                                style={{ backgroundColor: "rgb(135 130 130)", color:"white", margin: "3px" }}>Pictures</Button>
                                <Button 
                                 onClick={() => { history.push("/Video") }}
                                style={{ backgroundColor: "rgb(135 130 130)", color:"white", margin: "3px" }}>Videos</Button>
                            </div>
                        </Box>
                    </Collapse>
                </TableCell>

            </TableRow>
        </React.Fragment>
    );
}



const rows = [
    createData('Fire Safety', 'Prevention and avoid fires to spread'),
    createData('Harnesses & Safety Belts', 'Helps while working on height'),
    createData('Scaffolding', 'N/A'),
    createData('Personal Safety', 'Helps to ensure personal care at work'),
    createData('Personal Rights & Responsibilities', 'N/A'),
    createData('Manual Lifting', 'Prevent and avoid any incident while working manually'),
];

export default function SafetyTalk_Table() {
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
            <Toolbar >
            <TextField variant="outlined" label=" Search Project" className='search-size'
            InputProps={{
                startAdornment : <InputAdornment position="start">
                     <BsSearch/>
                </InputAdornment>
            }}
           
            onChange={{handleSearch}}
            />
            </Toolbar>
            {/* <Button variant="contained" className='project-btn'  onClick={() => { history.push("/Project_Form") }}> Create Safety Talk</Button> */}
            </div>
            <Table aria-label="collapsible table"  >
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell style={{ fontWeight: 'Bold'}}>Name</TableCell>
                        <TableCell style={{ fontWeight: 'Bold'}}>Description</TableCell>
                        {/* <TableCell style={{ fontWeight: 'Bold'}} align="center">Content</TableCell> */}

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
