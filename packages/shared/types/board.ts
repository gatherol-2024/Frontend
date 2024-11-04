interface AuthorType extends DateType {
  name: string;
  email: string;
  googleImage: string;
  userImage?: string;
  nickname?: string;
  id: string;
}

interface DateType {
  createdAt: string;
  deletedAt?: string;
  updatedAt?: string;
}

export interface BoardType extends DateType {
  isActivated: boolean;
  title: string;
  author: AuthorType;
  category: string;
  content: string;
  id: number;
}

export interface CommentType {
  id: number;
  author: AuthorType;
  createdAt: string;
  content: string;
  parentId?: number;
  childComments?: CommentType[];
}
