
import { Measures } from './measures';
const h1 = {
           fontFamily: "Poppins",
           fontStyle: "normal",
           fontWeight: 900,
           fontSize: {
                      measure: 54,
                      unit: "Pixels",
                      css: "54px"
                     },
           lineHeight: {
                          measure: 150,
                          unit: "Percent",
                          css: "150%"
                         },
           letterSpacing: {
                             measure: -1.85,
                             unit: "Percent",
                             css: "-1.85%"
                            },
           textIndent: {
                        measure: 0,
                        unit: "Pixels",
                        css: "0px"
                       },
         };
const h2 = {
           fontFamily: "Poppins",
           fontStyle: "normal",
           fontWeight: 700,
           fontSize: {
                      measure: 32,
                      unit: "Pixels",
                      css: "32px"
                     },
           lineHeight: {
                          measure: 150,
                          unit: "Percent",
                          css: "150%"
                         },
           letterSpacing: {
                             measure: -3.12,
                             unit: "Percent",
                             css: "-3.12%"
                            },
           textIndent: {
                        measure: 0,
                        unit: "Pixels",
                        css: "0px"
                       },
         };
const overline = {
           fontFamily: "Poppins",
           fontStyle: "normal",
           fontWeight: 600,
           fontSize: {
                      measure: 14,
                      unit: "Pixels",
                      css: "14px"
                     },
           letterSpacing: {
                             measure: 35.71,
                             unit: "Percent",
                             css: "35.71%"
                            },
           textIndent: {
                        measure: 0,
                        unit: "Pixels",
                        css: "0px"
                       },
         };
const body = {
           fontFamily: "Hind",
           fontStyle: "normal",
           fontWeight: 400,
           fontSize: {
                      measure: 16,
                      unit: "Pixels",
                      css: "16px"
                     },
           lineHeight: {
                          measure: 150,
                          unit: "Percent",
                          css: "150%"
                         },
           letterSpacing: {
                             measure: 0,
                             unit: "Percent",
                             css: "0%"
                            },
           textIndent: {
                        measure: 0,
                        unit: "Pixels",
                        css: "0px"
                       },
         };
const bodySmall = {
           fontFamily: "Hind",
           fontStyle: "normal",
           fontWeight: 400,
           fontSize: {
                      measure: 14,
                      unit: "Pixels",
                      css: "14px"
                     },
           lineHeight: {
                          measure: 150,
                          unit: "Percent",
                          css: "150%"
                         },
           letterSpacing: {
                             measure: 0,
                             unit: "Percent",
                             css: "0%"
                            },
           textIndent: {
                        measure: 0,
                        unit: "Pixels",
                        css: "0px"
                       },
         };


export const Typographies = {
      h1,
      h2,
      overline,
      body,
      bodySmall,
}