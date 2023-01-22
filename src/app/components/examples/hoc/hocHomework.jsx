import React from "react";

import CardWrapper from "../../common/Card";
import withFunctions from "./withFunctions";
import SimpleComponent from "./simpleComponent";
const HOCHomework = () => {
    const ComponentWithHoc = withFunctions(SimpleComponent);
    return (
        <>
            <CardWrapper>
                <ComponentWithHoc />
            </CardWrapper>
        </>
    );
};

export default HOCHomework;
