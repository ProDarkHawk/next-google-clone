import React from "react";

export interface IBaseTemplate extends React.ComponentPropsWithoutRef<"div"> {
  sampleTextProp: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({
  className,
  sampleTextProp,
  ...otherDivProps
}) => {
  return (
    <div
      {...otherDivProps}
      className={`bg-gradient-to-r from-blue-200 to-blue-900 ${className}`}
    >
      {sampleTextProp}
    </div>
  );
};

export default BaseTemplate;
