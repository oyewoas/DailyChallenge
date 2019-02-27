const getInputTypeSupport = () => {

    'use strict';

    const types = {
        color: 'a',
        date: 'b',
        time: 'c',
        month: 'd',
        number: 'e'
    };

    const supports = {};

    const test = (type, value) => {
        const input = document.createElement('input');
        input.setAttribute('type', type);
        input.setAttribute('value', value);
        return (input.value !== value);
    };

    for (let key in types) {
        if (types.hasOwnProperty(key)) {
            if (test(key, types[key])) {
                supports[key] = true;
            }
        }
    }

    return supports;

};

const supports = getInputTypeSupport();
if ('color' in supports) { document.documentElement.classList.add('supports-color'); }
if ('date' in supports) { document.documentElement.classList.add('supports-date'); }
if ('time' in supports) { document.documentElement.classList.add('supports-time'); }
if ('month' in supports) { document.documentElement.classList.add('supports-month'); }

validate.init({
    disableSubmit: true,
    onSubmit: function () {
        alert('Form submitted successfully!');
    },
});