Ext.define('hrm.view.AllEquipmentsForm', {
    //extend: 'Ext.form.Panel',
    extend: 'Ext.window.Window',
    xtype: 'allequipmentsform',

    controller: 'allequipments',

    modal: true,
    width: 600,
    height: 600,
    layout: 'fit',
    resizable: false,
    closable: true,
    padding: 10,

    items: {
        xtype: 'form',
        defaults: {
            xtype: 'textfield',
            anchor: '100%',
            allowBlank: false
        },
        items: [
            { xtype: 'textfield', name: 'name', fieldLabel: 'Name', allowBlank: false },
            { xtype: 'textfield', name: 'serial_number', fieldLabel: 'Serial Number', allowBlank: false },
            { xtype: 'textfield', name: 'description', fieldLabel: 'Description', allowBlank: false },
            {
                xtype: 'combobox',
                fieldLabel: 'Category',
                name: 'category',
                store: {
                    type: 'allequipments'  // Using the employee store created above
                },
                displayField: 'category',  // Display the employee's name
                valueField: 'category',      // Use the employee's ID for submission
                queryMode: 'remote',   // Query remote API for employees
                allowBlank: false,     // Make this a required field
                forceSelection: true,  // Force the user to select from the list
                editable: false,       // Disable typing in the combobox
                emptyText: 'Select Category'
            },
        ],
    },


    
    buttons: [
        { text: 'Save', handler: 'onSaveEquipmentClick' },
        {
            text: 'Cancel',
            handler: function (btn) {
                btn.up('window').close();
            }
        }
    ]
});
