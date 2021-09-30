
import { Colors } from './colors';
import { Measures } from './measures';

const largeShadow = {  
           offsetX: {
                     measure: 0,
                     unit: "Pixels",
                     css: "0px"
                    },
           offsetY: {
                     measure: 24,
                     unit: "Pixels",
                     css: "24px"
                    },
           radius: {
                    measure: 40,
                    unit: "Pixels",
                    css: "40px"
                   },
           spread: {
                    measure: 0,
                    unit: "Pixels",
                    css: "0px"
                   },
           color: "#1a1a1a29",
         };
const smallShadow = {  
           offsetX: {
                     measure: 0,
                     unit: "Pixels",
                     css: "0px"
                    },
           offsetY: {
                     measure: 4,
                     unit: "Pixels",
                     css: "4px"
                    },
           radius: {
                    measure: 8,
                    unit: "Pixels",
                    css: "8px"
                   },
           spread: {
                    measure: 0,
                    unit: "Pixels",
                    css: "0px"
                   },
           color: "#1a1a1a33",
         };


export const Shadows = {
      largeShadow,
      smallShadow,
}