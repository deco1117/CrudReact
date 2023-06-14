import React, { useState, useContext, useEffect } from "react";
import { context } from "../../context/context";
import { Link } from "react-router-dom";
import Loader from "../../UI/Loader";
import API from "../../api/API";
import Del from "../../assets/images/del.svg";

const index = ({ setMode, setLang }) => {
  const { mode, LANG, lang } = useContext(context);
  const t = LANG[lang.toLowerCase()];
  const theme = mode ? "off" : "on";

  function del(id) {
    API.deleteUser(id).then((data1) => {
      API.getUsers().then(data => {
        setData(data);
        setLoad(true);
      });
    });
  }

  const headerStyle = {
    backgroundColor: mode === "off" ? "white" : "black",
  };
  let status = true;

  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  function changeActive(id, isActive) {
    API.activationUser(id, { isActive: isActive }).then((data1) => {
      API.getUsers().then((data) => {
        setData(data);
      });
    });
  }

  useEffect(() => {
    API.getUsers().then(data => {
      setData(data);
      setLoad(true);
    });

  }, []);

  if (!load) {
    return <Loader />;
  }

  return (
    <>
      <div className="">
        <table class="table table-striped mt-20">
          <thead>
            <tr>
              <th scope="col" className="table-head">
                {t.name}
              </th>
              <th scope="col" className="table-head">
                {t.sname}
              </th>
              <th scope="col" className="table-head">
                {t.phone}
              </th>
              <th scope="col" className="table-head">
                {t.status}
              </th>
            </tr>
          </thead>
          {data?.map((data) => {
            return (
              <tbody>
                <tr className="items-center">
                  <th scope="row" className="table-body">
                    {data.firstName}
                  </th>
                  <td className="table-body">{data.secondName}</td>
                  <td className="table-body">{data.phoneNumber}</td>
                  <td className="table-body">
                    {data.isActive ? (
                      <button   onClick={() => changeActive(data.id, !data.isActive)} className="btn btn-danger">{t.deactivate}</button>
                    ) : (
                      <button
                        onClick={() => changeActive(data.id, !data.isActive)}
                        className="btn btn-success ">
                        {t.actived}
                      </button>
                    )}
                  </td>
                  <td>
                    <button className="btn btn-outline-danger p-2 ml-2 border-[1px]" onClick={() => del(data.id)}>

                      <img src={Del} />
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default index;
