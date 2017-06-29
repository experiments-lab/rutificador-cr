export interface Person {
    id: string | number,
    country:Countries
}

export interface Options {
    url:string,
    transform:(body:any)=>void;
}

export interface JsonResponse {
    status:string,
    value:JSON
}

export type Countries = "ARG" | "CHI" | "CRC" | "HON" | "PAR" |  "PER";
