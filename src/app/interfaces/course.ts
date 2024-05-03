export interface Course {
  _id: string;
  courseCode: number;
  name: string;
  description: string;
  imageUrl: string;
  videoUrl: string;
  quizUrl: string;
  topics: Topic[];
  __v: number;
}

export interface Topic {
  topic: string;
  contents: Content[];
  _id: string;
}

export interface Content {
  content: string;
  _id: string;
}
