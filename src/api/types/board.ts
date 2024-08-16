interface Board {
  id: number;
  type: string;
  title: string;
  content: string;
  owner: string;
  images: [];
  videos: [];
  createdAt: string;
  updatedAt: string;
  views: number;
}

export default Board;
