import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => (
    <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
    </div>
);

const withAdminInfo = (WrappedComponent) => {
    return (props) => (
        <div>
        {props.isAdmin && <p>This is secret information, dont share it!</p>}
        <WrappedComponent {...props} />
        </div>
    );
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
        {props.isAuthenticated ?  <WrappedComponent {...props}/>:<p>You need to login</p>}
        </div>
    );
}

const AdminInfo = withAdminInfo(Info);
const AutoInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="these are some details"/>, document.getElementById('app'));
ReactDOM.render(<AutoInfo isAuthenticated={true} info="these are some details"/>, document.getElementById('app'));
