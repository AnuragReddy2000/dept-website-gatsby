import Dmathfam from '../images/homePage/Dmathfam.jpg';
import DmathPicnic from '../images/homePage/DmathPicnic.png';
import MinC_720 from '../images/academics/btechMnC/MinC_720.jpg';
import ubd_quote from '../images/academics/btechMnC/ubd_quote.png';
import GeneralUG from '../images/academics/generalUG/GeneralUG.jpg';
import msc from '../images/academics/msc/msc.png';
import phd_main from '../images/academics/phd/phd_main.png';
import phd_submain from '../images/academics/phd/phd_submain.png';
import event1 from '../images/news/outReach/event1.png';
import event2 from '../images/news/outReach/event2.png';
import event3 from '../images/news/outReach/event3.png';
import DmathGrp1 from '../images/homePage/DmathGrp1.jpg';
import DmathGrp2 from '../images/homePage/DmathGrp2.jpg';
import DmathGrp3 from '../images/homePage/DmathGrp3.jpg';

export const CarouselPics: Record<string, string[]> ={
    'About Us': [Dmathfam,DmathGrp1,DmathGrp2,DmathGrp3,DmathPicnic],
    'BtechMnC': [ubd_quote],
    'General UG': [GeneralUG],
    'MSc': [msc],
    'PhD': [phd_main,phd_submain],
    'Outreach': [event1,event2,event3]
}