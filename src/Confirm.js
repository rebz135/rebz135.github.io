import * as React from 'react'
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

class Confirm extends React.Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h4" noWrap>
              Upbid
          </Typography>
          </Toolbar>
        </AppBar>
        <div style={{ width: '80%', margin: 'auto' }}>
          <h1 style={{ fontSize: 36, color: '#31a2ac', marginTop: 100 }}>Bid Submission Confirmation</h1> <br />
          <p style={{ fontSize: 16, lineHeight: '19px' }}>
            Your bid submission has been received! If successful, you will receive a confirmation email 2 days before check-in date. We look forward to your stay.
          </p>
        </div>
      </div>
    )
  }
}

export default Confirm
