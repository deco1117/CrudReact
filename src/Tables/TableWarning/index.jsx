import React, { useState, useEffect, useContext } from "react";
import { context } from "../../context/context";
import { Link } from "react-router-dom";
import API from "../../api/API";

const index = ({ setMode, setLang }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.getRepair2().then((data) => {
      setData(data);
    });
  }, []);

  function changeActive(id) {
    API.editRepair(id).then((data1) => {
      API.getActive().then((data) => {
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
      <div className="mt-10 ml-6">
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
                {t.address}
              </th>
              <th scope="col" className="table-head">
                {t.dataActivation}
              </th>
              <th scope="col" className="table-head">
                {t.dataRepair}
              </th>
              <th scope="col" className="table-head">
                {t.activated}
              </th>
              <th scope="col" className="table-head"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item.id} className="items-center">
                  <th scope="row" className="table-body">
                    {item.name}
                  </th>
                  <td className="table-body">{item.number}</td>
                  <td className="table-body">{item.address}</td>
                  <td className="table-body">{ (new Date(item.dateOfActivation)).toLocaleDateString()}</td>
                  <td className="table-body">{(new Date (item.dateOfRepair2)).toLocaleDateString()}</td>
                  <td className="table-body">{item.userFullname}</td>
                  <td className="table-body">
                    <button
                      onClick={() => changeActive(item.id)}
                      className="btn bg-[#FEAF00;] studentlist__header--end-button"
                    >
                      {t.repairr}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default index;
