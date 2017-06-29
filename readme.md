*Typing* strong with TypeScript
=================================

This is a little modification of the original chilean rutificador from @mrpatiwi, see the [original rutificador](https://github.com/mrpatiwi/rutificador) and [the web chilean RUT](https://chile.rutificador.com/).

The original is written in __ES6__, I wanted to put in practice my recent learning in __TypeScript__, so I translated everything to simple-strong-typed-typescript code.

Just run:

 ```bash
 npm install
 npm start
 ```
 
 By the way, this one supports not only the chilean RUT, you can search also for people from:
 
  - Argentina
  - Costa Rica
  - Honduras
  - Paraguay
  - Peru

##### See the sample output from npm start
```bash
$ npm start
> rutificador-cr@0.5.0 start
> ts-node howto.ts

? What's your full name: Juan Valdez
? Where are you from: Costa Rica
> Searching for Juan Valdez in Costa Rica:

[ { ci: '112760582', name: 'JUAN DIEGO VALDEZ MADRIGAL' },
  { ci: '207240707', name: 'JUAN FRANCISCO SOMOZA VALDEZ' },
  { ci: '402210957', name: 'JUAN ANTONIO ZUÑIGA VALDEZ' },
  { ci: '502000620', name: 'JUAN CARLOS VALDEZ OBANDO' },
  { ci: '602760717', name: 'JUAN CARLOS SOTO VALDEZ' },
  { ci: '603810259', name: 'JUAN GABRIEL GOMEZ VALDEZ' },
  { ci: '800800021', name: 'JUAN ANTONIO RIVAS VALDEZ' },
  { ci: '800920557', name: 'JUAN AMAURYS RAMIREZ VALDEZ' },
  { ci: '800990860', name: 'JUAN ESTEBAN VALDEZ CUELLO' },
  { ci: '900860984', name: 'JUAN ANTONIO VALDEZ PASTRAN' } ]

  ```

That is all. Happy Hacking :octocat:

#### **PD**: index.ts is the core class and interfaces.ts are models.
