import React from "react";

function SidebarContainerCard({ data }) {
  return (
    <>
      <div className="sidebar--container">
        <div className="sidebar--heading">{data[0].heading}</div>
        <div className="sidebar--content">
          <label htmlFor={data[0].type1}>
            <input type="checkbox" id={data[0].type1} />
            &nbsp;&nbsp;&nbsp;{data[0].input1}
          </label>
          <label htmlFor={data[0].type2}>
            <input type="checkbox" id={data[0].type2} />
            &nbsp;&nbsp;&nbsp;{data[0].input2}
          </label>
          <label htmlFor={data[0].type3}>
            <input type="checkbox" id={data[0].type3} />
            &nbsp;&nbsp;&nbsp;{data[0].input3}
          </label>
        </div>
      </div>

      <div className="sidebar--container">
        <div className="sidebar--heading">{data[1].heading}</div>
        <div className="sidebar--content">
          <label htmlFor={data[1].type1}>
            <input type="radio" name="ratings" id={data[1].type1} />
            &nbsp;&nbsp;&nbsp;{data[1].input1}
          </label>
          <label htmlFor={data[1].type2}>
            <input type="radio" name="ratings" id={data[1].type2} />
            &nbsp;&nbsp;&nbsp;{data[1].input2}
          </label>
          <label htmlFor={data[1].type3}>
            <input type="radio" name="ratings" id={data[1].type3} />
            &nbsp;&nbsp;&nbsp;{data[1].input3}
          </label>
          <label htmlFor={data[1].type4}>
            <input type="radio" name="ratings" id={data[1].type4} />
            &nbsp;&nbsp;&nbsp;{data[1].input4}
          </label>
        </div>
      </div>

      <div className="sidebar--container">
        <div className="sidebar--heading">{data[2].heading}</div>
        <div className="sidebar--content">
          <label htmlFor={data[2].type1}>
            <input type="radio" name="price" id={data[2].type1} />
            &nbsp;&nbsp;&nbsp; {data[2].input1}
          </label>
          <label htmlFor={data[2].type2}>
            <input type="radio" name="price" id={data[2].type2} />
            &nbsp;&nbsp;&nbsp; {data[2].input2}
          </label>
        </div>
      </div>
    </>
  );
}

export default SidebarContainerCard;
