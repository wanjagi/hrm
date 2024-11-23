Ext.define('hrm.view.EmployeeGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'employeegrid',

    requires: [
        'hrm.view.EmployeeController',
        'hrm.store.Employee'
    ],

    store: {
        type: 'employee'
    },
    height: 600,

    selModel: {
        type: 'checkboxmodel',
        mode: 'MULTI' // Allows multiple selections
    },

    title: 'Employees',

    controller: 'employee',

    viewConfig: {
        stripeRows: true,
        enableTextSelection: true
    },

    
    bodyStyle: 'background-color: #f9f9f9; padding: 10px;',
    columnLines: true,

    columns: [
        {
            text: 'Profile',
            dataIndex:'profile_picture',
            flex: 2,
            renderer: function(value) {
                //console.log('Profile Picture Path:', value);

                if (value) {
                    // the images are stored in 'public/images/profile_pictures/'
                    var imageUrl = 'http://localhost:8000/' + value;
                    return '<img src="' + imageUrl + '" alt="Profile Picture" style="height: 50px; width: 50px; border-radius: 50%;">';
                }
                console.log('Profile Picture Path:', imageUrl);
                return 'No Image';
            }
        },
        //{ text: 'ID', dataIndex: 'id', flex: 1, align: 'center', style: 'font-weight: bold;' },
        { text: 'Name', dataIndex: 'name', flex: 2, align: 'center', style: 'font-weight: bold;' },
        { text: 'Email', dataIndex: 'email', flex: 2, align: 'center', style: 'font-weight: bold;' },
        { text: 'Contact', dataIndex: 'contact', flex: 2, align: 'center', style: 'font-weight: bold;' },
        { text: 'Department', dataIndex: 'department', flex: 2, align: 'center', style: 'font-weight: bold;' },
        {
            text: 'Actions',
            xtype: 'actioncolumn',
            align: 'center',
            items: [
                {
                    iconCls: 'x-fa fa-edit',
                    tooltip: 'Edit Employee',
                    style: 'color: #007bff;', 
                    handler: 'onEditUser'
                },
                {
                    iconCls: 'x-fa fa-trash',
                    tooltip: 'Delete Employee',
                    style: 'color: #dc3545;', 
                    handler: 'onDeleteEmployeeWidgetclick'
                }
            ],
            flex: 1
        }
    ],

    tbar: [
        {
            text: 'Add Employee',
            iconCls: 'x-fa fa-plus-circle',
            scale: 'medium',
            handler: 'onAddEmployeeClick'
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
        displayMsg: 'Displaying employees {0} - {1} of {2}',
        emptyMsg: 'No employees to display'
    }
});
