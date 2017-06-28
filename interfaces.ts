export interface Person {
    id: string | number,
    country:URLS
}

export interface Options {
    url:string,
    transform:(body:any)=>void;
}

export interface JsonResponse {
    status:string,
    value:string
}

export type URLS = "ARG" | "CHI" | "CRC" | "HON" | "PAR" |  "PER";
