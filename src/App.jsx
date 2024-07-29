import { useEffect, useState } from "react";
import { Item } from "./Item";

export default function App() {
  const [datas, setData] = useState([]);

  const apiKey = "AIzaSyDOE6MGEDwaq_d8MVhHC8Q_d9LdPHdBqA4";
  const spreadsheetId = "1-auXMbF7VAOGrKrJGGNF5Pi56wV2rHCL1i66gvEh5Yg";
  const sheetName = "pricetags";
  const range = `${sheetName}`;

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
        if (result.values) {
          const formattedData = result.values.slice(2).map((row) => ({
            ID: row[0],
            brand: row[1],
            Name: row[2],
            description: row[3],
            old_count: row[4],
            new_count: row[5],
            discount: row[6],
            date: row[7],
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
