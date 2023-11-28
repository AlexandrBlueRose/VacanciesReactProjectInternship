interface ISeoMain {
    title: string;
    description: string;
    favicon: string;
    keywords: string;
    author: string;
}
interface ISocialData {
    title: string;
    description: string;
    image: string;
    url: string;
}

export interface IHead extends ISeoMain {
    social?: ISocialData;
}
