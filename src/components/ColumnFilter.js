import React from "react";

export const ColumnFilter = ({ filterValue ,setFiltern }) =>{
    return (
        <span>
            Search:{' '}
            <input
                value={filterValue || '' }
                onChange={(e) => setFiltern(e.target.value)}
            />
        </span>
    )
}