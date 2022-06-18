import React, { useState } from 'react';
import './index.css';
import './Dashboard.css';
import project from '../assest/project.jpg';
import Incident from '../assest/Incident.jpg';  
import meeting from '../assest/meeting.jpg';
import safety from '../assest/safety.webp';
import { useHistory } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useTranslation } from 'react-i18next';
import LanguageSelect from "../LanguageSelect";


const Dashboard = () => {
  let history = useHistory();
  const { t } = useTranslation(["dashboard"]);
  const [show, setShow] = useState(false)

  return (
    <div style={{ marginBottom: '6rem' }}>
     

      <div className='wrapper'>


        <div className='card' onClick={() => { history.push("/Project_Table") }}>
          <img src={project} className='card__img' />
          <div className='card__body'>
            <h2 className='card__title'>{t("projects")}</h2>
            <p className='card__description'>{t("allprojectsdetails")}</p>
          </div>
        </div>

        <div className='card' onClick={() => { history.push("/LogIncident_Form") }}>
          <img src={Incident} className='card__img' />
          <div className='card__body'>
            <h2 className='card__title'>{t("incident&hazards")}</h2>
            <p className='card__description'>{t("logincident")}</p>
          </div>
        </div>

        <div className='card' onClick={() => { history.push("/Form") }}>
          <img src={meeting} className='card__img' />
          <div className='card__body'>
            <h2 className='card__title'>{t("toolboxtalk")}</h2>
            <p className='card__description'>{t("conductmeeting")}</p>
          </div>
        </div>
     

        <div className='card' onClick={() => { history.push("/SafetyTalk_Table") }}>
          <img src={safety} className='card__img' />
          <div className='card__body'>
            <h2 className='card__title'>{t("safetytalk")}</h2>
            <p className='card__description'>{t("alltalksdetails")}</p>
          </div>
        </div>
      </div>
      <div className='list'>
        <div className='dash-list'>
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

        <div className='dash-list2'>
          <h2> {t("incident&hazards")}</h2>
          <TableContainer component={Paper} style={{ boxShadow: 'none' }}>
            <Table aria-label="collapsible table" >
              <TableHead>
                <TableRow>
                  <TableCell style={{ fontWeight: '600', fontSize: '0.97rem' }}>{t("project")}</TableCell>
                  <TableCell align="center" style={{ fontWeight: '600', fontSize: '0.97rem' }}>{t("location")}</TableCell>
                  <TableCell align="center" style={{ fontWeight: '600', fontSize: '0.97rem' }}>{t("date")}</TableCell>
                  <TableCell align="center" style={{ fontWeight: '600', fontSize: '0.97rem' }}>{t("time")}</TableCell>
                  <TableCell align="center" style={{ fontWeight: '600', fontSize: '0.97rem' }}>{t("reportedby")}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Construction</TableCell>
                  <TableCell align="center">Zone 1</TableCell>
                  <TableCell align="center">18/12/2022</TableCell>
                  <TableCell align="center">9:15</TableCell>
                  <TableCell align="center">Mark</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Electrical</TableCell>
                  <TableCell align="center">Zone 5</TableCell>
                  <TableCell align="center">18/10/2022</TableCell>
                  <TableCell align="center">12:15</TableCell>
                  <TableCell align="center">Simon</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Packaging</TableCell>
                  <TableCell align="center">Zone 2</TableCell>
                  <TableCell align="center">18/08/2022</TableCell>
                  <TableCell align="center">9:45</TableCell>
                  <TableCell align="center">Jack</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Cleaning</TableCell>
                  <TableCell align="center">Zone 10</TableCell>
                  <TableCell align="center">28/08/2022</TableCell>
                  <TableCell align="center">12:35</TableCell>
                  <TableCell align="center">Tim</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
     
    </div>

  );
}
function Card(props) {
  return (

    <div className='card'>
      <img src={props.img} className='card__img' />
      <div className='card__body'>
        <h2 className='card__title'>{props.title}</h2>
        <p className='card__description'>{props.description}</p>
      </div>
    </div>
  );
}
export default Dashboard;