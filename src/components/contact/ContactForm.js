import React, { useState } from 'react'
import { Paper, Typography, TextField, Button} from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'

export default function ContactForm(){

  const [contactInfo, setContactInfo] = useState({});
  const theme = useTheme();

  const handleFieldChange = (e) => {
      let tempInfo = contactInfo;
      tempInfo[e.target.name] = e.target.value;
      setContactInfo(tempInfo);
  }
  return (
    <div style={{padding: '1em 2em 4em 2em', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '1.5em', boxShadow: '8px 8px 19px #cccccc, -8px -8px 19px #ffffff'}}>
    <Typography component="h1" variant="h4" style={{marginTop: '0.5em', marginBottom:'1'}}>
      Contact Form
    </Typography>
    <form noValidate>
      <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Name"
              name="name"
              onChange={handleFieldChange}
          />
          <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  type="email"
                  label="Email"
                  name="email"
                  onChange={handleFieldChange}
              />
          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              multiline
              rows={4}
              name="content"
              label="Content"
              onChange={handleFieldChange}
          />

          <Button
              fullWidth
              variant="contained"
              color="primary"
              style={{marginTop: '1em'}}
          >
              Send
          </Button>


          </form>
      </div>
  )
}
