# wolfram alpha proxy api
This source code does  searching query created by consumer.


## Development server

Run `nodemon server.js` for a dev server. Navigate to `http://localhost:3000/api/search/json`. The app will automatically reload if you change any of the source files.


## query with wolfram Alpha
```
Title : Query by consumer in json format.
URL : http://localhost:3000/api/search/json
Method : POST 
Data Params : { query:[string]}
Example: {
	"query":"2+2"
}
Success Response: 
Example: 
{
    "success": true,
    "error": false,
    "numpods": 6,
    "datatypes": "Math",
    "timedout": "",
    "timedoutpods": "",
    "timing": 0.886,
    "parsetiming": 0.078,
    "parsetimedout": false,
    "recalculate": "",
    "id": "MSPa143823e4810dd91ed7i700000i9ha072257ei6ih",
    "host": "https://www4d.wolframalpha.com",
    "server": "25",
    "related": "https://www4d.wolframalpha.com/api/v2/relatedQueries.jsp?id=MSPa143923e4810dd91ed7i70000463c9bg62i7i68h23121044613458118784",
    "version": "2.6",
    "pods": [
        {
            "title": "Input",
            "scanner": "Identity",
            "id": "Input",
            "position": 100,
            "error": false,
            "numsubpods": 1,
            "subpods": [
                {
                    "title": "",
                    "img": {
                        "src": "https://www4d.wolframalpha.com/Calculate/MSP/MSP144023e4810dd91ed7i700000id2ab8cf0if7a3g?MSPStoreType=image/gif&s=25",
                        "alt": "2 + 2",
                        "title": "2 + 2",
                        "width": 30,
                        "height": 18
                    },
                    "plaintext": "2 + 2"
                }
            ]
        },
        {
            "title": "Result",
            "scanner": "Simplification",
            "id": "Result",
            "position": 200,
            "error": false,
            "numsubpods": 1,
            "primary": true,
            "subpods": [
                {
                    "title": "",
                    "img": {
                        "src": "https://www4d.wolframalpha.com/Calculate/MSP/MSP144123e4810dd91ed7i700003i9gg2ca465666e1?MSPStoreType=image/gif&s=25",
                        "alt": "4",
                        "title": "4",
                        "width": 8,
                        "height": 18
                    },
                    "plaintext": "4"
                }
            ],
            "states": [
                {
                    "name": "Step-by-step solution",
                    "input": "Result__Step-by-step solution",
                    "stepbystep": true
                }
            ]
        },
        {
            "title": "Number line",
            "scanner": "NumberLine",
            "id": "NumberLine",
            "position": 300,
            "error": false,
            "numsubpods": 1,
            "subpods": [
                {
                    "title": "",
                    "img": {
                        "src": "https://www4d.wolframalpha.com/Calculate/MSP/MSP144223e4810dd91ed7i7000065e2e15cic5495gg?MSPStoreType=image/gif&s=25",
                        "alt": "",
                        "title": "",
                        "width": 300,
                        "height": 51
                    },
                    "plaintext": ""
                }
            ]
        },
        {
            "title": "Number name",
            "scanner": "Integer",
            "id": "NumberName",
            "position": 400,
            "error": false,
            "numsubpods": 1,
            "subpods": [
                {
                    "title": "",
                    "img": {
                        "src": "https://www4d.wolframalpha.com/Calculate/MSP/MSP144323e4810dd91ed7i700002d2267af2ccc9aa9?MSPStoreType=image/gif&s=25",
                        "alt": "four",
                        "title": "four",
                        "width": 28,
                        "height": 18
                    },
                    "plaintext": "four"
                }
            ]
        },
        {
            "title": "Manipulatives illustration",
            "scanner": "Arithmetic",
            "id": "Illustration",
            "position": 500,
            "error": false,
            "numsubpods": 1,
            "subpods": [
                {
                    "title": "",
                    "img": {
                        "src": "https://www4d.wolframalpha.com/Calculate/MSP/MSP144423e4810dd91ed7i700001124bg4dibfd5330?MSPStoreType=image/gif&s=25",
                        "alt": " | + | | = | \n2 | | 2 | | 4",
                        "title": " | + | | = | \n2 | | 2 | | 4",
                        "width": 130,
                        "height": 48
                    },
                    "plaintext": " | + | | = | \n2 | | 2 | | 4"
                }
            ]
        },
        {
            "title": "Typical human computation times",
            "scanner": "Arithmetic",
            "id": "TypicalHumanComputationTimes",
            "position": 600,
            "error": false,
            "numsubpods": 1,
            "subpods": [
                {
                    "title": "",
                    "microsources": {
                        "microsource": "HumanComputationQuery"
                    },
                    "img": {
                        "src": "https://www4d.wolframalpha.com/Calculate/MSP/MSP144523e4810dd91ed7i7000035b0991hea579ba0?MSPStoreType=image/gif&s=25",
                        "alt": "age 6: 3.2 seconds | age 8: 1.8 seconds | age 10: 1.2 seconds | \nage 18: 0.83 seconds\n(ignoring concentration, repetition, variations in education, etc.)",
                        "title": "age 6: 3.2 seconds | age 8: 1.8 seconds | age 10: 1.2 seconds | \nage 18: 0.83 seconds\n(ignoring concentration, repetition, variations in education, etc.)",
                        "width": 449,
                        "height": 64
                    },
                    "plaintext": "age 6: 3.2 seconds | age 8: 1.8 seconds | age 10: 1.2 seconds | \nage 18: 0.83 seconds\n(ignoring concentration, repetition, variations in education, etc.)"
                }
            ],
            "states": [
                {
                    "name": "More details",
                    "input": "TypicalHumanComputationTimes__More details"
                }
            ]
        }
    ],
    "sources": {
        "url": "https://www.wolframalpha.com/sources/HumanComputationQuerySourceInformationNotes.html",
        "text": "Human computation query"
    }
}
Response Codes: Success (200 OK), Bad Request (400)

```

```
Title : Query by consumer in xml format.
URL : http://localhost:3000/api/search/xml
Method : POST 
Data Params : { query:[string]}
Example: {
	"query":"2+2"
}
Success Response: 
Example: 
<?xml version='1.0' encoding='UTF-8'?>
<queryresult success='true'
    error='false'
    numpods='6'
    datatypes='Math'
    timedout=''
    timedoutpods=''
    timing='0.796'
    parsetiming='0.077'
    parsetimedout='false'
    recalculate=''
    id='MSPa178213g400g388c8h09700000ffe6bicdc392ai0'
    host='https://www4d.wolframalpha.com'
    server='38'
    related='https://www4d.wolframalpha.com/api/v2/relatedQueries.jsp?id=MSPa178313g400g388c8h09700005h838d568686ac102206861520850736438'
    version='2.6'>
    <pod title='Input'
     scanner='Identity'
     id='Input'
     position='100'
     error='false'
     numsubpods='1'>
        <subpod title=''>
            <img src='https://www4d.wolframalpha.com/Calculate/MSP/MSP178413g400g388c8h09700003fb3gag95e39i25b?MSPStoreType=image/gif&amp;s=38'
       alt='2 + 2'
       title='2 + 2'
       width='30'
       height='18' />
            <plaintext>2 + 2</plaintext>
        </subpod>
    </pod>
    <pod title='Result'
     scanner='Simplification'
     id='Result'
     position='200'
     error='false'
     numsubpods='1'
     primary='true'>
        <subpod title=''>
            <img src='https://www4d.wolframalpha.com/Calculate/MSP/MSP178513g400g388c8h0970000145g818b7ad41gfg?MSPStoreType=image/gif&amp;s=38'
       alt='4'
       title='4'
       width='8'
       height='18' />
            <plaintext>4</plaintext>
        </subpod>
        <states count='1'>
            <state name='Step-by-step solution'
       input='Result__Step-by-step solution'
       stepbystep='true' />
        </states>
    </pod>
    <pod title='Number line'
     scanner='NumberLine'
     id='NumberLine'
     position='300'
     error='false'
     numsubpods='1'>
        <subpod title=''>
            <img src='https://www4d.wolframalpha.com/Calculate/MSP/MSP178613g400g388c8h0970000616gc4a7142613c9?MSPStoreType=image/gif&amp;s=38'
       alt=''
       title=''
       width='300'
       height='51' />
            <plaintext></plaintext>
        </subpod>
    </pod>
    <pod title='Number name'
     scanner='Integer'
     id='NumberName'
     position='400'
     error='false'
     numsubpods='1'>
        <subpod title=''>
            <img src='https://www4d.wolframalpha.com/Calculate/MSP/MSP178713g400g388c8h09700001903chdab8hagg3g?MSPStoreType=image/gif&amp;s=38'
       alt='four'
       title='four'
       width='28'
       height='18' />
            <plaintext>four</plaintext>
        </subpod>
    </pod>
    <pod title='Manipulatives illustration'
     scanner='Arithmetic'
     id='Illustration'
     position='500'
     error='false'
     numsubpods='1'>
        <subpod title=''>
            <img src='https://www4d.wolframalpha.com/Calculate/MSP/MSP178813g400g388c8h097000048917bbga3i24ea4?MSPStoreType=image/gif&amp;s=38'
       alt=' | + | | = | 
2 | | 2 | | 4'
       title=' | + | | = | 
2 | | 2 | | 4'
       width='130'
       height='48' />
            <plaintext> | + | | = | 
2 | | 2 | | 4</plaintext>
        </subpod>
    </pod>
    <pod title='Typical human computation times'
     scanner='Arithmetic'
     id='TypicalHumanComputationTimes'
     position='600'
     error='false'
     numsubpods='1'>
        <subpod title=''>
            <microsources>
                <microsource>HumanComputationQuery</microsource>
            </microsources>
            <img src='https://www4d.wolframalpha.com/Calculate/MSP/MSP178913g400g388c8h09700000cge4fcd681fe1g1?MSPStoreType=image/gif&amp;s=38'
       alt='age 6: 3.2 seconds | age 8: 1.8 seconds | age 10: 1.2 seconds | 
age 18: 0.83 seconds
(ignoring concentration, repetition, variations in education, etc.)'
       title='age 6: 3.2 seconds | age 8: 1.8 seconds | age 10: 1.2 seconds | 
age 18: 0.83 seconds
(ignoring concentration, repetition, variations in education, etc.)'
       width='449'
       height='64' />
            <plaintext>age 6: 3.2 seconds | age 8: 1.8 seconds | age 10: 1.2 seconds | 
age 18: 0.83 seconds
(ignoring concentration, repetition, variations in education, etc.)</plaintext>
        </subpod>
        <states count='1'>
            <state name='More details'
       input='TypicalHumanComputationTimes__More details' />
        </states>
    </pod>
    <sources count='1'>
        <source url='https://www.wolframalpha.com/sources/HumanComputationQuerySourceInformationNotes.html'
      text='Human computation query' />
    </sources>
</queryresult>
Response Codes: Success (200 OK), Bad Request (400)

```

