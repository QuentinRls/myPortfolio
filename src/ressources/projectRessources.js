const boxShadowSetter = (width) => {
    const initialShadows = width <= 1080 ?  
    [`rgb(91 75 210 / 40%) 0px 5px, 
  rgb(75 140 210 / 30%) 0px 10px, 
  rgb(75 203 210 / 20%) 0px 15px, 
  rgb(75 203 210 / 10%) 0px 20px, 
  rgb(75 210 186 / 5%) 0px 25px`,
      `rgb(91 75 210 / 40%) 0px 5px, 
  rgb(75 140 210 / 30%) 0px 10px, 
  rgb(75 203 210 / 20%) 0px 15px, 
  rgb(75 203 210 / 10%) 0px 20px, 
  rgb(75 210 186 / 5%) 0px 25px`,
      `rgb(91 75 210 / 40%) 0px 5px, 
  rgb(75 140 210 / 30%) 0px 10px, 
  rgb(75 203 210 / 20%) 0px 15px, 
  rgb(75 203 210 / 10%) 0px 20px, 
  rgb(75 210 186 / 5%) 0px 25px`]
  :
  [
    `rgb(91 75 210 / 40%) -5px 5px, 
  rgb(75 140 210 / 30%) -10px 10px, 
  rgb(75 203 210 / 20%) -15px 15px, 
  rgb(75 203 210 / 10%) -20px 20px, 
  rgb(75 210 186 / 5%) -25px 25px`,
    `rgb(91 75 210 / 40%) 0px 5px, 
  rgb(75 140 210 / 30%) 0px 10px, 
  rgb(75 203 210 / 20%) 0px 15px, 
  rgb(75 203 210 / 10%) 0px 20px, 
  rgb(75 210 186 / 5%) 0px 25px`,
    `rgb(91 75 210 / 40%) 5px 5px, 
  rgb(75 140 210 / 30%) 10px 10px, 
  rgb(75 203 210 / 20%) 15px 15px, 
  rgb(75 203 210 / 10%) 20px 20px, 
  rgb(75 210 186 / 5%) 25px 25px`
  ];
  return initialShadows;
}

export default boxShadowSetter;