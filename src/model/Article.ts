
export type ArticleSummary = {
  summary: string,
  authorId: string,
  timeStamp: Date
};

export type Article = {
  id: string,
  articleContent: string,
  summary: string,
  authorId: string,
  timestamp: Date
};
