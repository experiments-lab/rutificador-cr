export interface Person {
    id: string | number,
    country:COUNTRIES
}

export interface Options {
    url:string,
    transform:(body:any)=>void;
}

export interface JsonResponse {
    status:string,
    value:string
}

export type COUNTRIES = "ARG" | "CHI" | "CRC" | "HON" | "PAR" |  "PER";
