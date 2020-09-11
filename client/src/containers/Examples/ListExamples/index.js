import React from "react";
import Example from "../../../components/Example";

// Display Examples
const ListExamples = (props) => (
  <div className="search-examples">
    <ul>
    {props.examples.map((item, i) => {
        return <Example example={item} key={i} />
      })
    }
    </ul>
  </div>
);

export default ListExamples;
