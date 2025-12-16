import { useState } from 'react';
import './LoginPage.css'
import Button from '@mui/material/Button';
import { Alert, Backdrop, Box, Card, CardActions, CardContent, CircularProgress, FormControl, TextField, Tooltip } from '@mui/material';
import { onAuthStateChanged, sendPasswordResetEmail } from 'firebase/auth';
import { firebaseAuth, EMAIL_COND_REGEX } from '../../services/Firebase/FirebaseService';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LoginIcon from '@mui/icons-material/Login';
import packageJson from '../../../package.json';

function ForgotPage() {
  document.title = document.title = packageJson.title + ' ' + 'Login';

  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  
  const [open, setOpen] = useState(false);

  onAuthStateChanged(firebaseAuth, (user) => {
    if (user) {
      window.location.href = '/User/';
      //navigate("/user");
    } else {
      // User is signed out
      // ...
    }
  });

  const onKeyDown = (e: { key: string; }) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  const handleLogin = () => {
    setOpen(true);
    const able = checkEmail();
    if (able) {
      if (email) {
        setError("")
        checkLogInfo();
      }
    } else {
      setError("La contraseña o el email no tienen el formato correcto.")
      setOpen(false);
    }
  };


  const checkLogInfo = () => {
    sendPasswordResetEmail(firebaseAuth, email)
      .then(() => {
        setMessage("Enviado enlace de restauración de contraseña a " + email);
      }).catch((error) => {
        setError("ERROR al enviar enlace de restauración de contraseña:\n " + error.message)
      }).finally(() => {
        setOpen(false);
      });

  }

  const handleBack = () => {
    //navigate('/');
    window.location.href = '/Login';
  };

  function CustomAlert() {
    if (error.length > 0) {
      return <Alert severity="error" >{error}</Alert>;
    } else if (message.length > 0) {
      return <Alert severity="info" >{message}</Alert>;
    } else {
      return <p></p>;
    }

  }

  function checkEmail(): boolean {
    return EMAIL_COND_REGEX.test(email);
  }

  return (
    <Card id="logincard" sx={{ marginTop: 0.4, minWidth: 100, borderRadius: "40px" }}>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <CardContent>
        <h2>Recuperar contraseña</h2>
        <Box sx={{ minWidth: 99 }}>

          <FormControl component="form" sx={{ '& > :not(style)': { m: 0.4, width: '28ch' }, }}
            autoComplete="off"
          >
            <div>
              <TextField id="Email-basic" label="Username/Email" variant="standard" type="email" value={email} onChange={(e) => (setEmail(e.target.value))}
                onKeyDown={onKeyDown} />
            </div>

            <CustomAlert></CustomAlert>
            <CardActions className='button-section'>
              <Tooltip title="Volver">
                <Button variant="contained" onClick={handleBack} color="info" className='button-section-element' startIcon={<ArrowBackIcon />} />
              </Tooltip>
              <Tooltip title="Recuperar contraseña">
                <Button variant="contained" onClick={handleLogin} color="success" className='button-section-element' startIcon={<LoginIcon />} />
              </Tooltip>
            </CardActions>
          </FormControl>

        </Box>
      </CardContent>
    </Card>
  );
}

export default ForgotPage;

