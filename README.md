### 表单设计器

​	基于Vue + iView + Vux开发的表单设计器。

##### 1. 表单设计器

​		通过**拖拽**左侧组件完成页面设计，单击组件在右侧属性面板修改组件属性。

<img src="https://raw.githubusercontent.com/ShawnLeo/form-design/master/src/assets/images/form-design.png" alt="表单设计器" style="width:80%;" />

<div  style="text-align: center;font-size:12px;">图1-1 表单设计器</div>

##### 2. 组件列表

​	组件列表分为：布局组件和表单组件。

##### 3. 预览

<img src="https://raw.githubusercontent.com/ShawnLeo/form-design/master/src/assets/images/preview-pc.jpg" alt="pc预览" style="width:80%;" />

<div  style="text-align: center;font-size:12px;">图3-1 pc预览</div>

<img src="https://raw.githubusercontent.com/ShawnLeo/form-design/master/src/assets/images/preview-webapp.jpg" alt="webapp预览" style="width:80%;" />

<div  style="text-align: center;font-size:12px;">图3-2 webapp预览</div>

##### 4. 组件设计规范（可以自定义表单组件）

样例：

```json
{
    "info": { // 固定格式
        "name": "文本框",
        "key": "mmt-input", // key值勿重复
        "type": "form-item", // "form-item"-表单项  "layout"-布局类型
        "url": "", // 远程组件地址
        "icon": "" // 组件图标
    },
    "config": {  // 配置项根据组件自定义
        "label": "文本框",
        "vshow": true,
        "require": false,
        "tsize": "medium",
        "maxLength": 80
    },
    "cdata": ""
}
```

​	

##### 5. 使用

> ​	*注意： pc端需要依赖 iview， 移动端需要依赖 vux

1. 安装 mmt-form-design

   ```
   import FormDesign from 'mmt-form-design';
   Vue.use(FormDesign);
   ```

2. 安装依赖

   ```
   // 依赖iview组件
   import iView from 'iview';
   Vue.use(iView);
   // 依赖Vux组件
   import Vue from 'vue';
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
   
   ```

3. 使用

   ```
   <template>
     <div>
     	<!--设计器-->
       <form-decorate :formData="formData" :layoutComponents="layoutComponents"
                 :formComponents="formComponents"></form-decorate>
       <!--pc预览-->
       <form-preview :formData="formData"></form-preview>
       
       <!--webapp预览-->
       <form-preview-webapp :formData="formData"></form-preview-webapp>
     </div>
   </template>
   
   <script>
     import {
     	formDecorate, // 设计器组件
       formPreview,  // pc预览组件
       formPreviewWebapp, // webapp预览组件
       layoutComponents,  //布局组件
       formComponents // 表单项组件（可以动态增加）
     } from 'mmt-form-design';
     import {customFormComponents} from '../custom-components'; // 可以自定义表单组件
     export default {
       data() {
         return {
         	layoutComponents: layoutComponents,
           formComponents: [...formComponents,...customFormComponents],
         	formData: {
             gridList: [],
             info: {}
           }
         };
       },
       components: {
         formDecorate, formPreview, formPreviewWebapp
       }
     }
   </script>
   ```

   



