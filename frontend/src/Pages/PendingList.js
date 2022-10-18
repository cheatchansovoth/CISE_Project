import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBInput,
} from "mdb-react-ui-kit";
import axios from "axios";
import { Link } from "react-router-dom";

const PendingList = () => {

    const [Pendingbooks, setPendingBooks] = useState([]);
    const [fetchedData, setFetchData] = useState(true);

    const triggerDataFetch = () => setFetchData(t => !t);
 
 /* useEffect(() => {
    const storeData = JSON.parse(localStorage.getItem("token"));
    const x = 0;
    if (x=0){
        //storeData.isAdmin == "true") {
      Axios.get("http://localhost:5000/PendingBooks").then((response) => {
        setPendingBooks(response.data);
      });
    } else {
      window.location.href = "/login";
    }
  }, []);*/
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:5000/PendingBooks`);
      setPendingBooks(res.data);
    };
    fetchData();
  }, [fetchedData]);

  const Deny = id => 
    {
       axios.delete(`http://localhost:5000/PendingBooks/${id}`)
      triggerDataFetch()
  }
  
  const Accept = id =>
    {
       axios.post(`http://localhost:5000/PendingBooks/accept/${id}`)
      triggerDataFetch()
  }
  


  return (
    <div>
      <h1 className="mt-5">Pending Books</h1>
      <MDBTable>
        <MDBTableHead dark>
          <tr>
          <th scope="col">title</th>
            <th scope="col">title</th>
            <th scope="col">authors</th>
            <th scope="col">source</th>
            <th scope="col">pubyear</th>
            <th scope="col">doi</th>
            <th scope="col">claim</th>
            <th scope="col">evidence</th>
            <th scope='col'>Accept or Deny</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {Pendingbooks.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val._id}</td>
                <td>{val.title}</td>
                <td>{val.authors}</td>
                <td>{val.source}</td>
                <td>{val.pubyear}</td>
                <td>{val.doi}</td>
                <td>{val.claim}</td>
                <td>{val.evidence}</td>
                <td>
                        <Button variant="primary" onClick={()=>Accept(val._id)}>Accept</Button>
                        <Button variant="danger" onClick={()=>Deny(val.id)}>Remove</Button>
                        </td>
              </tr>
            );
          })}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
};
export default PendingList;
