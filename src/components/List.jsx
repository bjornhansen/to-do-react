import React from "react";

export default function List({children}) {
    return (
        <ul className="max-w-screen-md mx-auto px-2 my-6">
            {children.length > 0 ? children : <div className="text-center text-slate-400">Empty list</div>}
        </ul>
    );
}