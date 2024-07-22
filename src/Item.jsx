import React from "react";
import { getMonth, useSeperateCount, useSeperateDate } from "./hooks";
import { ManatIcon } from "./icon";

export const Item = ({ data }) => {
  const { Name, date, new_count, old_count, ID } = data;

  const { startDay, endDay, startMonth, endMonth } = useSeperateDate(date);
  const { integerPart, decimalPart } = useSeperateCount(new_count);

  const finalStartMonth = getMonth(startMonth);
  const finalEndMonth = getMonth(endMonth);

  let trimmedOldCount = old_count.trim().replace(",", ".");
  const countClass = trimmedOldCount > 10 ? "high-count" : "low-count";

  return (
    <div key={Name} className="wrapper">
      <div className="first-column">
        <div>
          <h1>THE BODY SHOP</h1>
          <p>{Name}</p>
        </div>
        <span>SKU {ID}</span>
      </div>
      <div className="second-column">
        <div>
          <div className="date">
            {startDay} {finalStartMonth} - {endDay} {finalEndMonth}
          </div>
          <div className="super">SUPER QİYMƏT</div>
          <div className="new-count">
            <span className="int">{integerPart}</span>
            <div className="iconWrapper">
              <span className="dec">{decimalPart}</span>
              <ManatIcon />
            </div>
          </div>
        </div>
        <div className={`old-price-container ${countClass}`}>
          <div className="old">köhnə qiymət</div>
          <span className="old-count">
            {old_count} <ManatIcon />
          </span>
        </div>
      </div>
    </div>
  );
};
