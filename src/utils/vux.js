import Vue from 'vue';

import { TransferDom } from 'vux';
import {Checklist, Datetime, XInput, XNumber, Card, Radio, Selector, XTextarea, Group, XTable, Popup, XButton} from 'vux';

Vue.component(Checklist.name, Checklist);
Vue.component(Datetime.name, Datetime);
Vue.component(XInput.name, XInput);
Vue.component(XNumber.name, XNumber);
Vue.component(Card.name, Card);
Vue.component(Radio.name, Radio);
Vue.component(Selector.name, Selector);
Vue.component(XTextarea.name, XTextarea);
Vue.component(Group.name, Group);
Vue.component(XTable.name, XTable);
Vue.component(Popup.name, Popup);
Vue.component(XButton.name, XButton);
Vue.directive('transfer-dom', TransferDom);
