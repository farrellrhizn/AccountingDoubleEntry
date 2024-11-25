import React, { useState } from 'react';
import NewCustomer from './templates/NewCustomer';
import NewInvoice from './templates/NewInvoice';
import NewBill from './templates/NewBill';
import NewVendor from './templates/NewVendor';
import NewRevenue from './templates/NewRevenue';
import NewProposal from './templates/NewProposal';
import NewPayment from './templates/NewPayment';
import InvoiceReminder from './templates/InvoiceReminder';

const templates = {
    "New Customer": <NewCustomer />,
    "New Invoice": <NewInvoice />,
    "New Bill": <NewBill />,
    "New Vendor": <NewVendor />,
    "New Revenue": <NewRevenue />,
    "New Proposal": <NewProposal />,
    "New Payment": <NewPayment />,
    "Invoice Reminder": <InvoiceReminder />,
};

function NotificationTemplate() {
    const [selectedTemplate, setSelectedTemplate] = useState("New Customer");

    const handleTemplateChange = (event) => {
        setSelectedTemplate(event.target.value);
    };

    return (
        <div className="p-6 bg-white shadow rounded-lg">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">{selectedTemplate}</h2>
                <select 
                    className="select select-bordered" 
                    value={selectedTemplate} 
                    onChange={handleTemplateChange}
                >
                    {Object.keys(templates).map((templateName) => (
                        <option key={templateName} value={templateName}>
                            {templateName}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                {templates[selectedTemplate]}
            </div>
        </div>
    );
}

export default NotificationTemplate;
