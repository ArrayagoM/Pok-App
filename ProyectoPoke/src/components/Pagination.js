import React from "react";

const Pagination = (props) => {
    console.log(props);
const {onLeftClick, onRightClick, page, totalPges} = props;


return (
    <div className="pagination-coteiner">
        <button onClick={onLeftClick}>
            <div>
                <span role="img" aria-label="left" >👈</span>
                </div>
            </button>
        <div>{page} de {totalPges}</div>
        <button onClick={onRightClick}>
            <div>
                <span role="img" aria-label="right">👉</span>
                </div>
            </button>
    </div>
)

}

export default Pagination;