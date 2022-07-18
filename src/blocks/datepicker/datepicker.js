import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';


// let button = {
//     content: 'Select 2021-07-26',
//     className: 'custom-button-classname',
//     onClick: (dp) => {
//         let date = new Date('2021-07-26');
//         dp.selectDate(date);
//         dp.setViewDate(date);
//     }
// }

// let dp = new AirDatepicker('.datepicker', {
//     buttons: [button, 'clear'] // Custom button, and pre-installed 'clear' button
// })
let dp = new AirDatepicker('.datepicker');


dp.hide();
