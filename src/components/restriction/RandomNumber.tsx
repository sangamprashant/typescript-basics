import React from "react";

type RandomNumberType = {
  value: number;
};

type PositiveNumber = RandomNumberType & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};

type NegativeNumber = RandomNumberType & {
  isPositive?: never;
  isNegative: boolean;
  isZero?: never;
};

type ZeroNumber = RandomNumberType & {
  isPositive?: never;
  isNegative?: never;
  isZero: boolean;
};

type RandomNumberProps = PositiveNumber | NegativeNumber | ZeroNumber;

const RandomNumber = ({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumberProps) => {
  let message = "";
  if (isPositive) {
    message = "Positive Number";
  } else if (isNegative) {
    message = "Negative Number";
  } else if (isZero) {
    message = "Zero";
  }

  return (
    <div>
      <p>Number: {value}</p>
      <p>Message: {message}</p>
    </div>
  );
};

export default RandomNumber;
