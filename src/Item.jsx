import React from "react";
import { getMonth, useSeperateCount, useSeperateDate } from "./hooks";
import { ManatIcon } from "./icon";

export const Item = ({ data }) => {
  const { Name, brand, date, description, new_count, old_count, ID } = data;

  const { startDay, endDay, startMonth, endMonth } = useSeperateDate(date);
  const { integerPart, decimalPart } = useSeperateCount(new_count);

  const finalStartMonth = getMonth(startMonth);
  const finalEndMonth = getMonth(endMonth);


  let trimmedOldCount = old_count.trim().replace(",", ".");
  const countClass =
    trimmedOldCount >= 10 && trimmedOldCount < 100
      ? "normal-count"
      : trimmedOldCount >= 100
      ? "high-count"
      : "low-count";

  return (
    <div key={Name} className="wrapper">
      <div className="first-column">
        <div>
          <h1>{brand}</h1>
          <p>{description}</p>
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
              <ManatIcon width={25} height={19} />
            </div>
          </div>
        </div>
        <div className={`old-price-container ${countClass}`}>
          <div className="old">köhnə qiymət</div>
          <span className="old-count">
            {old_count}
            <ManatIcon width={15} height={16} />
          </span>
        </div>
      </div>
    </div>
  );
};
