import React from 'react';

function NewBill() {
    return (
        <div>
            <h3 className="text-lg font-semibold">Variables</h3>
            <ul className="list-disc ml-4">
                <li>Bill Name : {"{bill_name}"}</li>
                <li>Bill Url : {"{bill_url}"}</li>
                <li>App Name : {"{app_name}"}</li>
                <li>Bill Number : {"{bill_number}"}</li>
                <li>Company Name : {"{company_name}"}</li>
                <li>App Url : {"{app_url}"}</li>
            </ul>
            <h3 className="text-lg font-semibold mt-6">Notification Message</h3>
            <textarea 
                className="textarea textarea-bordered w-full mt-2" 
                defaultValue="New Bill created: {bill_name}"
            ></textarea>
        </div>
    );
}

export default NewBill;
