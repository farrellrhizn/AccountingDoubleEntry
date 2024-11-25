import React from 'react';

function NewVendor() {
    return (
        <div>
            <h3 className="text-lg font-semibold">Variables</h3>
            <ul className="list-disc ml-4">
                <li>Vendor Name : {"{vendor_name}"}</li>
                <li>Password : {"{password}"}</li>
                <li>App Name : {"{app_name}"}</li>
                <li>Email : {"{email}"}</li>
                <li>Company Name : {"{company_name}"}</li>
                <li>App Url : {"{app_url}"}</li>
            </ul>
            <h3 className="text-lg font-semibold mt-6">Notification Message</h3>
            <textarea 
                className="textarea textarea-bordered w-full mt-2" 
                defaultValue="New Vendor created: {vendor_name}"
            ></textarea>
        </div>
    );
}

export default NewVendor;
