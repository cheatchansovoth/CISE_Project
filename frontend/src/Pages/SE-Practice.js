import articles from "../dummydata/articles.js";
import React, { Component, useState, useEffect } from "react";
import Styles from "../components/tablestyle.js";
import Table from "../components/Evidencetable.js";
import tablecolumns from "../components/tablecolumns.js";
import axios, * as others from 'axios';
function SEPractice  () {

  const[articleList,setArticleList]=useState([]);
  useEffect(()=>
  {
      axios.get("http://localhost:5000/BookDetails").then((response)=>
      {
        setArticleList(response.data);
      })
  },[])

    return (
      <div>
        <h2>Select SE Practice to get evidence for the claimed benefits</h2>
               <Styles>
                 <Table
                  data={articleList}
                  columns={tablecolumns}
                 />
              </Styles>
      </div>
    );
}
 
export default SEPractice;  