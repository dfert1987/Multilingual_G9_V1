import React from 'react';
// import { Unit1Letter } from '../../Assets/Data/Unit1Letter';
import { Unit1SelectionSupport } from '../../Assets/Data/Unit1SelectionSupport';
import MultilingualOne from './MulitingualOne';
import PDFIcon from '../../Assets/Icons/PDFIcon.png';
// import TOCEditIcon from '../../Assets/Icons/TOCEditIcon.svg';
import '../../Styles/Resources.css';

export const Unit1Resources = () => {
    // const [spanish, setSpanish] = useState();
    // const [portuguese, setPortuguese] = useState();
    // const [haitian, setHaitian] = useState();

    // useEffect(() => {
    //     let justSpanish = Unit1Letter.map((item) => {
    //         return item.Spanish;
    //     });
    //     setSpanish(justSpanish);
    //     let justPort = Unit1Letter.map((item) => {
    //         return item.Portuguese;
    //     });
    //     setPortuguese(justPort);
    //     let justHaitian = Unit1Letter.map((item) => {
    //         return item.HaitianCreole;
    //     });
    //     setHaitian(justHaitian);
    // }, []);

    const stripes = (index) => {
        if (index === 0 || index % 2 === 0) {
            return 'white';
        } else {
            return 'tan';
        }
    };

    // const firstColumn = () => {
    //     if (Unit1Letter) {
    //         return Unit1Letter.map((item, index) => {
    //             return (
    //                 <React.Fragment key={index}>
    //                     <div
    //                         className={`info-row icons gloss ${stripes(
    //                             index
    //                         )}`}>
    //                         <p className='icon-input'> </p>
    //                     </div>
    //                 </React.Fragment>
    //             );
    //         });
    //     }
    // };

    // const showSpan = () => {
    //     if (spanish) {
    //         return spanish.map((item, index) => {
    //             return (
    //                 <React.Fragment key={index}>
    //                     {item !== 'na' ? (
    //                         <div
    //                             className={`info-row icons gloss ${stripes(
    //                                 index
    //                             )}`}>
    //                             <a href={item}>
    //                                 <img
    //                                     className='icon-input svg'
    //                                     alt='Spanish Parent Letter Icon'
    //                                     src={TOCEditIcon}
    //                                 />
    //                             </a>
    //                         </div>
    //                     ) : (
    //                         <div
    //                             className={`info-row icons gloss ${stripes(
    //                                 index
    //                             )}`}>
    //                             <p className='icon-input'> </p>
    //                         </div>
    //                     )}
    //                 </React.Fragment>
    //             );
    //         });
    //     }
    // };

    // const showPort = () => {
    //     if (portuguese) {
    //         return portuguese.map((item, index) => {
    //             return (
    //                 <React.Fragment key={index}>
    //                     {item !== 'na' ? (
    //                         <div
    //                             className={`info-row icons gloss ${stripes(
    //                                 index
    //                             )}`}>
    //                             <a href={item}>
    //                                 <img
    //                                     className='icon-input svg'
    //                                     alt='Portuguese Parent Letter Icon'
    //                                     src={TOCEditIcon}
    //                                 />
    //                             </a>
    //                         </div>
    //                     ) : (
    //                         <div
    //                             className={`info-row icons gloss ${stripes(
    //                                 index
    //                             )}`}>
    //                             <p className='icon-input'> </p>
    //                         </div>
    //                     )}
    //                 </React.Fragment>
    //             );
    //         });
    //     }
    // };

    // const showHaitian = () => {
    //     if (haitian) {
    //         return haitian.map((item, index) => {
    //             return (
    //                 <React.Fragment key={index}>
    //                     {item !== 'na' ? (
    //                         <div
    //                             className={`info-row icons gloss ${stripes(
    //                                 index
    //                             )}`}>
    //                             <a href={item}>
    //                                 <img
    //                                     className='icon-input svg'
    //                                     alt='Haitian Parent Letter Icon'
    //                                     src={TOCEditIcon}
    //                                 />
    //                             </a>
    //                         </div>
    //                     ) : (
    //                         <div
    //                             className={`info-row icons gloss ${stripes(
    //                                 index
    //                             )}`}>
    //                             <p className='icon-input'> </p>
    //                         </div>
    //                     )}
    //                 </React.Fragment>
    //             );
    //         });
    //     }
    // };

    const selectionsColumn = () => {
        if (Unit1SelectionSupport) {
            return Unit1SelectionSupport.map((item, index) => {
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
        if (Unit1SelectionSupport) {
            return Unit1SelectionSupport.map((item, index) => {
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
        if (Unit1SelectionSupport) {
            return Unit1SelectionSupport.map((item, index) => {
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
        if (Unit1SelectionSupport) {
            return Unit1SelectionSupport.map((item, index) => {
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
        if (Unit1SelectionSupport) {
            return Unit1SelectionSupport.map((item, index) => {
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
                <div className='above-points'>
                    <div className='sides'>
                        <div className='lefty'>
                            <h4 className='paragraph-header'>
                                Text-Specific Resources{' '}
                            </h4>
                            <p className='above-paragraph units'>
                                Use these resources in concert with{' '}
                                <i>Into Literature</i> units and texts to keep
                                your multilingual learners on track with the
                                content and skills you are teaching.
                            </p>
                        </div>
                        <div className='righty'>
                            <div className='key-container'>
                                <b className='key-header'>Key to Icons</b>
                                <div className='key-main'>
                                    <span className='key-item'>
                                        <img
                                            src={PDFIcon}
                                            className='key-icon'
                                            alt='PDF Icon'
                                        />
                                        <p className='key-text anchorKey'>
                                            Printable
                                        </p>
                                    </span>
                                    {/* <span className='key-item'>
                                        <img
                                            src={TOCEditIcon}
                                            className='key-icon edit'
                                            alt='TOC Icon'
                                        />
                                        <p className='key-text editable anchorKey'>
                                            Editable
                                        </p>
                                    </span> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='point-section'>
                    <ul className='left-points'>
                        <li className='point-item'>
                            <b className='bold-point'>
                                Multilingual Glossaries
                            </b>{' '}
                            These glossaries use students' home languages to
                            define Critical Vocabulary from grade 9{' '}
                            <i>Into Literature</i> selections plus Literary
                            Terms and Academic Vocabulary that students will
                            need as they develop English fluency. Available in
                            Spanish, Haitian Creole, Portuguese, Vietnamese,
                            French, Arabic, Chinese, Russian, Tagalog, and Urdu.
                        </li>
                        <li className='point-item bottoms'>
                            <b className='bold-point'>Spanish Unit Openers</b>{' '}
                            Bridge students to academic fluency by sharing unit
                            Essential Questions, Response Logs, Academic
                            Vocabulary instruction and glossary, and Selection
                            summaries in Spanish.
                        </li>
                        <li className='point-item bottoms'>
                            <b className='bold-point'>Multilingual Summaries</b>{' '}
                            Each selection is accompanied by a brief synopsis
                            available in English, Spanish, Haitian Creole, and
                            Brazilian Portuguese
                        </li>
                    </ul>
                    <ul className='right-points'>
                        <li className='point-item'>
                            <b className='bold-point'>
                                Summaries and Adapted Texts
                            </b>{' '}
                            Many selections also include an extended summary or
                            adapted text in simplified English to help bridge
                            students toward English comprehension.
                        </li>
                        <li className='point-item bottoms'>
                            <b className='bold-point'>Text Sketch</b> These
                            visual summaries are available for some selections
                            in both Spanish and simplified English.
                        </li>
                    </ul>
                </div>
            </section>
            <MultilingualOne />

            <h5 className='unit-title one'>Unit 1 Resources</h5>
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
                                <a href='https://www.hmhco.com/content/literature/read_studio/g9/student/pdf/09le_03_ese_U1_sp.pdf'>
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
export default Unit1Resources;
