import { sendGAEvent } from "@next/third-parties/google";

interface IGAEventProps {
  eventName: string;
  params?: any;
}
export default function sendEnrichedGAEvent({eventName, params}: IGAEventProps) {
  const enrichedParams = {
    user_uuid: getOrSetUserUUID(),
    event_time: new Date().toISOString(),
    ...params,
  }

  sendGAEvent("event", eventName, enrichedParams);
}

function getOrSetUserUUID() {
  let userUUID = sessionStorage.getItem("userUUID");
  if (!userUUID) {
    userUUID = crypto.randomUUID();
    sessionStorage.setItem("userUUID", userUUID);
  }
  return userUUID;
}
