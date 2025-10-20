export enum EventType {
  MESSAGE = "message",
  GROUP_MESSAGE = "group_message",
  CONNECT = "connect",
}

export type Event = {
  type: EventType;
  payload: any;
};
