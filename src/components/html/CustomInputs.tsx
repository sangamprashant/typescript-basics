import React from "react";

type Props = React.ComponentProps<"input">;

const CustomInput = (props: Props) => {
  return <input {...props} />;
};

export default CustomInput;
