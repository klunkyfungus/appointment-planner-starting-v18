import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {
  return (
    <div>
      {props.prop.map((item, index) => {
        //console.log(item);
        let {name, ...rest} = item;
        //console.log(rest);
        return (
          <Tile key={index} name={name} description={rest}/>
        )
      })}
    </div>
  );
};
