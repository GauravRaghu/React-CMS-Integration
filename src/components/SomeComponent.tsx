import React from "react";

interface StaticlyLoadedCompProps {
  title: string;
}

const StaticlyLoadedComp: React.FC<StaticlyLoadedCompProps> = ({ ...props }): JSX.Element => {
  return <h2 className="component-boundary">{props.title}</h2>;
};

export { StaticlyLoadedComp };
