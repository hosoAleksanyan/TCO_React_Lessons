import React from "react";

const Info = React.memo((props) => {

    console.log(props);

    return (
        <React.Fragment>
            <h2 style={{textAlign: "center", fontSize: "25px"}}>
                {props.deletedTasks} tasks are deleted
            </h2>
        </React.Fragment>
    );
})

export default Info;