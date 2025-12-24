import React from "react";

export const Root = (props) => {
    const {children} = props;
    return (
        <div className="wrapper">
            <div className="root">
                <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100">
                    { children }
                </div>
            </div>
        </div>
    )
}