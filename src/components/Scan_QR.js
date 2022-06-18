import React, { useState , useRef} from 'react';
import './index.css';
import './Dashboard.css';
import './Attendence.css';
import { Container, Card, CardContent, Grid, TextField, Button } from '@material-ui/core';
import QRCode from 'qrcode';
import {QrReader} from 'react-qr-reader';


const Attendence = () => {
    const [scanResultFile, setScanResultFile] = useState('');
    // const [scanResultWeb, setScanResultWeb ]= useState('');
    const qrRef = useRef(null);
  

    const handleErrorFile = (error) => {
        console.log(error);
    }

    const handleScanFile = (result) => {
        if (result) {
            setScanResultFile(result);
        }
    }
    // const handleErrorWeb = (error) => {
    //     console.log(error);
    // }
    //  const handleScanWeb = (result) => {
    //     if (result) {
    //         (result);
    //     }
    // }

    const onScanFile = () => {
        qrRef.current.openImageDialog();
    }
    return (
        <Container className='container-at '>
            <Card>
                <h2 className='title-at'>Scan QR Code</h2>
                <CardContent >
                    <Grid Container spacing={2} className="flex" >
                        
                        <Grid item xl={4} lg={4} md={6} sm={12} xs={12} >
                        <Button style={{ marginTop: "10px", marginBottom: "20px", marginLeft: "15px" , backgroundColor: 'rgb(106, 133, 253)'}}
                             variant="contained" color="primary" onClick={onScanFile}>Scan QR Code</Button>
                             
                             <QrReader
                           
                                // ref={qrRef}
                                delay={300}
                                style={{width:'100%'}}
                                onError={handleErrorFile}
                                onScan={handleScanFile}
                                
                            />
                             
                           
                            <h3>Scanned Code : {scanResultFile}</h3>
                        </Grid>
                         
                      
                    </Grid>
                </CardContent>
            </Card>
        </Container>
    );
}


export default Attendence;