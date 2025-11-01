export interface Message {
  role: "user" | "ai";
  text: string;
}

export interface Chat {
  id: string;
  title: string;
  messages: Message[];
}
