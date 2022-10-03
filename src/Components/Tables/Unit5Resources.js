import React from 'react';
// import { Unit5Letter } from "../../Assets/Data/Unit5Letter";
import { Unit5SelectionSupport } from '../../Assets/Data/Unit5SelectionSupport';
import PDFIcon from '../../Assets/Icons/PDFIcon.png';
// import TOCEditIcon from "../../Assets/Icons/TOCEditIcon.svg";
import '../../Styles/Resources.css';

export const Unit5Resources = () => {
    // const [spanish, setSpanish] = useState();
    // const [portuguese, setPortuguese] = useState();
    // const [haitian, setHaitian] = useState();

    // useEffect(() => {
    //   let justSpanish = Unit5Letter.map((item) => {
    //     return item.Spanish;
    //   });
    //   setSpanish(justSpanish);
    //   let justPort = Unit5Letter.map((item) => {
    //     return item.Portuguese;
    //   });
    //   setPortuguese(justPort);
    //   let justHaitian = Unit5Letter.map((item) => {
    //     return item.HaitianCreole;
    //   });
    //   setHaitian(justHaitian);
    // }, []);

    const stripes = (index) => {
        if (index === 0 || index % 2 === 0) {
            return 'white';
        } else {
            return 'tan';
        }
    };

    // const firstColumn = () => {
    //   if (Unit5Letter) {
    //     return Unit5Letter.map((item, index) => {
    //       return (
    //         <React.Fragment key={index}>
    //           <div className={`info-row icons gloss ${stripes(index)}`}>
    //             <p className="icon-input"> </p>
    //           </div>
    //         </React.Fragment>
    //       );
    //     });
    //   }
    // };

    // const showSpan = () => {
    //   if (spanish) {
    //     return spanish.map((item, index) => {
    //       return (
    //         <React.Fragment key={index}>
    //           {item !== "na" ? (
    //             <div className={`info-row icons gloss ${stripes(index)}`}>
    //               <a href={item}>
    //                 <img
    //                   className="icon-input svg"
    //                   alt="Spanish Parent Letter Icon"
    //                   src={TOCEditIcon}
    //                 />
    //               </a>
    //             </div>
    //           ) : (
    //             <div className={`info-row icons gloss ${stripes(index)}`}>
    //               <p className="icon-input"> </p>
    //             </div>
    //           )}
    //         </React.Fragment>
    //       );
    //     });
    //   }
    // };

    // const showPort = () => {
    //   if (portuguese) {
    //     return portuguese.map((item, index) => {
    //       return (
    //         <React.Fragment key={index}>
    //           {item !== "na" ? (
    //             <div className={`info-row icons gloss ${stripes(index)}`}>
    //               <a href={item}>
    //                 <img
    //                   className="icon-input svg"
    //                   alt="Portuguese Parent Letter Icon"
    //                   src={TOCEditIcon}
    //                 />
    //               </a>
    //             </div>
    //           ) : (
    //             <div className={`info-row icons gloss ${stripes(index)}`}>
    //               <p className="icon-input"> </p>
    //             </div>
    //           )}
    //         </React.Fragment>
    //       );
    //     });
    //   }
    // };

    // const showHaitian = () => {
    //   if (haitian) {
    //     return haitian.map((item, index) => {
    //       return (
    //         <React.Fragment key={index}>
    //           {item !== "na" ? (
    //             <div className={`info-row icons gloss ${stripes(index)}`}>
    //               <a href={item}>
    //                 <img
    //                   className="icon-input svg"
    //                   alt="Haitian Parent Letter Icon"
    //                   src={TOCEditIcon}
    //                 />
    //               </a>
    //             </div>
    //           ) : (
    //             <div className={`info-row icons gloss ${stripes(index)}`}>
    //               <p className="icon-input"> </p>
    //             </div>
    //           )}
    //         </React.Fragment>
    //       );
    //     });
    //   }
    // };

    const selectionsColumn = () => {
        if (Unit5SelectionSupport) {
            return Unit5SelectionSupport.map((item, index) => {
                if (
                    item.Selection === 'Into the Lifeboat from Titanic Survivor'
                ) {
                    return (
                        <React.Fragment key={index}>
                            <div className='info-row white tall'>
                                <p className='title-from'>
                                    Into the Lifeboat{' '}
                                    <i className='from'>from </i>Titanic
                                    Survivor
                                </p>
                            </div>
                        </React.Fragment>
                    );
                }
                return (
                    <React.Fragment key={index}>
                        <div className={`info-row ${stripes(index)} tall`}>
                            {item.Excerpt ? (
                                <p className='title-from'>
                                    <i className='from'>from </i>
                                    {item.Selection}
                                </p>
                            ) : (
                                <p className='title-from'>{item.Selection}</p>
                            )}
                        </div>
                    </React.Fragment>
                );
            });
        }
    };

    const multiSummariesColumn = () => {
        if (Unit5SelectionSupport) {
            return Unit5SelectionSupport.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        <div
                            className={`info-row icons selections ${stripes(
                                index
                            )} tall`}>
                            {item.MultilingualSummary !== 'NA' ? (
                                <a href={item.MultilingualSummary}>
                                    <img
                                        className='icon-input tall'
                                        alt='Multilingual Summary PDF'
                                        src={PDFIcon}
                                    />
                                </a>
                            ) : null}
                        </div>
                    </React.Fragment>
                );
            });
        }
    };

    const adoptedColumn = () => {
        if (Unit5SelectionSupport) {
            return Unit5SelectionSupport.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        <div
                            className={`info-row icons selections ${stripes(
                                index
                            )} tall`}>
                            {item.Summary !== 'NA' ? (
                                <a href={item.Summary}>
                                    <img
                                        className='icon-input tall'
                                        alt='Adapted Text PDF'
                                        src={PDFIcon}
                                    />
                                </a>
                            ) : null}
                        </div>
                    </React.Fragment>
                );
            });
        }
    };

    const englishSketch = () => {
        if (Unit5SelectionSupport) {
            return Unit5SelectionSupport.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        <div
                            className={`info-row icons selections ${stripes(
                                index
                            )} tall`}>
                            {item.TextSketchEnglish !== 'NA' ? (
                                <a href={item.TextSketchEnglish}>
                                    <img
                                        className='icon-input tall'
                                        alt='English Text Sketch PDF'
                                        src={PDFIcon}
                                    />
                                </a>
                            ) : null}
                        </div>
                    </React.Fragment>
                );
            });
        }
    };

    const spanishSketch = () => {
        if (Unit5SelectionSupport) {
            return Unit5SelectionSupport.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        <div
                            className={`info-row icons selections ${stripes(
                                index
                            )} tall`}>
                            {item.TextSketchSpanish !== 'NA' ? (
                                <a href={item.TextSketchSpanish}>
                                    <img
                                        className='icon-input tall'
                                        alt='Spanish Text Sketch PDF'
                                        src={PDFIcon}
                                    />
                                </a>
                            ) : null}
                        </div>
                    </React.Fragment>
                );
            });
        }
    };

    return (
        <div className='unit-container'>
            <section className='above-table unit'>
                <h5 className='unit-title not-one'>Unit 5 Resources</h5>
            </section>
            <div className='glossaries-one resources'>
                <table className='one-table opener'>
                    <section className='column topic home-language one'>
                        <div className='header-row multi topic-header oneTable'>
                            <h4 className='header-text topic-header-text home-text'>
                                Spanish Unit Opener
                            </h4>
                        </div>
                    </section>
                    <section className='column topic multi one'>
                        <div className='main-column links vocab v1'>
                            <div className='info-row icons gloss v1'>
                                <a href='https://www.hmhco.com/content/literature/read_studio/g9/student/pdf/09le_03_ese_U5_sp.pdf'>
                                    <img
                                        className='icon-input glossary'
                                        alt='Critical Vocabulary PDF'
                                        src={PDFIcon}
                                    />
                                </a>
                            </div>
                        </div>
                    </section>
                    <section className='column topic note-charts-unit small invisible'></section>
                    <section className='column topic note-charts-unit small invisible'></section>
                    <section className='column topic note-charts-unit small invisible'></section>
                    <section className='column topic note-charts-unit small invisible'></section>
                </table>
            </div>
            <table className='notice-note-table-container bookmark unit'>
                <section className='column topic note-charts-unit'>
                    <div className='header-row note topic-header tall'>
                        <h4 className='header-text topic-header-text charts-text tall'>
                            Selection
                        </h4>
                    </div>
                    <div className='main-column topics-text unit'>
                        {selectionsColumn()}
                    </div>
                </section>
                <section className='column topic note-charts-unit small'>
                    <div className='header-row note topic-header tall short'>
                        <h4 className='header-text small tall-short multiling'>
                            Multilingual Summary
                        </h4>
                    </div>
                    <div className='main-column topics-text small-unit right tall'>
                        {multiSummariesColumn()}
                    </div>
                </section>
                <section className='column topic note-charts-unit small'>
                    <div className='header-row note topic-header tall short'>
                        <h4 className='header-text small tall-short summary'>
                            Summary / Adapted Text
                        </h4>
                    </div>
                    <div className='main-column topics-text small-unit right tall'>
                        {adoptedColumn()}
                    </div>
                </section>
                <section className='column topic note-charts-unit small'>
                    <div className='header-row note topic-header tall short'>
                        <h4 className='header-text small tall-short english'>
                            Text Sketch (English)
                        </h4>
                    </div>
                    <div className='main-column topics-text small-unit right tall'>
                        {englishSketch()}
                    </div>
                </section>
                <section className='column topic note-charts-unit small'>
                    <div className='header-row note topic-header tall short right'>
                        <h4 className='header-text small tall-short spanish'>
                            Text Sketch (Spanish)
                        </h4>
                    </div>
                    <div className='main-column topics-text small-unit right tall'>
                        {spanishSketch()}
                    </div>
                </section>
            </table>
        </div>
    );
};

export default Unit5Resources;
