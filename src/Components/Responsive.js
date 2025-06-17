//  React Native la irukkura Dimensions edukkura
import { Dimensions } from 'react-native';

//  Current device screen oda width and height edukkarom
const { width, height } = Dimensions.get("window");

//  Base design resolution set panrom (reference width & height)
//  Usually figma / XD la design panna width/height
const guidelineBaseWidth = 350;    // Reference width
const guidelineBaseHeight = 660;   // Reference height

//  Device la actual width & height
const deviceWidth = width;
const deviceHeight = height;

//  1. responsiveHeight: Height ah % la convert panrathu
//  Example: responsiveHeight(20) = device height oda 20% ah return pannum
const responsiveHeight = (h) => (deviceHeight * h) / 100;

//  2. responsiveWidth: Width ah % la edukkarathu
//  Example: responsiveWidth(50) = screen width oda 50% value
const responsiveWidth = (w) => (deviceWidth * w) / 100;

//  3. Commonsize: Width base panni size scale panrathu
//  Font size, padding, margin la use panlam
const Commonsize = (size) => (deviceWidth / guidelineBaseWidth) * size;

//  4. Commonheight: Height base panni size scale panrathu
//  Vertical spacing, height use panna ithu helpful
const Commonheight = (size) => (deviceHeight / guidelineBaseHeight) * size;

//  5. Commonwidth: Moderate scale (medium scale value)
//  Scale panra value full-a perusa illa, small-a illa — balanced size
//  factor = 0.5 na half scaling
const Commonwidth = (size, factor = 0.5) => 
  size + (Commonsize(size) - size) * factor;

//  Example values (test purpose)
//  Intha lines use panna thevai illa – example ah mattum irukku
const exampleWidth = responsiveWidth(50);         // 50% screen width
const exampleHeight = responsiveHeight(20);       // 20% screen height
const exampleScale = Commonsize(14);              // Width scale for 14
const exampleVerticalScale = Commonheight(14);    // Height scale for 14
const exampleModerateScale = Commonwidth(14);     // Balanced scale 14


export {
  responsiveWidth,
  responsiveHeight,
  Commonsize,
  Commonheight,
  Commonwidth,
};
