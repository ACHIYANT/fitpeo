import React from "react";
export default function loginUser({title='Test',designation='Test'}){
    return (
        <div className="login-user active">
            <div className="avatar">
                <img src="https://i.pravatar.cc/150?img=14" alt="" height={40} width={40} />
            </div>
            <div className="details">
                <div className="login-name">{title}</div>
                <div className="login-designation">{designation}</div>
            </div>
            <i className="fa fa-caret-down"></i>
        </div>
    );
}