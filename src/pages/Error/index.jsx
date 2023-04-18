import React, {useContext} from 'react';
import {context} from '../../context/context'
import './index.scss'
import { Link } from 'react-router-dom';


const index = () => {

    const { mode, LANG, lang } = useContext(context);

    const t = LANG[lang.toLowerCase()];
    return (
            <section className="page_404">
                <div className="container">
                    <div className="row">	
                    <div className="col-sm-12 ">
                        <div className="col-sm-10 col-sm-offset-1  text-center">
                            <div className="four_zero_four_bg">
                                <h1 className="text-center ">404</h1>
                                </div>
                                        <div className="contant_box_404">
                                        <h3 className="h2">
                                        {t.look}
                                        </h3>
                                        
                                        <p>{t.notpage}</p>
                                        
                                        <Link to="/home" className="link_404">{t.toHome}</Link>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default index;