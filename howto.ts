/// <reference path="./node_modules/@types/node/index.d.ts" />
import * as inquirer from './node_modules/inquirer'
import { Person } from './interfaces'
import { Rutificador } from './index';

const questions = [
    {
        type: 'input',
        name: 'id',
        message: 'What\'s your full name: ',
        default: () => {return 'Juan Valdez';}
    },
    {
        type: 'list',
        name: 'country',
        message: 'Where are you from: ',
        choices: [ 'Argentina', 'Chile', 'Costa Rica', 'Honduras', 'Paraguay', 'Peru' ],
        default: () => {return 'Costa Rica'}
    }
];
inquirer.prompt(questions).then(function (answer:Person) {
    try{
        const person:Person = answer;
        console.log(`> Searching for ${person.id} in ${person.country}:\n`);
        Rutificador.request(person).then((results:JSON) => {
            console.log(results);
        });
} catch (Ex){
    console.log(`No matches.`);
}
});