Ext.define('hrm.view.EquipmentGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'equipmentgrid',

    requires: [
        'hrm.view.EmployeeController',
        'hrm.store.Equipment'
    ],

    store: {
        type: 'equipment',
        groupField: 'employee_name'
    },
    height: 600,

    selModel: {
        type: 'checkboxmodel', // checkboxes for selection
        mode: 'MULTI' // multiple selections
    },

    title: 'Equipments',
    controller: 'employee',

    features: [{
        ftype: 'grouping',                 
        groupHeaderTpl: '{name}',
        hideGroupedHeader: true,
        enableGroupingMenu: true,          
        startCollapsed: true              
    }],

    columns: [
        { text: 'Employee', dataIndex: 'employee_name', flex: 2 },
        { text: 'Equipment', dataIndex: 'equipment_name', flex: 2 },
        { text: 'Issued_on', dataIndex: 'created_at', flex: 2, xtype: 'datecolumn', format: 'Y-m-d H:i:s' },
        { text: 'Returned on', dataIndex: 'return_date', flex: 2, xtype: 'datecolumn', format: 'Y-m-d H:i:s' },
        {
            text: 'Actions',
            xtype: 'actioncolumn',
            items: [
                {
                    iconCls: 'x-fa fa-trash',
                    tooltip: 'Delete Equipment',
                    handler: 'onDeleteEquipment'
                },
                {
                    iconCls: 'x-fa fa-check',  
                    tooltip: 'Mark as Returned',
                    handler: 'returnClick'                    
                }
            ]
        }
    ],

    tbar: [{
        text: 'Issue Equipment',
        handler: 'onIssueEquipmentClick'
    }]
});
