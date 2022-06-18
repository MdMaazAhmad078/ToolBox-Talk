import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import './role.css';

const Role = () => {

    let history = useHistory();
    return(
        <div className='role-list'>
         <div className='flex justify-between'>
         <h1 className='font-f' style={{color:'gray'}}>Role </h1>
        <Button variant="contained" className='role-btn'  onClick={() => { history.push("/Role_Form") }}> Create Role</Button>
        </div>
             <TableContainer component={Paper} style={{ boxShadow: 'none' }}>
            <Table aria-label="collapsible table" >
              <TableHead>
                <TableRow>
                  <TableCell style={{ fontWeight: '600', fontSize: '0.97rem' }}>Name</TableCell>
                  <TableCell align="center" style={{ fontWeight: '600', fontSize: '0.97rem' }}>Label</TableCell>
                  <TableCell align="center" style={{ fontWeight: '600', fontSize: '0.97rem' }}>Category</TableCell>
                  <TableCell align="center" style={{ fontWeight: '600', fontSize: '0.97rem' }}>Modified Date</TableCell>
                  <TableCell align="center" style={{ fontWeight: '600', fontSize: '0.97rem' }}>Modified By</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Construction</TableCell>
                  <TableCell align="center">Safety</TableCell>
                  <TableCell align="center">Zone 1</TableCell>
                  <TableCell align="center">18/12/2022</TableCell>
                  <TableCell align="center">Mark</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Electrical</TableCell>
                  <TableCell align="center">Safety</TableCell>
                  <TableCell align="center">Zone 5</TableCell>
                  <TableCell align="center">18/10/2022</TableCell>
                  <TableCell align="center">Jason</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Packaging</TableCell>
                  <TableCell align="center">Safety</TableCell>
                  <TableCell align="center">Zone 2</TableCell>
                  <TableCell align="center">18/08/2022</TableCell>
                  <TableCell align="center">Emily</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Cleaning</TableCell>
                  <TableCell align="center">Safety</TableCell>
                  <TableCell align="center">Zone 10</TableCell>
                  <TableCell align="center">28/08/2022</TableCell>
                  <TableCell align="center">Kim</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
    );
}
export default Role;