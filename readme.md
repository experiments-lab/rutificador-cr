Typing strong code with TypeScript
=================================

This is a little modification of the original chilean rutificador from @mrpatiwi, see the [original rutificador](https://github.com/mrpatiwi/rutificador) and [the web chilean RUT](https://chile.rutificador.com/)
.

The original is written in ECMA2015, I wanted to put in practice my recent learning in TS, so I translated everything to simple-strong typed-typescript code.

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

###### See the sample output from npm start
```bash
$ npm start
> rutificador-cr@0.0.1 start E:\DMZ\JS\typescript\projects\2017 06\rutificador-cr
> ts-node howto.ts

> Searching for Jose Carrillo Angulo in CRC:

[ { ci: '113380768', name: 'JOSE ANTONIO CARRILLO ANGULO' },
  { ci: '603060004', name: 'JOSE ALBERTO ANGULO CARRILLO' },
  { ci: '603590---', name: 'JOSE MANUEL CARRILLO ANGULO' }, //Friend of mine hehe. Sorry Carrillo!
  { ci: '701190666', name: 'JOSE MAURICIO CARRILLO ANGULO' },
  { ci: '503870776', name: 'MARLIN JOSE ANGULO CARRILLO' } ]

  ```

That is all. Happy Hacking :octocat:

#### **PD**: index.ts is the core class and interfaces.ts are models.
