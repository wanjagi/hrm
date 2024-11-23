/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'hrm.Application',

    name: 'hrm',

    requires: [
        // This will automatically load all classes in the hrm namespace
        // so that application classes do not need to require each other.
        'hrm.*'
    ],

    launch: function() {
        var token = localStorage.getItem('authToken');
        var role = localStorage.getItem('userRole');
        
    
        if (token) {
            // Token exists, determine role and render appropriate view
            if (role === 'employee') {
                var mainView = Ext.ComponentQuery.query('app-main')[0];
                if (mainView){
                    mainView.destroy();
                }
                Ext.create({
                    xtype: 'user-main', // Employee dashboard view xtype
                    renderTo: Ext.getBody()
                });
            } else if (role === 'admin') {
                var mainView = Ext.ComponentQuery.query('user-main')[0];
                if (mainView){
                    mainView.destroy();
                }
                Ext.create({
                    xtype: 'app-main', // Admin dashboard view xtype
                    renderTo: Ext.getBody()
                });
            } else {
                // If role is invalid, clear storage and redirect to login
                localStorage.removeItem('authToken');
                localStorage.removeItem('userRole');
                Ext.create({
                    xtype: 'login', // Login window xtype
                    renderTo: Ext.getBody()
                });
            }
        } else {
            // No token, show the login window
            Ext.create({
                xtype: 'login', // Login window xtype
                renderTo: Ext.getBody()
            });
        }
    }
    
    
    // The name of the initial view to create.
    //mainView: 'hrm.view.main.Main'
});
