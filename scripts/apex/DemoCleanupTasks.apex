insert new Demo_Cleanup_Task(
    Object_API_Name__c = 'Shipment',
    Description__c = 'Delete all shipments',
    Permanently_Delete__c = true,
    Active__c = true
);

insert new Demo_Cleanup_Task(
    Object_API_Name__c = 'Account',
    Description__c = 'Delete all accounts where SIC code is "Test"',
    Permanently_Delete = false,
    Active = true
)