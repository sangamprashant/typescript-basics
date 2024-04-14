import React from "react";

type Props = {
  varient: "success" | "primary";
  children: string;
} & Omit<React.ComponentProps<"button">, "children">;

const CustomButton = ({ varient, children, ...rest }: Props) => {
  return (
    <button className={`button-with-${varient}`} {...rest}>
      {children}
    </button>
  );
};

export default CustomButton;
