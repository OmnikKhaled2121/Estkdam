import React, { useState } from 'react'
import OTPInput from 'react-otp-input';
import { Grid } from '@mui/material';

export default function SMSCode() {
    const [otp, setOtp] = useState('');

    return (
        <Grid item xs={12}
        sx={{
            display:"flex",
            alignContent:"center",
            justifyContent:"center"
        }}>
            <OTPInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span>-</span>}
                renderInput={(props) => <input {...props} />}
                inputStyle={
                    {
                        width: "60px",
                        height: "80px",
                        borderRadius: "8px",
                        border: "1.5px solid #B1ADAD",
                        color: "#616161",
                        fontFamily: "Almarai",
                        fontWeight: "800",
                        fontSize: "40px"
                    }
                }
            />
            </Grid>
    );
}
