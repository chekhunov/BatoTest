import React from 'react';
import classNames from 'classnames';
import style from './services.module.scss';

const sideScroll = (element, speed, distance, step) => {
    let scrollAmount = 0;
  
    const slideTimer = setInterval(() => {
      
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
    }, speed);
  };

export default function Services({items}) {
     //добавляем пустой обьтект на четное количество елементов
     React.useEffect(()=>{
        if(items.length !== 0) {
            items.push([...Array(1)]);
        }
     },[items])

    const listServices = ['Multimedia', 'Interactive design', 'Packa ging', 'Branding', 'Creative Strategy', 'UI/UX', 'Coding']
    const [activeId] = React.useState(0);
    const [isActiveDot, setIsActiveDot] = React.useState(0);
    const contentWrapper = React.useRef(null);

    const plus = () => {
      isActiveDot < items.length + 1 && setIsActiveDot(isActiveDot + 1);
    };
    const minus = () => {
      isActiveDot !==0 && setIsActiveDot(isActiveDot - 1) ;
    };
  
    const stepNext = () =>{
      sideScroll(contentWrapper.current, 10, 845, 20)   
    }
    const stepPrev = () =>{
      sideScroll(contentWrapper.current, 10, 845, -20);
    }
    return (
        <section className={classNames(style.services, "services")}>
            <div className="container">
                <div className="title">— Services</div>

                <div className={style.meta}>
                    <p className={style.text}>
                    We love work hard and explore new things that’s why we cover lot of things. Check our service list and view details
                    </p>

                    <ul className={style.menu}>
                        {listServices && listServices.map((list,index)=>
                        <li key={index} className={style.list}>{list}</li>)}
                    </ul>
                </div>

                <div className={style.wrapperSlider} >
                    <div className={style.slider} ref={contentWrapper}>
                        <div className={style.items} >

{items && items.map((item, index)=>
                            <div key={index} className={classNames(style.item, index === activeId ? style.active:'')}>
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
              <div className={style.paginations}>     
            <div className={style.paginationsLeft}>    
              <div 
                className={classNames("icon-left", isActiveDot === 0 && 'disabled')} 
                onClick={(e)=>{stepPrev(); minus();}}
                disabled={(isActiveDot === 0)}
              ></div>
            </div>

            <div className={style.paginationsRight}>
              <div 
                className={classNames("icon-right", isActiveDot === (items.length - 2) && 'disabled')} 
                onClick={(e)=>{stepNext(); plus();}} 
                disabled={(isActiveDot=== (items.length - 2))}
              ></div>
              </div> 
            </div>
                </div>
            </div>
        </section>
    )
}

