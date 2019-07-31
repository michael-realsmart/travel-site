import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");


//previous working
// var $ = require('jquery');
// import Person from './modules/Person';
//
//
// class Adult extends Person {
//   payTaxes() {
//     console.log(this.name + " Now owes $0 in taxes");
//   }
// }
//
// var john = new Person("John Doe", "Blue");
// john.greet();
//
// var jane = new Adult("Jane Smith", "Orange");
// jane.greet();
// jane.payTaxes();
