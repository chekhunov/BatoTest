import React from 'react';
import classNames from 'classnames';

import style from './top.module.scss';
export default function Top({ items }) {

const widthStep = 100/items.length
const [activeId, setActiveId] = React.useState(0);
const [activeDot, setActiveDot] = React.useState(1);
const lengthSlider = items.length-1;

const todoWidth = {
    width: (widthStep*activeDot)+'%'
}

function countDots() {
    setActiveDot((prev)=>((prev === items.length) ? 1 : prev+1));
    }

React.useEffect(() => {

    const interval = setInterval(()=> {
        
        setActiveId((current) =>{
            const res = current === lengthSlider ? 0 : current + 1
            return res
        })
        countDots()
               
    }, 5000) 
  
    return () => clearInterval(interval)
       
},[])

    return (
        <section className={style.top} 
         
        >
            <div className={style.rightBlock} style={{
              backgroundImage   : "url(top/Placeholder.jpg)",
              backgroundPosition: 'top right',
            //   backgroundSize    : 50+'%',
              backgroundRepeat  : 'no-repeat',
            //   width: 100+'%',
            //   height: 758+'px'
                }}>    </div>
             <div className="container">
                <div className={classNames(style.inner)}>
                    <div className={style.content}>
                        <div className={style.title}>
                            Work around you and your team
                        </div>

                        <p className={style.desc}>
                            From ads that dance or sing to MTV-like commercials, online advertisers are now using a new type of technology “rich media” to attract consumers.
                        </p>

                        <button className={classNames(style.btn, 'button-color')}>
                            <span>Get started</span>
                        </button>
                    </div>
                    
                    <div className={style.pagination}>
                        <span className={style.num}>{activeDot < 10 ? (`0${activeDot}`): activeDot}</span>

                        <span className={style.line}>
                            <span style={todoWidth} className={classNames(style.lineAccent)}></span>
                        </span>

                        <span className={style.num}>{lengthSlider < 10 ? (`0${lengthSlider+1}`): lengthSlider+1}</span>
                    </div>

                    <div className={style.slider}>
                        <div className={style.items}>
{items && items.map((item, index)=>
                            <div key={item.id} className={classNames(style.item, index === activeId ? style.active:'')}>
                                <div className={style.itemInner}>
                                    <img className={style.img} src={item.img} alt="video images" />
                                    
                                    <a href={item.link} target="_blank" rel = "noreferrer">
                                    
                                    <span className={style.sliderLink}>
                                        <span className="icon-polygon"></span>
                                    </span>
                                    
                                    </a>
                                </div>
                            </div>)}
                        </div>
                    </div>
                </div>
            </div>
    
        </section>
    );
}
