import React, { useEffect, useState } from "react";

export const getMonth = (month) => {
  switch (month) {
    case "01":
      return "yanvar";
    case "02":
      return "fevral";
    case "03":
      return "mart";
    case "04":
      return "aprel";
    case "05":
      return "may";
    case "06":
      return "iyun";
    case "07":
      return "iyul";
    case "08":
      return "avqust";
    case "09":
      return "sentyabr";
    case "10":
      return "oktyabr";
    case "11":
      return "noyabr";
    case "12":
      return "dekabr";
    default:
      return "";
  }
};

export const useSeperateDate = (date) => {
  const [startDay, setStartDay] = useState("");
  const [endDay, setEndDay] = useState("");
  const [startMonth, setStartMonth] = useState("");
  const [endMonth, setEndMonth] = useState("");

  useEffect(() => {
    if (date && date.includes("-")) {
      const parts = date.split("-");
      if (parts.length === 2) {
        const [startDate, endDate] = parts;
        const startParts = startDate.split(".");
        const endParts = endDate.split(".");

        if (startParts.length === 3 && endParts.length === 3) {
          setStartDay(startParts[0]);
          setStartMonth(startParts[1]);
          setEndDay(endParts[0]);
          setEndMonth(endParts[1]);
        }
      }
    }
  }, [date]);

  return { startDay, endDay, startMonth, endMonth };
};

export const useSeperateCount = (new_count) => {
  const [integerPart, setIntegerPart] = useState("");
  const [decimalPart, setDecimalPart] = useState("");

  useEffect(() => {
    const [intPart, decPart] = new_count.toString().split(".");
    setIntegerPart(intPart);
    setDecimalPart(decPart);
  }, [new_count]);
  return { integerPart, decimalPart };
};
