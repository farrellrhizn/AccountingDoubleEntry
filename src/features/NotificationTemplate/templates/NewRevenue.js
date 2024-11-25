import React from 'react';

function NewRevenue() {
    return (
        <div>
            <h3 className="text-lg font-semibold">Variables</h3>
            <ul className="list-disc ml-4">
                <li>Revenue Name : {"{revenue_name}"}</li>
                <li>Payment Date : {"{payment_date}"}</li>
                <li>App Name : {"{app_name}"}</li>
                <li>Amount : {"{amount}"}</li>
                <li>Company Name : {"{company_name}"}</li>
                <li>App Url : {"{app_url}"}</li>
            </ul>
            <h3 className="text-lg font-semibold mt-6">Notification Message</h3>
            <textarea 
                className="textarea textarea-bordered w-full mt-2" 
                defaultValue="New Revenue recorded: {revenue_name}"
            ></textarea>
        </div>
    );
}

export default NewRevenue;
