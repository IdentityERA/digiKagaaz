import React from "react";
import { Button } from "react-bootstrap";

const Country = () => {
  return (
    <div>
      <div className="container">
        <div className="roles-scope-box">
          <h2 className="rc-header">
            <strong>Country</strong>
          </h2>
          <div className="col-11">
            <div className="row">
              <div className="col-5 m-3">
                <Button variant="primary">Add Country</Button>
              </div>
              <div className="col-6 m-3">
                <Button variant="success" style={{float:"right"}}>Upload countries CSV</Button>
              </div>
            </div>
          </div>

          <div className="roles-scope-box-body">
            <div className="container table-responsive">
              <table className="table table-bordered table-hover">
                <thead className="thead-dark">
                  <tr>
                    <th className="apiendpoint" scope="col">
                      Sl.No
                    </th>
                    <th className="centertext" scope="col">
                      Country Name
                    </th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
