import React from "react";

interface DynamicallyLoadedComponentProps {
  title: string;
}

const DynamicallyLoadedComponent: React.FC<DynamicallyLoadedComponentProps> = ({ ...props }): JSX.Element => {
  return <h2 className="component-boundary">{props.title}</h2>;
};

export { DynamicallyLoadedComponent };
