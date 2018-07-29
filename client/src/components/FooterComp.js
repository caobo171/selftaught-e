import React from 'react';
import { Footer } from 'react-materialize';

const FooterComp = () => {
    return (
        <Footer copyrights=" 2018 Copyright by SELFTaught Team"
            links={
                <ul>
                    <li><a className="grey-text text-lighten-3"
                        rel="noopener noreferrer"
                        target="_blank" href="https://www.howkteam.vn/">HowKteam.vn </a></li>
                    <li><a className="grey-text text-lighten-3"
                        rel="noopener noreferrer"
                        target="_blank" href="https://www.welevn.com/">We Enjoy Learning English</a></li>
                    <li><a className="grey-text text-lighten-3"
                        rel="noopener noreferrer"
                        target="_blank" href="https://www.youtube.com/user/shiffman">Coding Train </a></li>
                    <li><a className="grey-text text-lighten-3"
                        rel="noopener noreferrer"
                        target="_blank" href="https://www.youtube.com/user/TechGuyWeb">Traversy Media </a></li>
                </ul>
            }
            className='example blue'
        >
            <h5 className="white-text">Các trang web tự học </h5>
            <p className="grey-text text-lighten-4">"Move fast and breack things. Unless you are breaking stuff, you are not moving fast enough"</p>
            <p>- Mark Zuckerberg -</p>
        </Footer>
    );
}

export default FooterComp;