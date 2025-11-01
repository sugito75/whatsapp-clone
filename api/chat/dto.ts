export type Chat = {
  id: number;
  chatType: string;
  title: string;
  icon: string;
  lastMessage: {
    status: string;
    text: string;
    sentAt: Date;
    senderId: number;
  };
};
