// app/view/login/LoginController.js
Ext.define('hrm.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',


    onLoginClick: function(button) {
        var form = button.up('form');
        var window = button.up('window');
    
        if (form.isValid()) {
            var values = form.getValues();
    
            Ext.Ajax.request({
                url: 'http://localhost:8000/api/login',
                method: 'POST',
                jsonData: {
                    email: values.email,
                    password: values.password
                },
                success: function(response) {
                    var responseData = Ext.decode(response.responseText);
    
                    if (responseData.token) {
                        // Save token and role to localStorage
                        localStorage.setItem('authToken', responseData.token);
                        localStorage.setItem('userRole', responseData.role);
    
                        window.destroy();
    
                        // Load appropriate view based on role
                        if (responseData.role === 'employee') {
                            Ext.create({
                                xtype: 'user-main', // Employee dashboard view xtype
                                renderTo: Ext.getBody()
                            });
                        } else if (responseData.role === 'admin') {
                            Ext.create({
                                xtype: 'app-main', // Admin dashboard view xtype
                                renderTo: Ext.getBody()
                            });
                        } else {
                            Ext.Msg.alert('Login Failed', 'Invalid role received.');
                        }
    
                        Ext.toast({
                            html: 'Welcome, ' + values.email,
                            align: 't',
                            hideDuration: 200,
                            autoCloseDelay: 3000
                        });
                    } else {
                        Ext.Msg.alert('Login Failed', 'No token received.');
                    }
                },
                failure: function(response) {
                    var responseData = Ext.decode(response.responseText);
                    Ext.Msg.alert('Login Failed', responseData.message || 'Log-in failed due to server error.');
                }
            });
        }
    },
    
    


    onSignupClick: function(button) {
        var form = button.up('form');
        var window = button.up('window')

        if (form.isValid()) {
            var values = form.getValues();

            Ext.Ajax.request({
                url: 'http://localhost:8000/api/register',
                method: 'POST',
                jsonData: values,
                success: function(response) {
                    Ext.Msg.alert('Success', 'Registration successful.');

                    form.destroy();
                    window.destroy();
                    Ext.create({
                        xtype: 'app-main',
                        renderTo: Ext.getBody()
                    });
                },
                failure: function(response) {
                    var responseData = Ext.decode(response.responseText);
                    Ext.Msg.alert('Failure', responseData.message || 'Registration failed due to server error.');
                }
            });
        }
    }
});
