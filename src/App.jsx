import { useEffect, useState } from "react";
import { Item } from "./Item";
import { data } from "./data";
// import { google } from "googleapis";

export default function App() {
  const [datas, setData] = useState([]);

  const apiKey = "AIzaSyDOE6MGEDwaq_d8MVhHC8Q_d9LdPHdBqA4";
  const spreadsheetId = "1nLEVB2Egh7tAqV4F14bX6VE7o52RtX20bp-N_0t8YKA";
  const sheetName = "main";
  const range = `${sheetName}!A:G`; // Adjust the range as needed

  // !A:G
  useEffect(() => {
    const fetchData = async () => {
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        console.log("API Response:", result);
        if (result.values) {
          const formattedData = result.values.slice(2).map((row) => ({
            ID: row[0],
            Name: row[1],
            "Əczaçı bonus": row[2],
            old_count: row[3],
            new_count: row[4],
            discount: row[5],
            date: row[6],
          }));
          setData(formattedData);
        } else {
          console.log("No data found.");
          setData([]);
        }
      } catch (error) {
        console.error("Error fetching data from Google Sheets:", error);
      }
    };

    fetchData();
  }, [apiKey, spreadsheetId, range]);

  return (
    <div className="container">
      {datas.map((a, index) => (
        <Item data={a} key={index} />
      ))}
    </div>
  );
}
