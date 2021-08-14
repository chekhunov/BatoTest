import React from 'react';
import classNames from 'classnames';
import LogoCompany from '../header/logoCompany';
import logo from '../../assets/header/logo.png';
import Menu from '../menu';

export default function Footer({appState}) {
    const [toSend, setToSend] = React.useState({
        mail_to: '',
      });

      const onSubmit = (e) => {
        e.preventDefault();
      }

      const handleChange = (e) => {
        setToSend(e.target.value);
      };

  return (
    <footer className={classNames("footer")}>
        <div className="container">
            <div className="footer__top">

                <LogoCompany logo={logo} />

                <div className="footer__content">
                    <Menu menuItems={appState.menuFooterTop} />

                    <form className={"form"} onSubmit={onSubmit}>
                        <label className="form__label" htmlFor="mail">
                            <input 
                                type="text" 
                                placeholder="Your email" 
                                value={toSend.mail_to}
                                onChange={handleChange}
                            />
                            
                            <button className={"button-color"} type='submit'><span>Send</span></button>
                        </label>
                    </form>
                </div>   
            </div>

          <div className="footer__bottom">
            
               <Menu menuItems={appState.menuFooterBottom} />
                     
                        <ul className="footer__social">
                            <li className="footer__social-list">
                                <a href="/">
                                    <div className="icon-twitter"></div>
                                </a>
                            </li>

                            <li className="footer__social-list">
                                <a href="/">
                                    <div className="icon-linkedin"></div>             
                                </a>
                            </li>

                            <li className="footer__social-list">
                                <a href="/">
                                    <div className="icon-google"></div>                                
                                </a>
                            </li>

                            <li className="footer__social-list">
                                <a href="/">
                                    <div className="icon-facebook"></div>                          
                                </a>
                            </li>
                        </ul>

                    
              
            </div>
        </div>
    </footer>
  );
}