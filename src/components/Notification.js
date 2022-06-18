import React from 'react';
import { useHistory } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useTranslation } from 'react-i18next';


const Notification = () => {


    let history = useHistory();
    const { t } = useTranslation(["dashboard"]);
    return (
        <>
        <div className='role-list'>
        <h2>{t("upcomingevent")}</h2>
          <TableContainer component={Paper} style={{ boxShadow: 'none' }}>
            <Table aria-label="collapsible table" >
              <TableHead>
                <TableRow>
                  <TableCell style={{ fontWeight: '600', fontSize: '0.97rem' }}>{t("project")}</TableCell>
                  <TableCell align="center" style={{ fontWeight: '600', fontSize: '0.97rem' }}>{t("topic")}</TableCell>
                  <TableCell align="center" style={{ fontWeight: '600', fontSize: '0.97rem' }}>{t("location")}</TableCell>
                  <TableCell align="center" style={{ fontWeight: '600', fontSize: '0.97rem' }}>{t("date")}</TableCell>
                  <TableCell align="center" style={{ fontWeight: '600', fontSize: '0.97rem' }}>{t("time")}</TableCell>
                  <TableCell align="center" style={{ fontWeight: '600', fontSize: '0.97rem' }}> {t("givenby")}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Construction</TableCell>
                  <TableCell align="center">Safety</TableCell>
                  <TableCell align="center">Zone 1</TableCell>
                  <TableCell align="center">18/12/2022</TableCell>
                  <TableCell align="center">9:15</TableCell>
                  <TableCell align="center">Mark</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Electrical</TableCell>
                  <TableCell align="center">Safety</TableCell>
                  <TableCell align="center">Zone 5</TableCell>
                  <TableCell align="center">18/10/2022</TableCell>
                  <TableCell align="center">12:15</TableCell>
                  <TableCell align="center">Jason</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Packaging</TableCell>
                  <TableCell align="center">Safety</TableCell>
                  <TableCell align="center">Zone 2</TableCell>
                  <TableCell align="center">18/08/2022</TableCell>
                  <TableCell align="center">9:45</TableCell>
                  <TableCell align="center">Emily</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Cleaning</TableCell>
                  <TableCell align="center">Safety</TableCell>
                  <TableCell align="center">Zone 10</TableCell>
                  <TableCell align="center">28/08/2022</TableCell>
                  <TableCell align="center">12:35</TableCell>
                  <TableCell align="center">Kim</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
            </div>
        </>
    );
}
export default Notification;