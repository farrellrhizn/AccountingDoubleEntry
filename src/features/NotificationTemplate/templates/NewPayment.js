import React from 'react';

function NewPayment() {
    return (
        <div>
            <h3 className="text-lg font-semibold">Variables</h3>
            <ul className="list-disc ml-4">
                <li>Payment Name : {"{payment_name}"}</li>
                <li>Payment Type : {"{payment_type}"}</li>
                <li>App Name : {"{app_name}"}</li>
                <li>Payment Amount : {"{payment_amount}"}</li>
                <li>Company Name : {"{company_name}"}</li>
                <li>App Url : {"{app_url}"}</li>
            </ul>
            <h3 className="text-lg font-semibold mt-6">Notification Message</h3>
            <textarea 
                className="textarea textarea-bordered w-full mt-2" 
                defaultValue="New Payment received: {payment_name}"
            ></textarea>
        </div>
    );
}

export default NewPayment;
