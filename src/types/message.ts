export interface Message {
  id: number;
  author: string;
  text: string;
  timestamp: string;
  isOwn: boolean;
  avatarUrl: string;
}
