import img from '../../Pages/img/Captures/about.jpg'
import './About.css'
const About = () => {
    return (
        <div className=' mb-5'>
            <div className='header-info'>
                <h1 className='text-center'>About us</h1>
                <p style={{ textAlign: "center", margin: '0 90px' }}>APNA CAR comapny is the biggest and femous or popular car company </p>
                <p style={{ textAlign: "center", margin: '0 90px' }}>in the world </p>

            </div>
            <div className='about'  >
                <img src={img} style={{ width: '300' }} alt="" />
                <h3>ABDUR RHAIM</h3>
               <p className='text-center mx-5'>
               hello every one ! I am the ceo of this website. i am talking about me and what is the future of plan of this website.
               espeaciall i work hard for my client for my rathins and her happyness . next month i will create live addventure who addrventured of this website
               there will a video part . this video will who was goint to tourist placess there adventure. some of ariticle that peopel commented me.



               </p>

            </div>
        </div>
    );
};

export default About;