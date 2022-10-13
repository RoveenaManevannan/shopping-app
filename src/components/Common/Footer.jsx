import { Facebook, Instagram, Twitter, Room, Phone, MailOutline} from "@material-ui/icons";
import"./style/Footer.css";

const Footer = () => {
  return (
    <div className="footerContainer">
        <div className="Left">
            <h1 className="Logo">RR<span/> COLLECTIONS</h1>
            <p>Created on 2019</p>
        </div>
        <div className="Center">
           <h3 className="footerTitle">Contact</h3>
           <p className="ContactItem"> <Room/> 34 South Cross, Bristol. BR12 4HZ </p>
           <p className="ContactItem"> <Phone/> 01356 788344 </p>
           <p className="ContactItem"> <MailOutline/> contact@rrcollection.com</p>
        </div>
        <div className="Right">
        <div className="Social">
                <div className="SocialIcon">
                    <Facebook id="icon1"/>
                </div>
                <div className="SocialIcon" >
                    <Instagram id="icon2"/>
                </div>
                <div className="SocialIcon" >
                    <Twitter id="icon3"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer