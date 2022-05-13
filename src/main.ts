import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { Field, Form, ErrorMessage } from 'vee-validate';
import 'bootstrap/dist/js/bootstrap.bundle.js';
//@ts-ignore
// window.bootstrap = import();
import * as rules from "@vee-validate/rules";
import { defineRule, configure } from "vee-validate";
configure({
    validateOnInput: true
  });
  
  // Install all rules
  Object.keys(rules).forEach((rule) => {
      try {
        defineRule(rule, rules[rule]);
      } catch (error) {
        console.error(rule);          
      }
  });
  
const app = createApp(App)
app.component('Field', Field);
app.component('Form', Form);
app.component('ErrorMessage', ErrorMessage);
app.use(router)
app.use(store)
app.mount('#app')
