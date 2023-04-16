import {BlogSection} from "./blog-section.model";

export interface Blog {
    id: string;
    title: string;
    sections: BlogSection[],
    heroImage: any
}
