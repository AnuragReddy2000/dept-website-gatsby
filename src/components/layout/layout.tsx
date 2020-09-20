import React from 'react';
import './layout.css';
import TitleBar from '../titlebar/titlebar';
import NavSlider from '../navslider/navslider';
import Announcements from '../announcements/announcements';
import {Swipeable} from 'react-swipeable';
import Marquee from '../marquee/marquee';
import {BsCaretLeftFill} from 'react-icons/bs';

interface LayoutProps {}

interface LayoutState {
  showSlider: boolean;
  currentTab: string;
  showAnnouncements: boolean;
}

class Layout extends React.Component<LayoutProps, LayoutState> {

  constructor(props: LayoutProps, state: LayoutState) {
    super(props, state);
    this.state = {
      showAnnouncements: false,
      showSlider: false,
      currentTab: 'Home'
    }
    this.pageRef = React.createRef();
  }

  pageRef : any

  changeTab = (tab: string):void =>{
    this.setState({
        currentTab: tab,
        showSlider: this.state.showSlider && !this.state.showSlider
    },() => { this.pageRef.current.scrollTop = 0 });
  }

  toggleShowSlider = (): void => {
    this.setState({
      showSlider: !this.state.showSlider
    })
  }

  swipeShowSlider = ():void => {
    if(!this.state.showSlider){
      this.setState({
        showSlider: true
      })
    }
  }

  swipeRemoveSlider =():void =>{
    if(this.state.showSlider){
      this.setState({
        showSlider: false
      })
    }
  }

  toggleShowAnnouncements =():void =>{
    this.setState({
      showAnnouncements: !this.state.showAnnouncements
    })
  }

  render(){
    return (
      <Swipeable onSwipedRight={this.swipeShowSlider} onSwipedLeft={this.swipeRemoveSlider}>
        <div className='page' ref={this.pageRef}>
          <TitleBar toggleShowSlider={this.toggleShowSlider}></TitleBar>
          <div className='pageBody'>
            <div className={(this.state.showSlider)? 'showNav':'hideNav'}>
              <NavSlider currentTab={this.state.currentTab} changeTab={this.changeTab}/>
            </div>
            <div className='bodyContent'>
              <div style={{width: this.state.showAnnouncements ? '100%' : '95%'}}>
                {this.props.children}
              </div>
            </div>
            {this.state.showAnnouncements ? <Announcements changeTab={this.changeTab} hideAnnouncements={this.toggleShowAnnouncements} /> : 
            <div>
              <div className='announcementButton' onClick={this.toggleShowAnnouncements}>
                <BsCaretLeftFill className='annOpenIcon'/>
                <p className='annButtonText'>ANNOUNCEMENTS</p>
              </div>
              <div className='upcomingeventsButton' onClick={this.toggleShowAnnouncements}>
                <BsCaretLeftFill />
                <p className='annButtonText'>UPCOMING EVENTS</p>
              </div>
            </div>
            }
          </div>
          <Marquee />
        </div>
      </Swipeable>
    );
  }  
}

export default Layout;
