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
    value:Object
}

export type Countries = "Argentina" |
                        "Chile" |
                        "Costa Rica" |
                        "Honduras" |
                        "Paraguay" |
                        "Peru";
