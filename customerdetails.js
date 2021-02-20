import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import CUSTOMER_OBJECT from '@salesforce/schema/customer__c';
import NAME_FIELD from '@salesforce/schema/customer__c.Name';
import ADDRESS_FIELD from '@salesforce/schema/customer__c.Address__c';
import LOCATION_FIELD from '@salesforce/schema/customer__c.Location__c';
import PHONE_FIELD from '@salesforce/schema/customer__c.Phone_Number__c';
import EMAIL_FIELD from '@salesforce/schema/customer__c.Email__c';
import PRODUCT_FIELD from '@salesforce/schema/customer__c.Product_Name__c';
