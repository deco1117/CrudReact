import React, { useState, useContext, useEffect } from "react";
import { context } from "../../context/context";
import { Link } from "react-router-dom";
import API from "../../api/API";
import Loader from "../../UI/Loader";

const index = ({ setMode, setLang }) => {

  const [load, setLoad] = useState(false);  
  const [data, setData] = useState([]);

  useEffect(() => {
    API.getRepair().then((data) => {
      setData(data);
      setLoad(true);
    });
  }, []);

  if (!load) {
    return <Loader />;
  }

  
  function toStore(id) {
    API.editStore(id).then((data1) => {
      API.getRepair().then((data) => {
        setData(data);
      });
    });
  }

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
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col" className="table-head">
                {t.typeRele}
              </th>
              <th scope="col" className="table-head">
                ID
              </th>
              <th scope="col" className="table-head">
                {t.dataRepair}
              </th>
              <th scope="col" className="table-head">
                {t.sent}
              </th>
              <th scope="col" className="table-head"></th>
            </tr>
          </thead>
          {data?.map((data) => {
            return (
              <tbody>
                <tr className="items-center">
                  <th scope="row" className="table-body">{data.name}</th>
                  <td className="table-body">{data.number}</td>
                  <td className="table-body">{(new Date(data.dateOfRepair)).toLocaleDateString()}</td>
                  <td className="table-body">{data.userFullname}</td>
                  <td className="table-body">
                  <button
                      onClick={() => toStore(data.id)}
                      className="btn bg-[#FEAF00;] studentlist__header--end-button"
                    >
                      {t.returnBase}
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default index;
