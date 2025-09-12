"use client"

import { useEffect } from "react";
import sendEnrichedGAEvent from "./tracker";

interface ITrackerGaProps {
  eventName: string;
  params?: any;
}

export default function TrackerGa({ eventName, params }: ITrackerGaProps) {

  useEffect(() => {
    sendEnrichedGAEvent({ eventName, params })
  }, [])


  return (<div></div>)
}
