import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
        <div className='blog-cotnianer'>
        <div className='header-info'>
                <h1 className='text-center'>Question and Answer</h1>
                <p style={{ textAlign: "center", margin: '0 90px' }}>You can see tousands of people quesiotn and answered</p>
                <p style={{ textAlign: "center", margin: '0 90px' }}>in the world </p>
s
            </div>
            <div className='quest-contianer'>
                <h2>What other services does firebase provide other than authentication</h2>
                <div>
                    <h5>By: <span className='name-blog'>Alex Harry</span> <span className='date-blog'>Mar 23, 2022</span></h5>
                </div>
                <img className='blog-img' src={'https://www.tristatetechnology.com/tristate-website/blog/wp-content/uploads/2019/06/firebase11.jpg'} alt="" />

            </div>
            <h2>Answer: </h2>  <p>Ofcourse! Firebase Provide more other thant authentication Like (<code> Cloud Firebase,Hosting,Storage,RealTime DataBase
                , Fuction, Development Tools,</code>)
                <br />
                <span className='text-success'>two of them</span>
            </p>
          
           <span className="fs-5 text-primary">Hosting:</span><span>Web hosting is a service that allows organizations and individuals to post a website or web page onto the Internet. </span>
           <br />
           <span className="fs-5 text-primary">Firebase Storege:</span><span>firebase Storege means stored some thing like (vieo, img,text,information,chats, ) etc can sotred in firebase Storage,</span>
        </div>
        <div className='blog-cotnianer'>
            <div className='quest-contianer'>
                <h1>Difference between authorization and authentication</h1>
                <div>
                    <h5>By: <span className='name-blog'>Aman Datter Wala</span> <span className='date-blog'>Mar 9, 2022</span></h5>
                </div>
             <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc77NGwnfLIOsJ3tGY43qXpmEb72TRWkqXdA&usqp=CAU'} alt="" />

            </div>
            <h2>Answer: </h2>  
            <p>
          
           
           <br />
     
           <sapn className={'text-primary fs-3'}>Authentication:</sapn>:firebase authentication to know about your identity .  Firebase authentication is a service provided by firebase which helps you to build the user authentication system for mobile/web application. It comes with the basic lifecycle methods like Login, Logout, Signup, reset password etc.;
        <br />
        <span className="text-primary fs-3">Authorization</span> Authorzation means to user some thin do in this webiste permission;
        <br />
           
            </p>
        </div>
    </div>
    );
};

export default Blogs;