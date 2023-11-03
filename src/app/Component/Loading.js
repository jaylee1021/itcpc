import React from "react";
import ReactLoading from "react-loading";

function LoadingCircle() {
    return (
        <div style={{ justifyContent: 'center', display: 'flex' }}>
            <ReactLoading type="spokes" color="black"
                height={100} width={50} />
        </div>
    );
}

function LoadingLine() {
    return (
        <div style={{ justifyContent: 'center', display: 'flex' }}>
            <ReactLoading type="bubbles" color="black"
                width={50} />
        </div>
    );
}

export { LoadingCircle, LoadingLine };