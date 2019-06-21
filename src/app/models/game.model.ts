import { Comment } from './comment.model';

export class Game {
    id: number;
    location: string;
    time: Date;
    attendees: string[];
    comments: Comment[];
  }