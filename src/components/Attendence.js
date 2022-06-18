import React, { useState , useRef} from 'react';
import './index.css';
import './Dashboard.css';
import './Attendence.css';
import { Container, Card, CardContent, Grid, TextField, Button } from '@material-ui/core';
import QRCode from 'qrcode';
import {QrReader} from 'react-qr-reader';


const Attendence = () => {
    const [text, setText] = useState('');
    const [imageUrl, setImageUrl] = useState(' ');
    const qrRef = useRef(null);
    const generateQrCode = async () => {
        try {
            const response = await QRCode.toDataURL(text);
            setImageUrl(response);
        } catch (error) {
            console.log(error);
        }
    }

   

    const onScanFile = () => {
        qrRef.current.openImageDialog();
    }
    return (
        <Container className='container-at '>
            <Card>
                <h2 className='title-at'>Generate QR Code</h2>
                <CardContent >
                    <Grid Container spacing={2} className="flex" >
                        <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                            <TextField label="Enter Id Number" onChange={(e) => setText(e.target.value)} />
                            <Button style={{ marginTop: "10px", marginBottom: "20px", marginLeft: "15px", backgroundColor: 'rgb(106, 133, 253)' }}
                                variant="contained" color="primary" onClick={() => generateQrCode()}>Generate</Button>
                            <br />
                            <br />
                            <br />
                            {imageUrl ? (
                                <a href={imageUrl} download>
                                    <img src={imageUrl} alt="" />
                                </a>) : null}

                        </Grid>
                       
                    </Grid>
                </CardContent>
            </Card>
        </Container>
    );
}


export default Attendence;