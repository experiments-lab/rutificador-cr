import * as cheerio from "./node_modules/cheerio";
import * as request from './node_modules/request-promise';
import { Person, Options, JsonResponse, URLS } from "./interfaces";

const load = (cheerio:any, obj:any) => cheerio.load(obj);

export class Rutificador {
    private static url:string;
    private static options:Options;

    static defineURL(country:URLS): string {
        switch (country){
            case ("ARG"): return "http://argentina.Rutificador.com";
            case ("CHI"): return "https://chile.Rutificador.com";
            case ("CRC"): return "http://costarica.Rutificador.com";
            case ("HON"): return "http://honduras.Rutificador.com";
            case ("PAR"): return "http://paraguay.Rutificador.com";
            case ("PER"): return "http://peru.Rutificador.com";
            default: return "none";
        }
    };
    static transform(body:any) {
        return load(cheerio, body);
    };
    static request(person:Person){
        this.url = this.defineURL(person.country);
        this.options = {url:this.url,transform:this.transform};
        return request(this.options)
            .then(($:any) => $('input[name="csrfmiddlewaretoken"]').val())
            .then((token:any) => {
                const j = request.jar();
                const cookie = request.cookie(`csrftoken=${token}`);
                j.setCookie(cookie, `${this.url}/get_generic_ajax/`);

                return request.post({
                    url: `${this.url}/get_generic_ajax/`,
                    jar: j,
                    headers: {
                        'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.110 Safari/537.36',
                        'referer': this.url
                    },
                    form: {
                        entrada: person.id,
                        csrfmiddlewaretoken: token
                    }
                })
            })
            .then((resp:string) => {
                let json:JsonResponse = JSON.parse(resp);
                if (json.status !== "success") {
                    throw new Error(json.status)
                } else {
                    return json.value
                }
        });
    }
}