Ext.define('hrm.view.EquipmentForm', {
    extend: 'Ext.window.Window',
    xtype: 'equipmentform',

    
    controller: 'employee',
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
            {
                xtype: 'combobox',
                fieldLabel: 'Employee',
                name: 'employee_name',
                store: {
                    type: 'employee'  // Using the employee store created above
                },
                displayField: 'name',  // Display the employee's name
                valueField: 'name',      // Use the employee's ID for submission
                queryMode: 'remote',   // Query remote API for employees
                allowBlank: false,     // Make this a required field
                forceSelection: true,  // Force the user to select from the list
                editable: false,       // Disable typing in the combobox
                emptyText: 'Select an employee'
            },
            {
                xtype: 'combobox',
                fieldLabel: 'Category',
                name: 'category',
                store: {
                    type: 'allequipments' // Reusing the same store
                },
                displayField: 'category',  // Display the category name
                valueField: 'category',    // Use the category value for filtering
                queryMode: 'local',        // Use local filtering
                allowBlank: false,         // Make this a required field
                forceSelection: true,      // Only allow selection from the list
                editable: false,           // Disable typing
                emptyText: 'Select a category',
                listeners: {
                    change: 'onCategoryChange' // Handle category change to filter equipment
                }
            },
            {
                xtype: 'combobox',
                fieldLabel: 'Equipment',
                name: 'equipment_name',
                store: {
                    type: 'allequipments' // Same store for equipment
                },
                displayField: 'name',      // Display the equipment name
                valueField: 'id',          // Use the equipment ID for submission
                queryMode: 'local',        // Filter locally after loading data
                allowBlank: false,         // Make this a required field
                forceSelection: true,      // Only allow selection from the list
                editable: false,           // Disable typing
                emptyText: 'Select equipment'
            }
            
        ],
    },


    
    buttons: [
        {
            text: 'Save',
            handler: 'onSaveIssueEquipmentClick'  
        },
        {
            text: 'Cancel',
            handler: 'onCancelClick'
        }
    ]
});
