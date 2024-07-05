import { Box, Button, Card, CardContent, TextField, Typography } from "@mui/material";
import { FormEvent, useState } from "react";
import {User} from './assets/typings';
import { useNavigate } from "react-router-dom";

function App() {

  const navigate = useNavigate();

  const [name, setName] = useState<string>('');
  const [phoneNum, setPhoneNum] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [isEmpty, setIsEmpty] = useState<boolean>(false);

  const handleClick = (e:FormEvent) => {
    e.preventDefault();
    if(name == '' || phoneNum == '' || email == '') {
      setIsEmpty(true);
    } else {
      const userData: User = {
        id: new Date().toJSON().toString(),
        name: name,
        phoneNumber: phoneNum,
        email: email,
      };
  
      localStorage.setItem('user', JSON.stringify(userData));
      setName('');
      setPhoneNum('');
      setEmail('');
      setIsEmpty(false);
      navigate('/second-page');
    }
  }

  return (
    <div>
      <Card 
      variant="outlined" 
      sx={{maxWidth: 500, margin: 'auto', mt: 5}}>
        <CardContent>
          <Typography variant="h5" sx={{textAlign: "center", mb: 2, mt: 2}}>Enter below details to proceed...</Typography>
          <Box component='form' sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <TextField fullWidth sx={{m:1}} label='Name' type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
            <TextField fullWidth sx={{m:1}} label='Phone number' type="tel" value={phoneNum} onChange={(e) => setPhoneNum(e.target.value)} required/>
            <TextField fullWidth sx={{m:1}} label='Email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            {isEmpty ? <span style={{color: 'red'}}>All fields are required</span> : ''}
            <Button variant="contained" type='submit' onClick={handleClick} sx={{width: 100, mt: 1}}>Submit</Button>
          </Box>
        </CardContent>
      </Card>
    </div>
  )
}

export default App
