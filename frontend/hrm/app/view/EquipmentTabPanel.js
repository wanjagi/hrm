Ext.define('hrm.view.EquipmentTabPanel', {
    extend: 'Ext.tab.Panel',
    xtype: 'equipmenttabpanel',

    requires: [
        'hrm.view.AllEquipmentsController',
        'hrm.store.AllEquipments'
    ],

    controller: 'allequipments',
    height: 600,
    width: '100%',
    bodyStyle: 'background-color: #f9f8f9; padding: 10px;',

    defaults: {
        xtype: 'grid',
        height: '100%',
        columnLines: true,
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
        },
        selModel: {
            type: 'checkboxmodel',
            mode: 'MULTI'
        },
        tbar: [
            {
                text: 'Add Equipment',
                iconCls: 'x-fa fa-plus-circle', 
                scale: 'medium',
                handler: 'onAddEquipmentClick'
            },
            '->',
            {
                text: 'Delete',
                iconCls: 'x-fa fa-plus-circle',
                scale: 'medium',
                handler: 'onRecordDelete'
            },
    
        ],
    
        bbar: {
            xtype: 'pagingtoolbar',
            displayInfo: true,
            displayMsg: 'Displaying equipments {0} - {1} of {2}',
            emptyMsg: 'No equipment to display'
        }
    },

    items: [
        {
            title: 'Computers',
            store: {
                type: 'allequipments',
                filters: [
                    { property: 'category', value: 'monitor' } // Filter for computers
                ]
            },
            columns: [
                //{ text: 'ID', dataIndex: 'id', flex: 1, align: 'center', style: 'font-weight: bold;' },
                { text: 'Name', dataIndex: 'name', flex: 2, align: 'center', style: 'font-weight: bold;' },
                { text: 'Serial Number', dataIndex: 'serial_number', flex: 2, align: 'center', style: 'font-weight: bold;' },
                { text: 'Description', dataIndex: 'description', flex: 2, align: 'center', style: 'font-weight: bold;' },
                {
                    text: 'Actions',
                    xtype: 'actioncolumn',
                    width: 100,
                    items: [
                        {
                            iconCls: 'x-fa fa-edit',
                            tooltip: 'Edit Equipment',
                            style: 'color: #007bff;',
                            handler: 'onEditEquipmentclick'
                        },
                        {
                            iconCls: 'x-fa fa-trash',
                            tooltip: 'Delete Equipment',
                            style: 'color: #dc3545;',
                            handler: 'onDeleteEquipment'
                        }
                    ]
                }
            ]
        },
        {
            title: 'Printers',
            store: {
                type: 'allequipments',
                filters: [
                    { property: 'type', value: 'Printer' } // Filter for printers
                ]
            },
            columns: [
                { text: 'ID', dataIndex: 'id', flex: 1, align: 'center', style: 'font-weight: bold;' },
                { text: 'Name', dataIndex: 'name', flex: 2, align: 'center', style: 'font-weight: bold;' },
                { text: 'Serial Number', dataIndex: 'serial_number', flex: 2, align: 'center', style: 'font-weight: bold;' },
                { text: 'Description', dataIndex: 'description', flex: 2, align: 'center', style: 'font-weight: bold;' },
                {
                    text: 'Actions',
                    xtype: 'actioncolumn',
                    width: 100,
                    items: [
                        {
                            iconCls: 'x-fa fa-edit',
                            tooltip: 'Edit Equipment',
                            style: 'color: #007bff;',
                            handler: 'onEditEquipmentclick'
                        },
                        {
                            iconCls: 'x-fa fa-trash',
                            tooltip: 'Delete Equipment',
                            style: 'color: #dc3545;',
                            handler: 'onDeleteEquipment'
                        }
                    ]
                }
            ]
        },
        {
            title: 'Furniture',
            store: {
                type: 'allequipments',
                filters: [
                    { property: 'type', value: 'Furniture' } // Filter for furniture
                ]
            },
            columns: [
                { text: 'ID', dataIndex: 'id', flex: 1, align: 'center', style: 'font-weight: bold;' },
                { text: 'Name', dataIndex: 'name', flex: 2, align: 'center', style: 'font-weight: bold;' },
                { text: 'Serial Number', dataIndex: 'serial_number', flex: 2, align: 'center', style: 'font-weight: bold;' },
                { text: 'Description', dataIndex: 'description', flex: 2, align: 'center', style: 'font-weight: bold;' },
                {
                    text: 'Actions',
                    xtype: 'actioncolumn',
                    width: 100,
                    items: [
                        {
                            iconCls: 'x-fa fa-edit',
                            tooltip: 'Edit Equipment',
                            style: 'color: #007bff;',
                            handler: 'onEditEquipmentclick'
                        },
                        {
                            iconCls: 'x-fa fa-trash',
                            tooltip: 'Delete Equipment',
                            style: 'color: #dc3545;',
                            handler: 'onDeleteEquipment'
                        }
                    ]
                }
            ]
        }
    ]
});
