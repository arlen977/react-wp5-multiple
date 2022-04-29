import React from "react";
import { Button } from "antd";

import { getQueryVariable } from "@/utils";

import "./App.less";

export default () => {
    console.log(process.env.APP_ENV);
    console.log(getQueryVariable);
    return (
        <>
            <Button type="primary">测试按钮</Button>
            <h1 className="warning">第一页</h1>
        </>
    );
};
