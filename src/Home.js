import * as React from 'react'
import Slider from '@material-ui/core/Slider';
import {withStyles} from '@material-ui/core/styles'
import {Link} from 'react-router-dom'

const MySlider = withStyles({
  root: {
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus,&:hover,&$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
    fontSize: 12
  },
  track: {
    height: 10,
    borderRadius: 5,
    marginRight: -50,
    width: '105%'
  },
  rail: {
    height: 10,
    borderRadius: 5,
    width: '105%'
  },
  markLabel: {
    fontSize: 14,
    paddingTop: 10
  }
})(Slider);

class Home extends React.Component {
  state = {
    offer: 80
  }
  render() {
    return (
      <body lang="en" data-isipad="false" data-mobile="false" data-scrolltop="0" data-loggedin="false" data-page="">
  <div className="global-wrapper uspbar-wrapper nav-always-docked">
    <div data-component="notification-mobile" style={{ zIndex: 10000, display: 'none'}} className="mobile collect-tips">
    <p></p>
    <span className="icon-icon_B017 wgt-close close"></span>
  </div>
  <div className="popupRegion popup-hide"></div>
  <div className="PromoHotelPopup"></div>
  <div className="PromoPopup"></div>
  <div className="main-wrapper">
    <div data-component="navbar" class="hide-nav navbar">
      <span class="overlay"></span>
      <div class="user-module-mobile-wrapper">
        <div class="user-module-mobile expand-off">
          <div class="nav clearfix hide">
            <div class="toggle-switch-btn">
              <span class="icon-icon_B023 show"></span>
              <span class="icon-icon_B024 hide"></span>
            </div>
            <div>
              <div class="logged-out show-user">
                <span class="logged-out-wrapper" dir="ltr">
                <span id="opt-login" class="icon-icon_K006"></span>
                <span class="chervon-icon icon-icon_chervonUp"></span>
                <span class="chervon-icon icon-icon_chervonDown"></span>
                </span>
              </div>
            </div>
          </div>
          <div class="notification-content"></div>
        </div>
      </div>
      <div class="menu-wrapper">
        <a href="/">
          <div class="logo">
            <span class="icon-icon_A001"></span>
          </div>
        </a>
        <div class="menu-inner" >
          <ul class="menu clearfix">
            <li class="item item-hotel">
              <a href="/en/hotels/" class="item-link " target="">
              <span>Hotels</span>
              </a>
            </li>
            <li class="item item-offer">
              <a href="/en/offers/" class="item-link " target="">
              <span>Offers</span>
              </a>
            </li>
            <li class="item item-meetting">
              <a href="/en/meetings-events/" class="item-link " target="">
              <span>Venues</span>
              </a>
            </li>
            <li class="item item-m4b">
              <a href="/en/business/" class="item-link " target="_blank">
              <span>For Business</span>
              </a>
            </li>
            <li class="item item-mymillennium">
              <a href="/en/programmes/my-millennium/" class="item-link " target="">
              <span>My Millennium</span>
              </a>
            </li>
          </ul>
        </div>
        <div data-component="user" class="user-module-desktop">
          <div class="user-module-wrapper expand-off">
            <div>
              <div class="user-module">
                <div class="user-others">
                  <div>
                    <div data-view="currency" class="currency user-cl">
                      <svg class="currency-icon" width="24px" height="25px" style={{verticalAlign: "middle"}}>
                        <use xlink="#USD"></use>
                      </svg>
                      <span class="cl-text" dir="ltr"><span>USD</span><span class="chervon-icon icon-icon_chervonUp"></span><span class="chervon-icon icon-icon_chervonDown"></span></span>
                    </div>
                    <div data-view="language" class="language user-cl">
                      <span class="icon-icon_A002 language-icon"></span>
                      <span class="cl-text" dir="ltr"><span>en</span><span class="chervon-icon icon-icon_chervonUp"></span><span class="chervon-icon icon-icon_chervonDown"></span></span>
                    </div>
                    <div class="cl-container">
                      <span data-icon="cl-icon" class="icon-icon_B017 cl-icon"></span>
                    </div>
                  </div>
                </div>
                <div class="collect-tips">
                  <p></p>
                </div>
                <div class="nav">
                  <div class="content">
                    <div class="content-login"></div>
                    <div class="login-input">
                      <p style={{position: "relative"}} class="signin_title">
                        Sign in
                        <span class="icon-icon_B017 login-close-btn"></span>
                      </p>
                      <div class="signin-with-others">
                        <div class="sigin-facebook">
                          <a class="wgt-sqbutton-facebook" href="/mapi/account/login/facebook">
                          <span class="icon-icon_B028"></span><span>Sign in with Facebook</span>
                          </a>
                          <p>Sign in with Facebook Failed</p>
                        </div>
                        <div class="sigin-google">
                          <a class="wgt-sqbutton-google" href="/mapi/account/login/google-plus">
                          <span class="icon-icon_B048"></span><span>Sign in with Google</span>
                          </a>
                          <p>Sign in with Google Failed</p>
                        </div>
                        <div class="sigin-linkedin">
                          <a class="wgt-sqbutton-linkedin" href="/mapi/account/login/linkedin">
                          <span class="icon-icon_B034"></span><span>Sign in with LinkedIn</span>
                          </a>
                          <p>Sign in with LinkedIn Failed</p>
                        </div>
                      </div>
                      <b>Or</b>
                      <div class="form has-error login-form">
                        <form id="login_form" method="POST" action="">
                          <div class="field input-border-newlook">
                            <div class="input-box">
                              <input id="login_username" name="username" type="text" data-bind="email" placeholder="Email Address" maxlength="254"/>
                            </div>
                            <span class="error-tip null"> Please tell us your email address </span>
                            <span class="error-tip not-null"> This is not a valid email address </span>
                          </div>
                          <div class="field input-border-newlook">
                            <div class="input-box">
                              <input id="login_password" name="password" data-bind="password" placeholder="Password" type="password"/>
                            </div>
                            <span class="error-tip null"> Please enter your password</span>
                            <span class="error-tip not-null"> Your password must contain at least one number and letter</span>
                          </div>
                          <div class="field input-border-newlook">
                            <div class="input-box">
                              <input name="captcha" data-bind="captcha" placeholder="Type the characters in the image" type="text" autocomplete="off"/>
                            </div>
                            <span class="error-tip null"> *Required field/s</span>
                            <span class="error-tip not-null"> *Required field/s</span>
                          </div>
                          <div class="code-bottom">
                            <img src="https://www.millenniumhotels.com/api/captcha/image?r=0.05870614710506694" alt="" class="captcha-img" data-item="img"/>
                            <div class="captcha-icons">
                              <div class="captcha-icon captcha-click" data-feedback="img">
                                <span class="voice-icon icon-icon_B078"></span>
                                <span>New Code</span>
                              </div>
                              <div class="captcha-icon captcha-voice" data-feedback="voice">
                                <span class="voice-icon icon-icon_K009"></span>
                                <span>Vision Impaired</span>
                              </div>
                            </div>
                          </div>
                        </form>
                        <div class="field field-newlook">
                          <section class="checkbox-container">
                            <i class="checkbox" data-bind="remember_me"></i>
                            <span>Remember me</span>
                          </section>
                          <a class="forget-pssd" href="https://www.millenniumhotels.com/en/my-millennium/forgot-password">Forgot password?</a>
                          <p class="error-msg"></p>
                        </div>
                        <a class="wgt-sqbutton-black signin" id="opt-sign-in">Sign In</a>
                      </div>
                    </div>
                    <div class="login-without-pm">
                      <p class="pm-moble">Not a Member yet? Register in 2 minutes to get discounts right away.</p>
                      <div class="pm-pc">
                        <p>
                          Not a Member yet? <a class="pc-a" id="opt-sign-up" href="https://www.millenniumhotels.com/en/my-millennium/sign-up#callbackurl=/en/bookings/?hotelcode=13591&amp;checkin=2019-12-05&amp;checkout=2019-12-09&amp;discountcode=&amp;groupcode=&amp;promocode=&amp;adults=1&amp;children=0&amp;rooms=1&amp;AAA=false&amp;AARP=false&amp;GOV=false&amp;Accessible=false&amp;viewrates=Rooms">Register Now</a> and get special member rates right away.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="logged-out show-user">
                    <span class="logged-out-wrapper" dir="ltr">
                    <span id="opt-login" class="icon-icon_K006"></span>
                    <span class="chervon-icon icon-icon_chervonUp"></span>
                    <span class="chervon-icon icon-icon_chervonDown"></span>
                    </span>
                  </div>
                  <div class="shopping-cart-wrapper"><a id="shopping-cart" class="smart" href="javascript:void(0);">
                    <span class="icon-icon_A011 cart-icon"> <i class="smart-num" id="num" data-num="0">0</i></span>
                    <span class="tooltip show" style={{display: "none"}}>Your shopping bag is currently empty</span>
                    </a>
                  </div>
                </div>
              </div>
              <a class="wgt-sqbutton-golden availability" style={{display: "none"}}>BOOK NOW<span class="close-icon icon-icon_B017"></span></a>
              <div class="search"><span class="search-icon icon-icon_D001"></span><span class="search-text">Search</span></div>
              <div class="notification-content"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="uspbar-banner-wrapper">
      <div class="tpl-static-banner">
        <div class="banner-container">
          <ul>
            <li>
              <div class="banner-item-wrapper">
                <div class="banner-icon"><span class="icon-icon_P005"></span></div>
                <div class="banner-text">SPECIAL MEMBER RATES</div>
              </div>
            </li>
            <li>
              <div class="banner-item-wrapper">
                <div class="banner-icon"><span class="icon-icon_P004"></span></div>
                <div class="banner-text">BOOK DIRECT HERE FOR FREE WIFI</div>
              </div>
            </li>
            <li>
              <div class="banner-item-wrapper">
                <div class="banner-icon"><span class="icon-icon_P003"></span></div>
                <div class="banner-text">EARN LOYALTY POINTS</div>
              </div>
            </li>
            <li>
              <div class="banner-item-wrapper">
                <div class="banner-icon"><span class="icon-icon_P006"></span></div>
                <div class="banner-text">EXCLUSIVE ONLINE OFFERS</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div data-component="top-search" class="top-search-wrapper">
      <div class="top-search">
        <span class="error-tip-wrapper"><span class="error-tip">Sorry, no hotels matched your request. Please try again or click <a href="/en/hotels">here</a> to view all of our hotels.</span></span>
        <span class="icon-icon_A001 logo"></span>
        <span class="top-search-icon icon-icon_D001"></span>
        <input maxlength="255" type="text" class="search-input" placeholder="Where do you want to go?"/>
        <span class="close-search icon-icon_B017"></span>
        <div class="results-slide">
          <div class="results-region"></div>
        </div>
      </div>
    </div>
  <div className="book2-wrapper">
    <div>
      <div className="book2-section">
        <div>
          <div className="book2-caption">
            <div>
              <div className="book2-caption-section x-img x-img-mask" style={{backgroundImage: `url('https://media.millenniumhotels.com/mhb-media/9/E/9/9E9FEF8D-0FEA-4F21-8487-AC4C76A9925A/millenium-beijing-hero-compress.jpg?r=170805121951')`}}>
              <div className="book2-caption-content x-db x-db-v-m x-pl-36 x-fc-white">
                <div className="x-fs-00">
                  <h1 className="x-fs-28 x-fw-bold">Grand Millennium Beijing</h1>
                </div>
                <div className="x-fs-00 x-mt-08">
                  <span className="x-fs-20 x-di icon-icon_E011"></span>
                  <span className="x-fs-16 x-di x-ml-06 x-ff-mm x-shadow">9 Out Of 10 Stars</span>
                  <a className="x-link x-di x-ml-06 x-shadow x-fs-14 x-ff-sm x-under x-pointer" href="/en/tripadvisor?HotelCode=BEIGML01" target="_blank">
                  1,924 Reviews
                  </a>
                </div>
                <div className="x-fs-00 x-mt-08">
                  <div className="x-pb-05">
                    <span className="x-fs-16 x-di x-di-v-m icon-icon_F0272"></span>
                    <span className="x-fs-15 x-di x-di-v-m x-ff-mm x-ml-06">No.7 Dongsanhuan Middle Road, Chaoyang District, Beijing, China 100020</span>
                  </div>
                  <div className="x-pb-05">
                    <span className="x-fs-16 x-di x-di-v-m icon-icon_H002"></span>
                    <span className="x-fs-15 x-di x-di-v-m x-ff-mm x-ml-06">+86 10 8587 6888</span>
                  </div>
                  <div className="x-pb-05">
                    <span className="x-fs-16 x-di x-di-v-m icon-icon_H003"></span>
                    <span className="x-fs-15 x-di x-di-v-m x-ff-mm x-ml-06">sales@grandmillenniumbeijing.com</span>
                  </div>
                </div>
                <div className="x-fs-00 x-mt-36">
                  <div className="book2-testimonial x-fs-15 x-ff-mm"><em>"Amazing place to stay in Beijing"</em><span>- Leticia B</span>, 29/Aug/2018</div>
                </div>
                <div className="x-fs-00 x-mt-08">
                  <a className="x-link x-fs-14 x-btn x-btn-white" href="/en/beijing/grand-millennium-beijing/">VISIT HOTEL</a>
                  <span className="x-ml-13"></span>
                  <a className="x-link x-fs-14 x-btn x-btn-white" href="/en/bookings?city=beijing">Hotels in Beijing</a>
                </div>
              </div>
              <div className="book2-viewgallery x-fs-00 x-fc-white">
                <span className="x-fs-20 x-di x-di-v-m x-pointer icon-icon_A004" data-item="look"></span>
                <span className="x-fs-16 x-di x-di-v-m x-pointer x-ff-mm x-ml-08" data-item="look">View Gallery</span>
              </div>
            </div>
          </div>
        </div>
        <div className="book2-toolbar">
          <div className="">
            <div className="book2-toolbar-section x-level x-level-0">
              <div className="x-flt-l x-fs-00 x-mt-26 x-pl-36">
                <span className="x-di x-di-v-m x-fs-14 x-upper">View By:</span>
                <button className="x-ff-sm x-di x-di-v-m x-fs-14 x-btn x-btn-black x-default x-none checked x-upper x-ml-08">Rooms</button>
                <button className="x-ff-sm x-di x-di-v-m x-fs-14 x-btn x-btn-black x-pointer x-none x-upper x-btn-br-none" data-item="rate">Rates</button>
                <button className="x-ff-sm x-di x-di-v-m x-fs-14 x-btn x-btn-black x-pointer x-none x-upper" data-item="all">All</button>
              </div>
            </div>
          </div>
        </div>
        <div className="book2-content">
          <div className="book2-content-section">
            <div>
              <div className="x-mt-13" data-id="3ed88856-61d3-4ac4-8305-bd5b1f0ba266"></div>
              <div className="x-bc-white x-fs-00">
                <div className="x-highlight holds">
                  <div data-region="room">
                    <div>
                      <div className="book2-child-block x-highlight-tlr">
                        <div className="book2-child-image x-fs-00 x-img x-img-top x-highlight-tl" style={{backgroundImage: `url('https://media.millenniumhotels.com/mhb-media/8/6/E/86EC1666-F507-4BEE-95EB-165AD7A53384/superior1-compress.jpg?r=170805122013')`}}>
                        <div className="book2-viewgallery shrink x-highlight-l">
                          <span className="x-fs-16 x-di x-di-v-m x-fc-white x-pointer icon-icon_A004" data-item="look"></span>
                          <span className="x-fs-14 x-di x-di-v-m x-fc-white x-pointer x-ml-06" data-item="look">Quick Look</span>
                        </div>
                      </div>
                      <div className="book2-child-theme x-fs-00 x-nowrap">
                        <div className="panel-1 x-di x-di-v-t x-normal">
                          <div>
                            <h2 className="x-fs-24 x-di x-di-v-m x-lh-12 x-ff-wb">Superior</h2>
                            <span className="x-fs-18 x-di x-di-v-m x-ml-08 x-separator"></span>
                            <span className="x-fs-18 x-di x-di-v-m x-ml-04"></span>
                            <span className="x-fs-18 x-di x-di-v-m x-ml-04 x-default x-popup icon-icon_P004" data-item="popup">
                              <div className="x-popup-wrap x-fs-00">
                                <div className="x-popup-body x-fs-16 x-ff-sm x-nowrap" style={{padding: '6px 10px'}}>Wi-Fi
                              </div>
                          </div>
                          </span>
                          <span className="x-fs-18 x-di x-di-v-m x-ml-04 x-default x-popup icon-icon_R002" data-item="popup">
                            <div className="x-popup-wrap x-fs-00">
                              <div className="x-popup-body x-fs-16 x-ff-sm x-nowrap" style={{padding: '6px 10px'}}>Coffee and Tea-making Facilities
                            </div>
                        </div>
                        </span>
                        <span className="x-fs-18 x-di x-di-v-m x-ml-04 x-default x-popup icon-icon_G008" data-item="popup">
                          <div className="x-popup-wrap x-fs-00">
                            <div className="x-popup-body x-fs-16 x-ff-sm x-nowrap" style={{padding: '6px 10px'}}>In-Room Safe
                          </div>
                      </div>
                      </span>
                    </div>
                    <div className="x-mt-08">
                      <span className="x-fs-16 x-di x-di-v-m x-ff-sm x-fc-black x-normal">Sophisticated simplicity designed to help you forget the day’s worries</span>
                    </div>
                    <div className="x-mt-08">
                      <div className="x-di x-di-v-t">
                        <div className="x-nowrap x-fc-azure">
                          <span className="x-fs-16 x-di x-di-v-m icon-icon_I001"></span>
                          <span className="x-fs-16 x-di x-di-v-m x-ff-wm x-ml-06 x-under">King</span>
                        </div>
                        <div className="book2-updated-tip x-fs-12 x-mt-08 x-fc-green x-al-c" data-bed-type="King">
                          <span className="x-fs-16 x-di x-di-v-m icon-icon_I009"></span> Updated!
                        </div>
                      </div>
                      <div className="x-di x-di-v-t x-ml-08"></div>
                      <div className="x-di x-di-v-t">
                        <div className="x-nowrap x-fc-black x-pointer" data-bed-type="Twin" data-item="beds">
                          <span className="x-fs-16 x-di x-di-v-m icon-icon_I006"></span>
                          <span className="x-fs-16 x-di x-di-v-m x-ff-sm x-ml-06 x-under">Twin</span>
                        </div>
                        <div className="book2-updated-tip x-fs-12 x-mt-08 x-fc-green x-al-c" data-bed-type="Twin">
                          <span className="x-fs-16 x-di x-di-v-m icon-icon_I009"></span> Updated!
                        </div>
                      </div>
                      <div className="x-di x-di-v-t x-ml-08"></div>
                    </div>
                  </div>
                  <div className="panel-2 x-di x-di-v-t x-normal">
                    <div className="x-mt-08"></div>
                    <div className="x-fs-00" style={{textAlign: 'center', width: 300, float: 'right'}}>
                      <span className="x-fs-24 x-ff-wb x-upper x-di x-di-v-m" style={{textAlign: 'center'}}>CNY {this.state.offer} </span>
                    </div>
                    <div style={{paddingRight: 15, fontSize: 21}}>
                    <MySlider 
                    min={0}
                    max={159}
                    value={this.state.offer}
                    onChange={(ev, offer) => this.setState({offer})}
                    marks={[{value: 0, label: 'No offer'}, { value: 159, label: '$159'}]}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="off"
                    style={{maxWidth: 300, marginTop: 15}}
                    valueLabelFormat={(val) => '$' + val}
                    />
                  </div>
                  <div className="x-fs-16 x-ff-m7 x-upper x-mt-08">PER ROOM PER NIGHT STARTING BID</div>
                  <div style={{maxHeight: 38}}>
                  <div className="x-mt-20 ">
                    <Link to={{pathname: '/Submit', state: {offer: this.state.offer}} } >
                      <button type="button" data-pmg="PMG5_Null" className="x-fs-14 x-ff-mh x-btn x-btn-azure" data-item="book">BID NOW</button>
                      </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="x-pt-20 x-highlight-lr">
            <div className="x-ml-20 x-mr-20">
              <div className="x-pt-13 x-pb-13" style={{position: 'relative', zIndex: 1, width: `calc(100% - 285px)`}}>
              <div className="x-flex">
                <span className="x-cell x-al-l x-ff-mh x-fs-20 x-upper">Benefits of Upgrading</span>
                <span className="x-cell x-al-r x-ff-sm x-fs-18">
                </span>
              </div>
            </div>
            <div className="book2-short-block x-top-line">
              <div className="x-level">
                <div>
                  <div className="x-mt-16">
                    <div data-line="5" className="x-fs-16 x-ff-sm x-lh-24 book2-information x-short" data-text="<p> When you book direct, not only will you get the Best Rate, but also the best rewards, the best stay and the best room.</p>
                      <br>
                      <br>
                      Book direct for the best stay with:
                      <ul>
                      <li>Relax in luxury with an extra 68 Sqm/732 Sq Ft of space </li>
                      <li>24/7 access to the club lounge </li>
                      <li>Complimentary breakfast, afternoon tea and light evening refreshments </li>
                      <li>Dedicated butler service to cater to your every needs</li>
                      <li>Freshen up with our suite of luxury bath products from L’Occitane </li>
                      <li>Be greeted with a welcome drink upon check-in on the club lounge </li>
                      </ul>
                      <br>
                      Terms &amp;amp; Conditions:
                      <p>Rates are exclusive of taxes and service charge. Full Pre-Payment Required and Credit Card used for payment must be presented at check-in. Non-refundable and no changes are allowed. Dining discount applied on F&amp;amp;B bill upon check out (guests must open an account on their room). All qualifying purchases must be charged to the room prior to check-out. Not available in conjunction with any other F&amp;amp;B promotion run locally.</p>">
                      Upgrade now for the best stay with:
                      <ul>
                        <li>Relax in luxury with an extra 68 Sqm/732 Sq Ft of space </li>
                        <li>24/7 access to the club lounge </li>
                        <li>Complimentary breakfast, afternoon tea and light evening refreshments </li>
                        <li>Dedicated butler service to cater to your every needs</li>
                        <li>Freshen up with our suite of luxury bath products from L’Occitane </li>
                        <li>Be greeted with a welcome drink upon check-in on the club lounge </li>
                      </ul>
                    </div>
                  </div>
                  <div className="x-mt-13 x-pb-13">
                    <span className="x-fs-14 x-di x-di-v-m x-ff-mm x-fc-azure x-default x-under" data-item="short-p">View Guarantee and Cancellation Policy</span>
                    <span className="x-fs-16 x-di x-di-v-m x-ml-06 x-fc-azure x-default icon-icon_B008" data-item="short"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div data-region="stay">
      <div className="x-highlight-lrb">
        <div>
          <div className="book2-stay-container" data-item="child" style={{display: 'block'}}>
          <div></div>
        </div>
      </div>
      <div className="x-pt-17 x-pb-20 x-top-line x-ml-20 x-mr-20 x-al-c x-highlight-b x-pointer" data-item="change">
        <div className="x-fs-16 x-ff-m7 x-ml-20 x-fc-azure x-delta right">View all available rates for this room</div>
      </div>
    </div>
  </div>
  </div>
  <div data-region="rate"></div>
  </div>
  </div>
  <div>
    <div className="x-mt-13 x-ff-00 x-pl-20 x-pr-20 x-pt-13 x-pb-13 x-flex x-bc-green" style={{display: 'none'}} data-item="sales">
    <div className="x-cell x-al-l">
      <span className="x-fs-14 x-fc-white x-di x-di-v-m">Congratulations! You are only a few steps away from enjoying this great deal!</span>
    </div>
    <div className="x-cell x-al-r">
      <span className="x-fs-24 x-fc-white x-di x-di-v-m x-pointer icon-icon_B017" data-item="close"></span>
    </div>
  </div>
  <div className="x-mt-13" data-id="da3e781a-b0d1-420a-a74b-d5469e41f4e0"></div>
  <div className="x-bc-white x-fs-00">
    <div className="x-highlight">
      <div data-region="room">
        <div>
          <div className="book2-child-block x-highlight-all">
            <div className="book2-child-image x-fs-00 x-img x-img-top x-highlight-tlb x-pointer" data-item="hand" style={{backgroundImage: `url('https://media.millenniumhotels.com/mhb-media/C/3/3/C33BE79B-A51A-4EA7-B296-D744DC5A0544/GMB_Deluxe King.jpg?r=170805122016&amp;w=340&amp;hash=4E4F4880EDB0B64F0F82CE17F3CCFA43')`}}>
            <div className="book2-viewgallery shrink x-highlight-lb">
              <span className="x-fs-16 x-di x-di-v-m x-fc-white x-pointer icon-icon_A004" data-item="look"></span>
              <span className="x-fs-14 x-di x-di-v-m x-fc-white x-pointer x-ml-06" data-item="look">Quick Look</span>
            </div>
          </div>
          <div className="book2-child-theme x-fs-00 x-nowrap">
            <div className="panel-1 x-di x-di-v-t x-normal">
              <div>
                <h2 className="x-fs-24 x-di x-di-v-m x-lh-12 x-ff-wb x-pointer" data-item="hand">Deluxe</h2>
                <span className="x-fs-18 x-di x-di-v-m x-ml-08 x-separator"></span>
                <span className="x-fs-18 x-di x-di-v-m x-ml-04"></span>
                <span className="x-fs-18 x-di x-di-v-m x-ml-04 x-default x-popup icon-icon_P004" data-item="popup">
                  <div className="x-popup-wrap x-fs-00">
                    <div className="x-popup-body x-fs-16 x-ff-sm x-nowrap" style={{padding: '6px 10px'}}>Wi-Fi
                  </div>
              </div>
              </span>
              <span className="x-fs-18 x-di x-di-v-m x-ml-04 x-default x-popup icon-icon_R002" data-item="popup">
                <div className="x-popup-wrap x-fs-00">
                  <div className="x-popup-body x-fs-16 x-ff-sm x-nowrap" style={{padding: '6px 10px'}}>Coffee and Tea-making Facilities
                </div>
            </div>
            </span>
            <span className="x-fs-18 x-di x-di-v-m x-ml-04 x-default x-popup icon-icon_G008" data-item="popup">
              <div className="x-popup-wrap x-fs-00">
                <div className="x-popup-body x-fs-16 x-ff-sm x-nowrap" style={{padding: '6px 10px'}}>In-Room Safe
              </div>
          </div>
          </span>
        </div>
        <div className="x-mt-08">
          <span className="x-fs-12 x-ff-mh x-lh-24 x-pl-08 x-pr-08 x-di x-di-v-t x-upper x-nowrap x-bc-peach x-fc-white">In high demand</span>
        </div>
        <div className="x-mt-08">
          <span className="x-fs-16 x-di x-di-v-m x-ff-sm x-fc-black x-normal">A contemporary city escape</span>
        </div>
        <div className="x-mt-08">
          <div className="x-di x-di-v-t">
            <div className="x-nowrap x-fc-black x-pointer" data-bed-type="King" data-item="beds">
              <span className="x-fs-16 x-di x-di-v-m icon-icon_I001"></span>
              <span className="x-fs-16 x-di x-di-v-m x-ff-sm x-ml-06 x-under">King</span>
            </div>
            <div className="book2-updated-tip x-fs-12 x-mt-08 x-fc-green x-al-c" data-bed-type="King">
              <span className="x-fs-16 x-di x-di-v-m icon-icon_I009"></span> Updated!
            </div>
          </div>
          <div className="x-di x-di-v-t x-ml-08"></div>
          <div className="x-di x-di-v-t">
            <div className="x-nowrap x-fc-black x-pointer" data-bed-type="Twin" data-item="beds">
              <span className="x-fs-16 x-di x-di-v-m icon-icon_I006"></span>
              <span className="x-fs-16 x-di x-di-v-m x-ff-sm x-ml-06 x-under">Twin</span>
            </div>
            <div className="book2-updated-tip x-fs-12 x-mt-08 x-fc-green x-al-c" data-bed-type="Twin">
              <span className="x-fs-16 x-di x-di-v-m icon-icon_I009"></span> Updated!
            </div>
          </div>
          <div className="x-di x-di-v-t x-ml-08"></div>
        </div>
      </div>
      <div className="panel-2 x-di x-di-v-t x-normal">
        <div className="x-mt-08"></div>
        <div className="x-fs-00">
          <span className="x-fs-24 x-ff-wb x-upper x-di x-di-v-m">CNY 171.50</span>
        </div>
        <div className="x-fs-16 x-ff-m7 x-upper x-mt-08">PER ROOM PER NIGHT STARTING BID</div>
        <div style={{maxHeight: 38}}>
        <div className="x-mt-20">
          <span className="x-fs-15 x-di x-di-v-m x-ff-mh x-fc-azure x-upper x-default">select this room</span>
          <span className="x-fs-32 x-di x-di-v-m x-radio x-fc-azure x-ml-08 x-pointer" data-item="hand"></span>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
  </div>
  <div data-region="stay"></div>
  </div>
  <div data-region="rate"></div>
  </div>
  </div>
  <div>
    <div className="x-mt-13 x-ff-00 x-pl-20 x-pr-20 x-pt-13 x-pb-13 x-flex x-bc-green" style={{display: 'none'}} data-item="sales">
    <div className="x-cell x-al-l">
      <span className="x-fs-14 x-fc-white x-di x-di-v-m">Congratulations! You are only a few steps away from enjoying this great deal!</span>
    </div>
    <div className="x-cell x-al-r">
      <span className="x-fs-24 x-fc-white x-di x-di-v-m x-pointer icon-icon_B017" data-item="close"></span>
    </div>
  </div>
  <div className="x-mt-13" data-id="fbce2346-da72-4b5c-8e1b-2049e36d6ea8"></div>
  <div className="x-bc-white x-fs-00">
    <div className="x-highlight">
      <div data-region="room">
        <div>
          <div className="book2-child-block x-highlight-all">
            <div className="book2-child-image x-fs-00 x-img x-img-top x-highlight-tlb x-pointer" data-item="hand" style={{backgroundImage: `url('https://media.millenniumhotels.com/mhb-media/9/3/0/930AA342-2332-4183-A3D8-C58C4260DED7/club2.jpg?r=170805122020&amp;w=340&amp;hash=8926CD5FADD1AB0ED7C63E8BA0881848')`}}>
            <div className="book2-viewgallery shrink x-highlight-lb">
              <span className="x-fs-16 x-di x-di-v-m x-fc-white x-pointer icon-icon_A004" data-item="look"></span>
              <span className="x-fs-14 x-di x-di-v-m x-fc-white x-pointer x-ml-06" data-item="look">Quick Look</span>
            </div>
          </div>
          <div className="book2-child-theme x-fs-00 x-nowrap">
            <div className="panel-1 x-di x-di-v-t x-normal">
              <div>
                <h2 className="x-fs-24 x-di x-di-v-m x-lh-12 x-ff-wb x-pointer" data-item="hand">Club</h2>
                <span className="x-fs-18 x-di x-di-v-m x-ml-08 x-separator"></span>
                <span className="x-fs-18 x-di x-di-v-m x-ml-04"></span>
                <span className="x-fs-18 x-di x-di-v-m x-ml-04 x-default x-popup icon-icon_P004" data-item="popup">
                  <div className="x-popup-wrap x-fs-00">
                    <div className="x-popup-body x-fs-16 x-ff-sm x-nowrap" style={{padding: '6px 10px'}}>Wi-Fi
                  </div>
              </div>
              </span>
              <span className="x-fs-18 x-di x-di-v-m x-ml-04 x-default x-popup icon-icon_F003" data-item="popup">
                <div className="x-popup-wrap x-fs-00">
                  <div className="x-popup-body x-fs-16 x-ff-sm x-nowrap" style={{padding: '6px 10px'}}>Club Access
                </div>
            </div>
            </span>
            <span className="x-fs-18 x-di x-di-v-m x-ml-04 x-default x-popup icon-icon_R002" data-item="popup">
              <div className="x-popup-wrap x-fs-00">
                <div className="x-popup-body x-fs-16 x-ff-sm x-nowrap" style={{padding: '6px 10px'}}>Coffee and Tea-making Facilities
              </div>
          </div>
          </span>
          <span className="x-fs-18 x-di x-di-v-m x-ml-04 x-default x-popup icon-icon_G008" data-item="popup">
            <div className="x-popup-wrap x-fs-00">
              <div className="x-popup-body x-fs-16 x-ff-sm x-nowrap" style={{padding: '6px 10px'}}>In-Room Safe
            </div>
        </div>
        </span>
      </div>
      <div className="x-mt-08">
        <span className="x-fs-16 x-di x-di-v-m x-ff-sm x-fc-black x-normal">A comfy and stylish night's stay, complete with exclusive privileges</span>
      </div>
      <div className="x-mt-08">
        <div className="x-di x-di-v-t">
          <div className="x-nowrap x-fc-black x-pointer" data-bed-type="King" data-item="beds">
            <span className="x-fs-16 x-di x-di-v-m icon-icon_I001"></span>
            <span className="x-fs-16 x-di x-di-v-m x-ff-sm x-ml-06 x-under">King</span>
          </div>
          <div className="book2-updated-tip x-fs-12 x-mt-08 x-fc-green x-al-c" data-bed-type="King">
            <span className="x-fs-16 x-di x-di-v-m icon-icon_I009"></span> Updated!
          </div>
        </div>
        <div className="x-di x-di-v-t x-ml-08"></div>
        <div className="x-di x-di-v-t">
          <div className="x-nowrap x-fc-black x-pointer" data-bed-type="Twin" data-item="beds">
            <span className="x-fs-16 x-di x-di-v-m icon-icon_I006"></span>
            <span className="x-fs-16 x-di x-di-v-m x-ff-sm x-ml-06 x-under">Twin</span>
          </div>
          <div className="book2-updated-tip x-fs-12 x-mt-08 x-fc-green x-al-c" data-bed-type="Twin">
            <span className="x-fs-16 x-di x-di-v-m icon-icon_I009"></span> Updated!
          </div>
        </div>
        <div className="x-di x-di-v-t x-ml-08"></div>
      </div>
    </div>
    <div className="panel-2 x-di x-di-v-t x-normal">
      <div className="x-mt-08"></div>
      <div className="x-fs-00">
        <span className="x-fs-24 x-ff-wb x-upper x-di x-di-v-m">CNY 206.38</span>
      </div>
      <div className="x-fs-16 x-ff-m7 x-upper x-mt-08">PER ROOM PER NIGHT STARTING BID</div>
      <div style={{maxHeight: '38px'}}>
      <div className="x-mt-20">
        <span className="x-fs-15 x-di x-di-v-m x-ff-mh x-fc-azure x-upper x-default">select this room</span>
        <span className="x-fs-32 x-di x-di-v-m x-radio x-fc-azure x-ml-08 x-pointer" data-item="hand"></span>
      </div>
    </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  <div data-region="stay"></div>
  </div>
  <div data-region="rate"></div>
  </div>
  </div>
  <div>
    <div className="x-mt-13 x-ff-00 x-pl-20 x-pr-20 x-pt-13 x-pb-13 x-flex x-bc-green" style={{display: 'none'}} data-item="sales">
    <div className="x-cell x-al-l">
      <span className="x-fs-14 x-fc-white x-di x-di-v-m">Congratulations! You are only a few steps away from enjoying this great deal!</span>
    </div>
    <div className="x-cell x-al-r">
      <span className="x-fs-24 x-fc-white x-di x-di-v-m x-pointer icon-icon_B017" data-item="close"></span>
    </div>
  </div>
  <div className="x-mt-13" data-id="01dddf8a-5236-41a4-945f-23450388b533"></div>
  <div className="x-bc-white x-fs-00">
    <div className="x-highlight">
      <div data-region="room">
        <div>
          <div className="book2-child-block x-highlight-all">
            <div className="book2-child-image x-fs-00 x-img x-img-top x-highlight-tlb x-pointer" data-item="hand" style={{backgroundImage: `url('https://media.millenniumhotels.com/mhb-media/5/2/6/5264EDD0-5803-4FA2-A35C-59E95B5C4DD2/m-suite1.jpg?r=170805122022&amp;w=340&amp;hash=583E60DA8B52B8CC9A3DAF551D3C5383')`}}>
            <div className="book2-viewgallery shrink x-highlight-lb">
              <span className="x-fs-16 x-di x-di-v-m x-fc-white x-pointer icon-icon_A004" data-item="look"></span>
              <span className="x-fs-14 x-di x-di-v-m x-fc-white x-pointer x-ml-06" data-item="look">Quick Look</span>
            </div>
          </div>
          <div className="book2-child-theme x-fs-00 x-nowrap">
            <div className="panel-1 x-di x-di-v-t x-normal">
              <div>
                <h2 className="x-fs-24 x-di x-di-v-m x-lh-12 x-ff-wb x-pointer" data-item="hand">M Suite</h2>
                <span className="x-fs-18 x-di x-di-v-m x-ml-08 x-separator"></span>
                <span className="x-fs-18 x-di x-di-v-m x-ml-04"></span>
                <span className="x-fs-18 x-di x-di-v-m x-ml-04 x-default x-popup icon-icon_F006" data-item="popup">
                  <div className="x-popup-wrap x-fs-00">
                    <div className="x-popup-body x-fs-16 x-ff-sm x-nowrap" style={{padding: '6px 10px'}}>Butler Service
                  </div>
              </div>
              </span>
              <span className="x-fs-18 x-di x-di-v-m x-ml-04 x-default x-popup icon-icon_F003" data-item="popup">
                <div className="x-popup-wrap x-fs-00">
                  <div className="x-popup-body x-fs-16 x-ff-sm x-nowrap" style={{padding: '6px 10px'}}>Club Access
                </div>
            </div>
            </span>
            <span className="x-fs-18 x-di x-di-v-m x-ml-04 x-default x-popup icon-icon_P004" data-item="popup">
              <div className="x-popup-wrap x-fs-00">
                <div className="x-popup-body x-fs-16 x-ff-sm x-nowrap" style={{padding: '6px 10px'}}>Wi-Fi
              </div>
          </div>
          </span>
          <span className="x-fs-18 x-di x-di-v-m x-ml-04 x-default x-popup icon-icon_R002" data-item="popup">
            <div className="x-popup-wrap x-fs-00">
              <div className="x-popup-body x-fs-16 x-ff-sm x-nowrap" style={{padding: '6px 10px'}}>Coffee and Tea-making Facilities
            </div>
        </div>
        </span>
      </div>
      <div className="x-mt-08">
        <span className="x-fs-16 x-di x-di-v-m x-ff-sm x-fc-black x-normal">Spacious luxury living, perfect for cosmopolitan dwellers</span>
      </div>
      <div className="x-mt-08">
        <div className="x-di x-di-v-t">
          <div className="x-nowrap x-fc-black x-pointer" data-bed-type="King" data-item="beds">
            <span className="x-fs-16 x-di x-di-v-m icon-icon_I001"></span>
            <span className="x-fs-16 x-di x-di-v-m x-ff-sm x-ml-06 x-under">King</span>
          </div>
          <div className="book2-updated-tip x-fs-12 x-mt-08 x-fc-green x-al-c" data-bed-type="King">
            <span className="x-fs-16 x-di x-di-v-m icon-icon_I009"></span> Updated!
          </div>
        </div>
        <div className="x-di x-di-v-t x-ml-08"></div>
      </div>
    </div>
    <div className="panel-2 x-di x-di-v-t x-normal">
      <div className="x-mt-08"></div>
      <div className="x-fs-00">
        <span className="x-fs-24 x-ff-wb x-upper x-di x-di-v-m">CNY 293.58</span>
      </div>
      <div className="x-fs-16 x-ff-m7 x-upper x-mt-08">PER ROOM PER NIGHT STARTING BID</div>
      <div style={{maxHeight: 38}}>
      <div className="x-mt-20">
        <span className="x-fs-15 x-di x-di-v-m x-ff-mh x-fc-azure x-upper x-default">select this room</span>
        <span className="x-fs-32 x-di x-di-v-m x-radio x-fc-azure x-ml-08 x-pointer" data-item="hand"></span>
      </div>
    </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  <div data-region="stay"></div>
  </div>
  <div data-region="rate"></div>
  </div>
  </div>
  <div>
    <div className="x-mt-13 x-ff-00 x-pl-20 x-pr-20 x-pt-13 x-pb-13 x-flex x-bc-green" style={{display: "none"}} data-item="sales">
    <div className="x-cell x-al-l">
      <span className="x-fs-14 x-fc-white x-di x-di-v-m">Congratulations! You are only a few steps away from enjoying this great deal!</span>
    </div>
    <div className="x-cell x-al-r">
      <span className="x-fs-24 x-fc-white x-di x-di-v-m x-pointer icon-icon_B017" data-item="close"></span>
    </div>
  </div>
  <div className="x-mt-13" data-id="4a57b52b-af12-4f91-911e-7b7734c3cc4d"></div>
  <div className="x-bc-white x-fs-00">
    <div className="x-highlight">
      <div data-region="room">
        <div>
          <div className="book2-child-block x-highlight-all">
            <div className="book2-child-image x-fs-00 x-img x-img-top x-highlight-tlb" style={{backgroundImage: `url('https://media.millenniumhotels.com/mhb-media/F/F/7/FF72E645-2005-4026-B4D8-614F253C3E78/grand-millennium-suite1.jpg?r=170805122023&amp;w=340&amp;hash=FA41E05D043221F5D0B424E212CD1780')`}}>
            <div className="book2-viewgallery shrink x-highlight-lb">
              <span className="x-fs-16 x-di x-di-v-m x-fc-white x-pointer icon-icon_A004" data-item="look"></span>
              <span className="x-fs-14 x-di x-di-v-m x-fc-white x-pointer x-ml-06" data-item="look">Quick Look</span>
            </div>
          </div>
          <div className="book2-child-theme x-fs-00 x-nowrap">
            <div className="panel-1 x-di x-di-v-t x-normal">
              <div>
                <h2 className="x-fs-24 x-di x-di-v-m x-lh-12 x-ff-wb">Grand Millennium Suite</h2>
                <span className="x-fs-18 x-di x-di-v-m x-ml-08 x-separator"></span>
                <span className="x-fs-18 x-di x-di-v-m x-ml-04"></span>
                <span className="x-fs-18 x-di x-di-v-m x-ml-04 x-default x-popup icon-icon_F006" data-item="popup">
                  <div className="x-popup-wrap x-fs-00">
                    <div className="x-popup-body x-fs-16 x-ff-sm x-nowrap" style={{padding: `6px 10px`}}>Butler Service
                  </div>
              </div>
              </span>
              <span className="x-fs-18 x-di x-di-v-m x-ml-04 x-default x-popup icon-icon_P004" data-item="popup">
                <div className="x-popup-wrap x-fs-00">
                  <div className="x-popup-body x-fs-16 x-ff-sm x-nowrap" style={{padding: "6px 10px"}}>Wi-Fi
                </div>
            </div>
            </span>
            <span className="x-fs-18 x-di x-di-v-m x-ml-04 x-default x-popup icon-icon_F003" data-item="popup">
              <div className="x-popup-wrap x-fs-00">
                <div className="x-popup-body x-fs-16 x-ff-sm x-nowrap" style={{ padding: "6px 10px"}}>Club Access
              </div>
          </div>
          </span>
          <span className="x-fs-18 x-di x-di-v-m x-ml-04 x-default x-popup icon-icon_R002" data-item="popup">
            <div className="x-popup-wrap x-fs-00">
              <div className="x-popup-body x-fs-16 x-ff-sm x-nowrap" style={{padding: "6px 10px"}}>Coffee and Tea-making Facilities
            </div>
        </div>
        </span>
      </div>
      <div className="x-mt-08">
        <span className="x-fs-16 x-di x-di-v-m x-ff-sm x-fc-black x-normal">A luxurious retreat in the heart of the city</span>
      </div>
      <div className="x-mt-08">
      </div>
    </div>
    <div className="panel-2 x-di x-di-v-t x-normal">
      <div className="x-fs-16 x-lh-22 x-fc-black x-mt-45">
        <span style={{display: 'inline-block', maxWidth: '220px', lineHeight: '2.2rem'}}>
        <span className="x-sd-tip" data-item="s-rate-calendar"><a>Sold Out</a> for your dates.</span>
        <span className="x-rc-tip" data-item="s-rate-calendar">View available dates with our <a> rate calendar </a> or  <a href="/en/bookings?city=beijing&amp;checkin=2019-12-05&amp;checkout=2019-12-09&amp;discountcode=&amp;groupcode=&amp;promocode=&amp;adults=1&amp;children=0&amp;rooms=1&amp;AAA=false&amp;AARP=false&amp;GOV=false&amp;Accessible=false"> explore other hotels in the city.</a></span>
        </span>
      </div>
    </div>
  </div>
  </div>
  </div>
  </div>
  <div data-region="stay"></div>
  </div>
  <div data-region="rate"></div>
  </div>
  </div>
  <div>
    <div className="x-mt-13 x-ff-00 x-pl-20 x-pr-20 x-pt-13 x-pb-13 x-flex x-bc-green" style={{display: "none"}} data-item="sales">
    <div className="x-cell x-al-l">
      <span className="x-fs-14 x-fc-white x-di x-di-v-m">Congratulations! You are only a few steps away from enjoying this great deal!</span>
    </div>
    <div className="x-cell x-al-r">
      <span className="x-fs-24 x-fc-white x-di x-di-v-m x-pointer icon-icon_B017" data-item="close"></span>
    </div>
  </div>
  <div className="x-mt-13" data-id="b5005628-fba1-4492-ae4b-14664cee93da"></div>
  <div className="x-bc-white x-fs-00">
    <div className="x-highlight">
      <div data-region="room">
        <div>
          <div className="book2-child-block x-highlight-all">
            <div className="book2-child-image x-fs-00 x-img x-img-top x-highlight-tlb" style={{backgroundImage: `url('https://media.millenniumhotels.com/mhb-media/F/A/5/FA5E0500-58D1-44A7-BE6F-02CC45B0AD27/presidential-suite1.jpg?r=170805122025&amp;w=340&amp;hash=BE6B0104475CE92EC90665CAD67F00A2')`}}>
            <div className="book2-viewgallery shrink x-highlight-lb">
              <span className="x-fs-16 x-di x-di-v-m x-fc-white x-pointer icon-icon_A004" data-item="look"></span>
              <span className="x-fs-14 x-di x-di-v-m x-fc-white x-pointer x-ml-06" data-item="look">Quick Look</span>
            </div>
          </div>
          <div className="book2-child-theme x-fs-00 x-nowrap">
            <div className="panel-1 x-di x-di-v-t x-normal">
              <div>
                <h2 className="x-fs-24 x-di x-di-v-m x-lh-12 x-ff-wb">Presidential Suite</h2>
                <span className="x-fs-18 x-di x-di-v-m x-ml-08 x-separator"></span>
                <span className="x-fs-18 x-di x-di-v-m x-ml-04"></span>
                <span className="x-fs-18 x-di x-di-v-m x-ml-04 x-default x-popup icon-icon_F006" data-item="popup">
                  <div className="x-popup-wrap x-fs-00">
                    <div className="x-popup-body x-fs-16 x-ff-sm x-nowrap" style={{padding: "6px 10px"}}>Butler Service
                  </div>
              </div>
              </span>
              <span className="x-fs-18 x-di x-di-v-m x-ml-04 x-default x-popup icon-icon_F003" data-item="popup">
                <div className="x-popup-wrap x-fs-00">
                  <div className="x-popup-body x-fs-16 x-ff-sm x-nowrap" style={{padding: '6px 10px'}}>Club Access
                </div>
            </div>
            </span>
            <span className="x-fs-18 x-di x-di-v-m x-ml-04 x-default x-popup icon-icon_G014" data-item="popup">
              <div className="x-popup-wrap x-fs-00">
                <div className="x-popup-body x-fs-16 x-ff-sm x-nowrap" style={{padding: "6px 10px"}}>12-speaker Bose Hi-fi Surround Sound System
              </div>
          </div>
          </span>
          <span className="x-fs-18 x-di x-di-v-m x-ml-04 x-default x-popup icon-icon_P004" data-item="popup">
            <div className="x-popup-wrap x-fs-00">
              <div className="x-popup-body x-fs-16 x-ff-sm x-nowrap" style={{padding: "6px 10px"}}>Wi-Fi
            </div>
        </div>
        </span>
      </div>
      <div className="x-mt-08">
        <span className="x-fs-16 x-di x-di-v-m x-ff-sm x-fc-black x-normal">The ultimate space for an incredibly luxurious stay</span>
      </div>
      <div className="x-mt-08">
      </div>
    </div>
    <div className="panel-2 x-di x-di-v-t x-normal">
      <div className="x-fs-16 x-lh-22 x-fc-black x-mt-45">
        <span style={{display: 'inline-block', maxWidth: '220px', lineHeight: "2.2rem"}}>
        <span className="x-sd-tip" data-item="s-rate-calendar"><a>Sold Out</a> for your dates.</span>
        <span className="x-rc-tip" data-item="s-rate-calendar">View available dates with our <a> rate calendar </a> or  <a href="/en/bookings?city=beijing&amp;checkin=2019-12-05&amp;checkout=2019-12-09&amp;discountcode=&amp;groupcode=&amp;promocode=&amp;adults=1&amp;children=0&amp;rooms=1&amp;AAA=false&amp;AARP=false&amp;GOV=false&amp;Accessible=false"> explore other hotels in the city.</a></span>
        </span>
      </div>
    </div>
  </div>
  </div>
  </div>
  </div>
  <div data-region="stay"></div>
  </div>
  <div data-region="rate"></div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  <div className="book2-gallery"></div>
  <div className="book2-lampbox"></div>
  <div className="book2-loading"></div>
  </div>
  </div>
  <script type="text/javascript">
    window.CityHotelsCount = 2;
  </script>
  </div>
  </div>
  <div className="tpl-full-screen-mask-crs">
    <div className="tpl-form-submit-succeed">
      <h4 className="tip-title"></h4>
      <div className="content-error-tips">
        <h5 className="tip-copy"></h5>
        <div style={{overflow: "visible"}} className="clearfix">
        <a className="wgt-sqbutton-black tip-button"></a>
      </div>
    </div>
  </div>
  </div>
  <script src="./assets//Content/v102/bundle/bundle.js"></script>
  <link rel="stylesheet" href="http://fast.fonts.net/cssapi/be2a212a-585a-4d58-a755-8b33a0c7181b.css" media="all"/>
</body>
    )
  }
}

export default Home
