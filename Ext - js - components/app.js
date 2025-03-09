Ext.application({
    name: 'MyApp', // Name of your application

    launch: function() {
        // This function is called when the application is launched

        // Create a simple Ext JS Panel
        Ext.create('Ext.Panel', {
            title: 'Hello Ext JS',
            width: 300,
            height: 200,
            floating: true, // The panel will float in the viewport
            renderTo: Ext.getBody(), // Render the panel to the body
            html: 'This is a simple Ext JS panel.',
            bodyPadding: 10,
            buttons: [
                {
                    text: 'Click Me',
                    handler: function() {
                        Ext.Msg.alert('Info', 'Button clicked!');
                    }
                }
            ]
        });

        // Create a grid panel
        Ext.create('Ext.grid.Panel', {
            title: 'Grid Panel Example',
            width: 600,
            height: 300,
            renderTo: Ext.getBody(),
            store: {
                fields: ['name', 'email', 'phone'],
                data: [
                    { name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
                    { name: 'Jane Smith', email: 'jane@example.com', phone: '234-567-8901' },
                    { name: 'Bob Johnson', email: 'bob@example.com', phone: '345-678-9012' }
                ]
            },
            columns: [
                { text: 'Name', dataIndex: 'name', flex: 1 },
                { text: 'Email', dataIndex: 'email', flex: 1 },
                { text: 'Phone', dataIndex: 'phone', flex: 1 }
            ]
        });
    }
});