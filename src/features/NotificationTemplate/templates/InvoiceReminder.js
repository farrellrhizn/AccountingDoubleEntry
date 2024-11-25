import React from 'react';

function InvoiceReminder() {
    return (
        <div>
            <h3 className="text-lg font-semibold">Variables</h3>
            <ul className="list-disc ml-4">
                <li>Payment Name : {"{payment_name}"}</li>
                <li>Payment Due Amount : {"{payment_due_amount}"}</li>
                <li>Company Name : {"{company_name}"}</li>
                <li>App Url : {"{app_url}"}</li>
                <li>Invoice Number : {"{invoice_number}"}</li>
                <li>Payment Date : {"{payment_date}"}</li>
                <li>App Name : {"{app_name}"}</li>
            </ul>
            <h3 className="text-lg font-semibold mt-6">Notification Message</h3>
            <textarea 
                className="textarea textarea-bordered w-full mt-2" 
                defaultValue="Invoice Reminder: {invoice_number} is due on {payment_date}"
            ></textarea>
        </div>
    );
}

export default InvoiceReminder;
