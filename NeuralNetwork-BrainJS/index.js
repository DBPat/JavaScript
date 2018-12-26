// input: { red, green, blue }
// ouput: { light, neutral, dark }

const classes = [
    { Engineering: 1, Undergrad: 1,  },
    { General: 1, Undergrad: 1 },
    { General: 1, Undergrad: 1 },
    { Engineering: 1, Undergrad: 1 },
    { General: 1, Undergrad: 1,  }, //end of fall 2015
    { Engineering: 1, Undergrad: 1 },
    { General: 1, Undergrad: 1 },
    { Engineering: 1, Undergrad: 1 },
    { Engineering: 1, Undergrad: 1 },
    { General: 1, Undergrad: 1 },
    { Software: 1, Undergrad: 1 }, //end of spring 2016
    { General: 1, Undergrad: 1 },
    { Biomedical: 1, Undergrad: 1 },
    { General: 1, Undergrad: 1 },
    { Engineering: 1, Undergrad: 1 },
    { Engineering: 1, Undergrad: 1 }, // end of fall 2016
    { Engineering: 1, Undergrad: 1 },
    { Engineering: 1, Undergrad: 1 },
    { Engineering: 1, Undergrad: 1 },
    { Software: 1, Undergrad: 1 },
    { Engineering: 1, Undergrad: 1 }, 
    { Engineering: 1, Undergrad: 1 }, // end of spring 2017
    { Biomedical: 1, Undergrad: 1 }, 
    { Other: 1, Undergrad: 1 },
    { Software: 1, Grad: 1 },
    { Other: 1, Undergrad: 1 }, 
    { Software: 1, Grad: 1 },
    { Software: 1, Grad: 1 }, // end of fall 2017
    { Biomedical: 1, Undergrad: 1 }, 
    { Biomedical: 1, Undergrad: 1 },
    { Biomedical: 1, Undergrad: 1 },
    { Biomedical: 1, Undergrad: 1 }, 
    { Other: 1, Undergrad: 1 },    
    { Engineering: 1, Grad: 1 },
    { Software: 1, Grad: 1 }, // end of spring 2017
    { Biomedical: 1, Undergrad: 1 }, 
    { Software: 1, Undergrad: 1 },
    { Biomedical: 1, Undergrad: 1 },
    { Biomedical: 1, Undergrad: 1 }, 
    { Biomedical: 1, Undergrad: 1 },    
    { Engineering: 1, Grad: 1 },
    { Software: 1, Grad: 1 }, // end of fall 2017
];

const grades = [
    { A: 1 },
    { A: 1 },
    { A: 1 },
    { B: 1 },
    { A: 1 },//end of fall 2015
    { A: 1 },
    { A: 1 },
    { A: 1 },
    { A: 1 },
    { A: 1 },
    { A: 1 }, //end of spring 2016
    { A: 1 },
    { A: 1 },
    { A: 1 },
    { A: 1 },
    { A: 1 }, // end of fall 2016
    { A: 1 },
    { A: 1 },
    { A: 1 },
    { A: 1 },
    { A: 1 },
    { 'B+': 1 }, //end of spring 2017
    { 'B+': 1 },
    { A: 1 },
    { A: 1 },
    { A: 1 },
    { A: 1 },
    { A: 1 }, //end of fall 2017
    { A: 1 },
    { B: 1 },
    { B: 1 },
    { A: 1 },
    { B: 1 },
    { A: 1 },
    { A: 1 }, //end of spring 2018
    { A: 1 },
    { A: 1 },
    { B: 1 },
    { A: 1 },
    { A: 1 },
    { A: 1 },
    { A: 1 }, //end of fall 2018
];

const trainingData = [];

for (let i = 0; i < classes.length; i++) {
    trainingData.push({
        input: classes[i],
        output: grades[i]
    });
}

const net = new brain.NeuralNetwork({ hiddenLayers: [3,2] });

var stats = net.train(trainingData);
console.log(stats);

console.log(net.run(Array.from({Other: 1, Undergrad: 1})));