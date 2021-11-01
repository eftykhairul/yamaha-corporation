import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div id='footer'>
            <h1 className='my-5 middle'>Contact GoDaddy</h1>
            <div className='my-footer my-3'>
                
                <div className='section'>
                    <div>
                        <h2>GoDaddy Tourism</h2>
                        <p>Questions</p>
                        <p>Jobs</p>
                        <p>Help</p>
                        <p>Mobile</p>
                    </div>
                    <div>
                        <h2>About</h2>
                        <p>Serial</p>
                        <p>New Appointed</p>
                        <p>Specialist</p>
                        <p>More</p>
                    </div>
                    <div>
                        <h2>GoDaddy Ltd</h2>
                        <p>About</p>
                        <p>Work</p>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                    </div>
                </div>
                <h2 className="my-footer mt-2">Copyright © 2021 GoDaddy Tourism</h2>
            </div>
        </div>
    );
};

export default Footer;