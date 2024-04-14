import React from "react";

type GenericsListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

const GenericsList = <T extends {}>({ items, onClick }: GenericsListProps<T>) => {
  return (
    <div>
      <h2>List Of Items</h2>
      {items.map((item, index) => {
        return (
          <div key={index} onClick={() => onClick(item)}>
            {String(item)} {/* Convert item to string */}
          </div>
        );
      })}
    </div>
  );
};

export default GenericsList;
