import Vue from 'vue'

import EventSearchDialog from './EventSearchDialog.vue';

function open(propsData) {
    const EventSearchDialogComponent = Vue.extend(EventSearchDialog);
    return new EventSearchDialogComponent({
        el: document.createElement('div'),
        propsData
    });
}

export default {
    show(params, extraFields) {
        const defaultParam = {
            title: 'Create menu',
            inputClass: null,
            overrideInputClass: false,
            createButtonLabel: 'Create',
            //  -------------------------
            date: null,
            startTime: null,
            endTime: null,
            enableTimeInputs: true,
            menuItems: [{
                "imageSrc": require("../../assets/9911237be10c33aed28e70768d438d5d.jpg"),
                "title": "Lentil Dahl",
                "subtitle": "$ 4.50"
            }, {
                "imageSrc": require("../../assets/achari-chana-masala-chickpeas-curry-with-pickles-spices-2020439.jpg"),
                "title": "Curry Massala",
                "subtitle": "$ 5.00"
            }, {
                "imageSrc": require("../../assets/9911237be10c33aed28e70768d438d5d.jpg"),
                "title": "Lentil Dahl",
                "subtitle": "$ 4.50"
            }, {
                "imageSrc": require("../../assets/achari-chana-masala-chickpeas-curry-with-pickles-spices-2020439.jpg"),
                "title": "Curry Massala",
                "subtitle": "$ 5.00"
            }, {
                "imageSrc": require("../../assets/9911237be10c33aed28e70768d438d5d.jpg"),
                "title": "Lentil Dahl",
                "subtitle": "$ 4.50"
            }, {
                "imageSrc": require("../../assets/achari-chana-masala-chickpeas-curry-with-pickles-spices-2020439.jpg"),
                "title": "Curry Massala",
                "subtitle": "$ 5.00"
            }, {
                "imageSrc": require("../../assets/9911237be10c33aed28e70768d438d5d.jpg"),
                "title": "Lentil Dahl",
                "subtitle": "$ 4.50"
            }, {
                "imageSrc": require("../../assets/achari-chana-masala-chickpeas-curry-with-pickles-spices-2020439.jpg"),
                "title": "Curry Massala",
                "subtitle": "$ 5.00"
            }, {
                "imageSrc": require("../../assets/9911237be10c33aed28e70768d438d5d.jpg"),
                "title": "Lentil Dahl",
                "subtitle": "$ 4.50"
            }, {
                "imageSrc": require("../../assets/achari-chana-masala-chickpeas-curry-with-pickles-spices-2020439.jpg"),
                "title": "Curry Massala",
                "subtitle": "$ 5.00"
            }]
        };

        const propsData = Object.assign(defaultParam, params);

        const defaultFields = [
            {
                name: 'date',   //  Required
                type: 'date',   //  def: 'text'
                label: 'Date',  //  def: this.name
                // showLabel: false,    //  def: true
                required: true, //  def: false,
                value: propsData.date,   //  def: null
            }
        ];

        if (propsData.enableTimeInputs)
            defaultFields.splice(1, 0, {
                label: 'Times',
                fields: [
                    {
                        name: 'startTime',
                        type: 'time',
                        label: 'Start Time',
                        required: true,
                        value: propsData.startTime
                    },
                    {
                        name: 'endTime',
                        type: 'time',
                        label: 'End Time',
                        required: true,
                        value: propsData.endTime
                    }
                ]
            });

        propsData.fields = extraFields ? defaultFields.concat(extraFields) : defaultFields;
        return open(propsData);
    }
}