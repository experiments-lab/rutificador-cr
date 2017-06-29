import { Person } from './interfaces'
import { Rutificador } from './index';


try{
    const person:Person = {id:"Jose Carrillo Angulo", country:"CRC"};
    console.log(`> Searching for ${person.id} in ${person.country}:\n`);

    Rutificador.request(person).then((joses:JSON) => {
        console.log(joses);
    });
} catch (Ex){
    console.log(`No matches.`); //For some reason this turned out to be not working
}

/* How-to

 Just declare a Person var and send it with Rutificador
 Note: id can also be a CI number

    Supported countries:
        ARG: Argentina
        CRC: Costa Rica
        CHI: Chile
        HON: Honduras
        PAR: Paraguay
        PER: Peru
 */