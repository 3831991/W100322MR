export interface Article {
    id: number;
    createdTime: string;
    userId: number;
    title: string;
    subTitle: string;
    body: string;
    imgId: number;
    publishTime: string;
    reporterId: number;
    categoryId: number;
    isDeleted: boolean;
}