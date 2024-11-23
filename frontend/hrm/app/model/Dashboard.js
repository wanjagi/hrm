// app/model/Employee.js
Ext.define('hrm.model.Dashboard', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'totalEmployees', type: 'int' },
        { name: 'totalEquipments', type: 'int' },
        { name: 'issuedEquipments', type: 'int' },
        { name: 'availableEquipments', type: 'int' },

    ]
});
