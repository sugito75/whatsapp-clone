import { config } from "@/constants/config";
import { EventEmitter } from "events";
import { Event, EventType } from "./type";

class WebSocketService extends EventEmitter {
  ws: WebSocket | null = null;

  connect() {
    if (this.ws) return;
    const conn = new WebSocket(`${config.API.WEB_SOCKET}/ws?`);

    this.ws = conn;

    this.ws.onopen = () => {
      this.emit(EventType.CONNECT);
    };

    this.ws.onmessage = ({ data }) => {
      const { type, payload } = data as Event;
      this.emit(type, payload);
    };

    this.ws.onclose = () => {
      this.ws = null;
    };
  }

  send(event: Event) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      return this.ws.send(JSON.stringify(event));
    }

    console.log("err: connection closed");
  }

  disconnect() {
    this.ws?.close();
    this.ws = null;
  }
}

const ws = new WebSocketService();
export default ws;
