import React, { useState, useEffect, useContext } from "react";
import { context } from "../../context/context";
import { Link } from "react-router-dom";
import Edit from "../../assets/images/edit.svg";
import Del from "../../assets/images/del.svg";
import API from "../../api/API";

const index = ({ setMode, setLang }) => {

    const [data, setData] = useState([]);
    
    useEffect(() => {
        API.getStore().then((res) => {
            if (res.status == 200) {
                setData(res.data.data);
            }
        });
        
    }, []);

    
    const { mode, LANG, lang } = useContext(context);

    const t = LANG[lang.toLowerCase()];

    const theme = mode ? "off" : "on";

    const headerStyle = {
        backgroundColor: mode === "off" ? "white" : "black",
        color: mode === "off" ? "black" : "white",
    };

    return (
        <div>
            <div className="">
                <table class="table table-striped mt-[20px]">
                    <thead>
                        <tr>
                            <th scope="col" className="table-head">
                                {t.typeRele}
                            </th>
                            <th scope="col" className="table-head">
                                ID
                            </th>
                            <th scope="col" className="table-head">
                                {t.manufacturedDate}
                            </th>
                            <th scope="col" className="table-head">
                                {t.term}
                            </th>
                            <th scope="col" className="table-head">
                                {t.quotedDate}
                            </th>
                            <th scope="col" className="table-head"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item)=> {
                                return <tr key={item.id}>
                                            <th scope="row" className="table-body">
                                            {item.name}
                                            </th>
                                            <td className="table-body">{item.number}</td>
                                            <td className="table-body">{item.createdDate}</td>
                                            <td className="table-body">{item.duration}</td>
                                            <td className="table-body">16.05.2021</td>
                                            <td className="table-body">
                                                
                                                <button className="btn btn-outline-warning p-2 border-[1px]">
                                                    
                                                    <img src={Edit} />
                                                </button>
                                                <button className="btn btn-outline-danger p-2 ml-2 border-[1px]">
                                                    
                                                    <img src={Del} />
                                                </button>
                                            </td>
                                        </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default index;
