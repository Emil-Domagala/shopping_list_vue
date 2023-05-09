import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

app.component('font-awesome-icon', FontAwesomeIcon);

// app.config.productionTip = 'https://kit.fontawesome.com/6fc85de251.js';
// new Vue({
//     el: '#app',
//     components: { App },
//     template: '<App/>',
// });

export default fontAwesome;
