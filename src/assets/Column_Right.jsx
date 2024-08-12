import React from "react"
import { LineChart } from '@mui/x-charts/LineChart';
import BasicArea from "./Chart";

export default function RigthBar() {
  return (
    <div className="right">
        <BasicArea />
        <BasicArea />
        <BasicArea />
        <BasicArea />
        <BasicArea />
    </div>
  );
}