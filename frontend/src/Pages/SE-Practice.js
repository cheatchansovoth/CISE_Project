import benefitDropdown from"../components/benefitDropdown.js"
import EvidenceDropbox from"../components/levelOfEvidenceDropdown.js"
import React, { Component, useState, useEffect } from "react";
import Styles from "../components/tablestyle.js";
import Table from "../components/Evidencetable.js";
import tablecolumns from "../components/tablecolumns.js";
import axios, * as others from "axios";
function SEPractice() {
  const [articleList, setArticleList] = useState([]);
  const [query, setQuery] = useState("");
  const [Edvidence , setEdvidence ] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:5000/BookDetailsFind?q=${query}`);
      setArticleList(res.data);
      const dropdown = await axios.get(`http://localhost:5000/BookDetailsEvidence`);
      setEdvidence(dropdown.data);
    };
    if (query.length === 0 || query.length > 2) fetchData();
  }, [query]);

  return (
    <div>
      <h2>Select SE Practice to get evidence for the claimed benefits</h2>
      <EvidenceDropbox
      Evidencedrop
      />
      <input
          type="text"
          placeholder="Search..."
          className="Search"
          onChange={(e) => setQuery(e.target.value)}
        />

      <Styles>


        <Table data={articleList} columns={tablecolumns} />
      </Styles>
    </div>
  );
}

export default SEPractice;
