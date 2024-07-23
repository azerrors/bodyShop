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
    const parts = date?.split("-");

    const startParts = parts[0].split(".");
    const endParts = parts[1].split(".");

    const start = startParts[0];
    const startM = startParts[1];
    const end = endParts[0];
    const endM = endParts[1];

    setStartDay(start);
    setEndDay(end);
    setStartMonth(startM);
    setEndMonth(endM);
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
