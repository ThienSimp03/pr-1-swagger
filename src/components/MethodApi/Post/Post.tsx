import React from "react";
import TitleApi from "./TitleApi";
import BodyApi from "./BodyApi";
import ResponsesApi from "./ResponsesApi";
import ExampleApi from "./ExampleApi";

export default function Post() {
    return (
        <div>
            <TitleApi />
            <BodyApi />
            <ResponsesApi />
            <ExampleApi />
        </div>
    );
}
