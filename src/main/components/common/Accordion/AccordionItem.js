import React, { useRef, useState } from 'react'

export default function AccordionItem({ item, index, list }) {
    const [contentHeight, setContentHeight] = useState(list.map(item => 0));
    const textWrapper = useRef(null);

    function toggleContent(index) {
        let textHeight = textWrapper.current.clientHeight;
        if (contentHeight[index] !== 0) {
            setContentHeight(state => state.map((item, itemIndex) => itemIndex === index ? 0 : item));
        } else {
            setContentHeight(state => state.map((item, itemIndex) => itemIndex === index ? textHeight : item));
        }
    }

    return (
        <li className="accordion__item">
            <div className="accordion__wrapper">
                <button className={"accordion__button" + (contentHeight[index] > 0 ? " active" : "")} onClick={() => toggleContent(index)}>
                    <span>{item.title}</span>
                    <span className="accordion__pm"></span>
                </button>
                <div className="accordion__content" style={{ height: contentHeight[index] }}>
                    <div className="accordion__text-wrapper" ref={textWrapper}>
                        <p className="accordion__text" dangerouslySetInnerHTML={{ __html: item.text }}></p>
                        {item.list &&
                            <ul className='accordion__item-list'>
                                {item.list.map((item, index) => <li key={index} className='accordion__text'>{item}</li>)}
                            </ul>
                        }
                        {item.table &&
                            <div className='accordion__table'>
                                <div className='accordion__column'>
                                    <div className='accordion__text accordion__row'>{item.table.title1}</div>
                                    <div className='accordion__text accordion__row'>150%</div>
                                </div>
                                <div className='accordion__column'>
                                    <div className='accordion__text accordion__row'>{item.table.title2}</div>
                                    <div className='accordion__text accordion__row'>0.1%</div>
                                </div>
                                <div className='accordion__column'>
                                    <div className='accordion__text accordion__row'>{item.table.title3}</div>
                                    <div className='accordion__text accordion__row'>150%-0.15%=149.85%</div>
                                </div>
                            </div>
                        }
                        {item.text2 &&
                            <p className='accordion__text'>{item.text2}</p>
                        }
                        {item.subtitle1 && <h2 className='accordion__text accordion__text--main'>{item.subtitle1}</h2>}
                        {item.subtext1 && <h2 className='accordion__text'>{item.subtext1}</h2>}
                        {item.subtitle2 && <h2 className='accordion__text accordion__text--main'>{item.subtitle2}</h2>}
                        {item.subtext2 && <h2 className='accordion__text'>{item.subtext2}</h2>}
                    </div>
                </div>
            </div>
        </li>
    )
}
