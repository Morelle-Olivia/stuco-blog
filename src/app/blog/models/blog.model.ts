import {BlogSection} from "./blog-section.model";

export interface Blog {
    id: string;
    title: string;
    createdAt: string;
    author: any;
    sections: BlogSection[],
    heroImage: any
}
