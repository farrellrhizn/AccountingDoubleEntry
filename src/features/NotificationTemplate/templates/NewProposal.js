import React from 'react';

function NewProposal() {
    return (
        <div>
            <h3 className="text-lg font-semibold">Variables</h3>
            <ul className="list-disc ml-4">
                <li>Proposal Name : {"{proposal_name}"}</li>
                <li>Proposal Url : {"{proposal_url}"}</li>
                <li>App Name : {"{app_name}"}</li>
                <li>Proposal Number : {"{proposal_number}"}</li>
                <li>Company Name : {"{company_name}"}</li>
                <li>App Url : {"{app_url}"}</li>
            </ul>
            <h3 className="text-lg font-semibold mt-6">Notification Message</h3>
            <textarea 
                className="textarea textarea-bordered w-full mt-2" 
                defaultValue="New Proposal created: {proposal_name}"
            ></textarea>
        </div>
    );
}

export default NewProposal;
