import React from 'react'; 

import Sketch from 'react-p5';
import Sample from './sample/Sample.jpg';



var x, y; 


var r; 




export default function P5Mold(){


    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(1200,600).parent(canvasParentRef);
                r = p5.width * 0.10;
        p5.noStroke();  
        p5.fill(30);
        p5.translate(p5.width/2, p5.height/2); 
            p5.beginShape();
            p5.vertex(0, -r);
                p5.quadraticVertex(r, -r, r, 0); 
                p5.quadraticVertex(r, r, 0, r); 
                p5.quadraticVertex(-r, r, -r, 0);
                p5.quadraticVertex(-r, -r, 0, -r);
            p5.endShape();
    }

    const draw = p5 => {
        p5.background(225);
        p5.translate(width/2, height/2); 
        
        p5.push();
        p5.scale(mouseX/100, mouseY/100);
        
        p5.translate(p5.width/2, p5.height/2); 
        p5.beginShape();
            p5.vertex(0, -r);
                p5.quadraticVertex(r, -r, r, 0); 
                p5.quadraticVertex(r, r, 0, r); 
                p5.quadraticVertex(-r, r, -r, 0);
                p5.quadraticVertex(-r, -r, 0, -r);
            p5.endShape();
    }

     return <Sketch setup={setup} draw={draw} />  
    }