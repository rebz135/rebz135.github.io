import * as React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom'
import './assets/submit.css'
import './assets/bookings.css'
import './assets/Content/v102/assets/style/default-all.css'

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#31a2ac',
    color: theme.palette.common.white,
    fontSize: 18
  },
  body: {
    fontSize: 16,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

class Submit extends React.Component {
  constructor(props) {
    super(props)

    console.log(this.props)
    this.state = {
      offer: this.props.routerProps.location.state.offer
    }
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h4" noWrap>
              Upgrade Bid
          </Typography>
          </Toolbar>
        </AppBar>
        <div style={{ width: '80%', margin: 'auto' }}>
          <h1 style={{ fontSize: 36, color: '#31a2ac', marginTop: 100 }}>Upgrade your room</h1> <br />
          <p style={{ fontSize: 16, lineHeight: '19px' }}>
            Welcome to Upgrade Bid, where you have a chance to enjoy a superior room.
           <br /> <br />
            <ol>
              <li>1. Make your bid to upgrade your room then click Continue.</li>
              <li>2. We'll notify you via email if your request for an upgrade has been approved.</li>
            </ol> <br />
            If your offer is accepted, you'll be billed for the upgrade. If not, you pay nothing and keep the seat you have.</p>
          <br /><br /><br />
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <StyledTableCell>Reservation information</StyledTableCell>
                  <StyledTableCell>Upgrade type</StyledTableCell>
                  <StyledTableCell>Your offer</StyledTableCell>
                  <StyledTableCell>Offer strength</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell>
                    <ol>
                      <li>Check-in: 7th August 2019</li>
                      <li>Check-out: 9th August 2019</li>
                      <li>Hotel: Grand Millennium Beijing</li>
                      <li>Guests: 1 adult, 0 Children </li>
                    </ol>
                  </StyledTableCell>
                  <StyledTableCell>Upgrade to Superior Room</StyledTableCell>
                  <StyledTableCell>{this.state.offer} CNY</StyledTableCell>
                  <StyledTableCell>Moderate</StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
            <div style={{ flex: 1, flexDirection: 'row', display: 'flex', justifyContent: 'space-between', marginTop: 25, }}>
              <div style={{ paddingLeft: 20, paddingBottom: 50 }} className="flex-item">
                <h4 style={{
                  fontFamily: 'Museo Sans,Helvetica',
                  fontWeight: 500,
                  fontSize: '2rem',
                  textTransform: 'uppercase'
                }}> Superior room benefits </h4>
                <div><div className="x-mt-16"><div data-line="5" className="x-fs-16 x-ff-sm x-lh-24 book2-information x-short" data-text="<p> When you book direct, not only will you get the Best Rate, but also the best rewards, the best stay and the best room.</p> <br> <br> Book direct for the best stay with: <ul id='implist'> <li>Relax in luxury with an extra 68 Sqm/732 Sq Ft of space </li> <li>24/7 access to the club lounge </li> <li>Complimentary breakfast, afternoon tea and light evening refreshments </li> <li>Dedicated butler service to cater to your every needs</li> <li>Freshen up with our suite of luxury bath products from L’Occitane </li> <li>Be greeted with a welcome drink upon check-in on the club lounge </li> </ul> <br> Terms &amp;amp; Conditions: <p>Rates are exclusive of taxes and service charge. Full Pre-Payment Required and Credit Card used for payment must be presented at check-in. Non-refundable and no changes are allowed. Dining discount applied on F&amp;amp;B bill upon check out (guests must open an account on their room). All qualifying purchases must be charged to the room prior to check-out. Not available in conjunction with any other F&amp;amp;B promotion run locally.</p>"><br /><p>Upgrade now for the best stay with:</p><ul style={{ fontSize: 16 }} id="implist"><li>Relax in luxury with an extra 68 Sqm/732 Sq Ft of space </li><li>24/7 access to the club lounge </li><li>Complimentary breakfast, afternoon tea and light evening refreshments </li><li>Dedicated butler service to cater to your every needs</li><li>Freshen up with our suite of luxury bath products from L’Occitane </li><li>Be greeted with a welcome drink upon check-in on the club lounge </li></ul></div></div><div className="x-mt-13 x-pb-13"><span className="x-fs-14 x-di x-di-v-m x-ff-mm x-fc-azure x-default x-under" data-item="short-p">View Guarantee and Cancellation Policy</span><span className="x-fs-16 x-di x-di-v-m x-ml-06 x-fc-azure x-default icon-icon_B008" data-item="short"></span></div></div>
              </div>
              <div style={{ width: '40%' }} className="flex-item">
                <img style={{ height: 'auto', width: '100%' }} src={`https://media.millenniumhotels.com/mhb-media/8/6/E/86EC1666-F507-4BEE-95EB-165AD7A53384/superior1-compress.jpg?r=170805122013`} />
              </div></div>
            <hr />
            <div style={{ paddingLeft: 20, paddingRight: 20 }}>
              <div id="payment-container">
                <div className="payment-container-LP" style={{ display: "none" }}>


                  <div className="column-row">

                    <div className="twelve columns">
                      <div className="name-field three column">
                        <label for="loyalty-card-first-name">Given/first name</label>
                        <span id="loyalty-card-first-name" className="sub-small input-text get-focus first-name">REBECCA WING HAN</span>
                      </div>

                      <div className="name-field three column">
                        <label for="loyalty-card-last-name">Family/last name</label>
                        <span id="loyalty-card-last-name" className="sub-small input-text get-focus first-name">YIP</span>
                      </div>


                      <div className="name-field four column payment-item-LP payment-item-LPCC payment-item-no-CC form-group" style={{ display: "none" }}>
                        <label for="loyalty-email-address">Email address</label>
                        <input type="text" name="email-address" id="loyalty-email-address" className="small input-text get-focus loyalty-email-address" size="8" autocomplete="off" value="rebz135@gmail.com" title="Please enter a valid email address (same address used in your ticket purchase):" />
                      </div>


                    </div>
                  </div>

                  <div className="column-row">

                    <div className="twelve columns">
                      <div className="name-field three column">
                        <label for="loyalty-card-payment-type">Payment Type</label>
                        <span id="loyalty-card-payment-type" className="sub-small input-text get-focus first-name">
                          Loyalty Program
                            </span>
                      </div>

                      <div className="name-field three column">
                        <label for="loyalty-card-loyalty-number">
                          Loyalty number
                            </label>
                        <span id="loyalty-card-loyalty-number" className="sub-small input-text get-focus first-name">1015766098</span>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="payment-container-CC">


                  <div className="column-row">
                    <div className="fourteen columns">
                      <div className="name-field three column">
                        <label for="card-first-name">Given/first name</label>
                        <input type="text" id="card-first-name" name="card-first-name" className="sub-small input-text get-focus first-name" size="8" autocomplete="off" value="" validation="alphaname" placeholder="Given/first name" original-title="Please enter a valid name" />
                      </div>

                      <div className="name-field three  column">
                        <label for="card-last-name">Family/last name</label>
                        <input type="text" id="card-last-name" name="card-last-name" className="sub-small input-text get-focus last-name" size="8" autocomplete="off" value="" validation="alphaname" placeholder="Family/last name" original-title="Please enter a valid name" />
                      </div>




                      <div className="name-field four column payment-item-no-LP payment-item-no-LPCC payment-item-CC form-group">
                        <label for="email-address">Email address</label>


                        <input type="text" name="email-address" id="email-address" className="small input-text get-focus email-address" size="8" autocomplete="off" value="rebz135@gmail.com" title="Please enter a valid email address (same address used in your ticket purchase):" placeholder="Email address" />


                      </div>




                    </div>
                  </div>

                  <div className="column-row">
                    <div className="thirteen columns">
                      <div className="three column card-type-container">
                        <label for="card-type">Select card</label>
                        <select id="card-type" name="card-type" className="card-type-selection">
                          <option>Card type</option>

                          <option value="VI">Visa</option>

                          <option value="MC">MasterCard</option>

                          <option value="AX">American Express</option>

                          <option value="DC">Diners Club</option>

                          <option value="JB">JCB</option>

                        </select>
                      </div>

                      <div className="three column">
                        <div className="card-number-container">
                          <label for="card-number">Card number</label>
                          <input id="card-number" name="card-number" type="text" className="small input-text card-number" value="" autocomplete="off" validation="creditcard" validationdirection="s" cardtypename="card-type" placeholder="Card number" original-title="Please enter a valid credit card number" />
                        </div>
                      </div>


                      <div role="group" aria-labelledby="card-exp" className="card-exp three column">
                        <label id="card-exp">Expiry date</label>
                        <label className="sr-only" for="exp-month">MM</label>
                        <select aria-label="Expiration date invalid" name="exp-month" className="month" validation="expdate" validationdirection="s" original-title="Expiration date invalid">
                          <option>MM</option>
                          <option value="01">01</option>
                          <option value="02">02</option>
                          <option value="03">03</option>
                          <option value="04">04</option>
                          <option value="05">05</option>
                          <option value="06">06</option>
                          <option value="07">07</option>
                          <option value="08">08</option>
                          <option value="09">09</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                        </select>

                        <label className="sr-only" for="exp-year">
                          YY
                            </label>

                        <select aria-label="YY" className="year" name="exp-year" title="expiration year">
                          <option>YY</option>

                          <option value="2019">2019</option>

                          <option value="2020">2020</option>

                          <option value="2021">2021</option>

                          <option value="2022">2022</option>

                          <option value="2023">2023</option>

                          <option value="2024">2024</option>

                          <option value="2025">2025</option>

                          <option value="2026">2026</option>

                          <option value="2027">2027</option>

                          <option value="2028">2028</option>

                          <option value="2029">2029</option>

                          <option value="2030">2030</option>

                          <option value="2031">2031</option>

                          <option value="2032">2032</option>

                          <option value="2033">2033</option>

                          <option value="2034">2034</option>

                          <option value="2035">2035</option>

                          <option value="2036">2036</option>

                          <option value="2037">2037</option>

                          <option value="2038">2038</option>

                          <option value="2039">2039</option>

                        </select>

                      </div>

                      <div className="three column cvv-container">

                        <div className="card-cvv">
                          <span><label for="card-cvv">CVV</label></span>
                          <input type="password" id="card-cvv" name="card-cvv" className="mini input-text card-cvv" size="4" maxlength="4" autocomplete="off" value="" validation="numeric" placeholder="CVV" original-title="Please enter a valid security code" />
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div><div style={{ textAlign: 'right' }}>
                <Link to={'Confirm'}>
                  <Button variant="contained" size="large" color="primary" className="flex-item">
                    Confirm
            </Button>
                </Link></div>
            </div>

          </Paper>
        </div></div>
    )
  }
}

export default Submit
