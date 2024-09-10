import React, { useState, useEffect } from 'react';

// Reusable InputField Component
const InputField = ({ label, name, value, onChange, type = 'text' }) => (
    <div>
        <label className="block text-sm font-medium mb-1">{label}</label>
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            className="input input-bordered w-full text-sm"
        />
    </div>
);

// Address Section Component
const AddressSection = ({ prefix, formData, onChange }) => (
    <>
        <h3 className="text-md font-semibold mb-2">{prefix} Address</h3>
        <div className="grid grid-cols-2 gap-2 mb-3">
            {['Name', 'Phone', 'Address', 'City', 'State', 'Country', 'Zip Code'].map((field, index) => (
                <InputField
                    key={index}
                    label={field}
                    name={`${prefix}${field.replace(' ', '')}`}
                    value={formData[`${prefix}${field.replace(' ', '')}`]}
                    onChange={onChange}
                />
            ))}
        </div>
    </>
);

const EditVendorModal = ({ showModal, onClose, vendor }) => {
    const initialFormData = vendor ? {
        name: vendor.name || '',
        contact: vendor.contact || '',
        email: vendor.email || '',
        taxNumber: vendor.taxNumber || '',
        billingName: vendor.billingName || '',
        billingPhone: vendor.billingPhone || '',
        billingAddress: vendor.billingAddress || '',
        billingCity: vendor.billingCity || '',
        billingState: vendor.billingState || '',
        billingCountry: vendor.billingCountry || '',
        billingZipCode: vendor.billingZipCode || '',
        shippingName: vendor.shippingName || '',
        shippingPhone: vendor.shippingPhone || '',
        shippingAddress: vendor.shippingAddress || '',
        shippingCity: vendor.shippingCity || '',
        shippingState: vendor.shippingState || '',
        shippingCountry: vendor.shippingCountry || '',
        shippingZipCode: vendor.shippingZipCode || ''
    } : {};

    const [formData, setFormData] = useState(initialFormData);

    useEffect(() => {
        if (vendor) {
            setFormData(initialFormData);
        }
    }, [vendor]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleUpdate = () => {
        // Handle the update logic here
        console.log('Updated Vendor Data:', formData);
        onClose();
    };

    const handleCopyBillingToShipping = () => {
        setFormData((prevState) => ({
            ...prevState,
            shippingName: prevState.billingName,
            shippingPhone: prevState.billingPhone,
            shippingAddress: prevState.billingAddress,
            shippingCity: prevState.billingCity,
            shippingState: prevState.billingState,
            shippingCountry: prevState.billingCountry,
            shippingZipCode: prevState.billingZipCode
        }));
    };

    if (!showModal) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center p-4">
            <div className="bg-white p-4 rounded-lg w-[800px] max-h-[75vh] mt-12 overflow-auto">
                <h2 className="text-lg font-semibold mb-3">Edit Vendor</h2>
                <div className="grid grid-cols-2 gap-2 mb-3">
                    {['Name', 'Contact', 'Email', 'Tax Number'].map((field, index) => (
                        <InputField
                            key={index}
                            label={field}
                            name={field.toLowerCase().replace(' ', '')}
                            value={formData[field.toLowerCase().replace(' ', '')]}
                            onChange={handleInputChange}
                            type={field === 'Email' ? 'email' : 'text'}
                        />
                    ))}
                </div>
                <AddressSection prefix="billing" formData={formData} onChange={handleInputChange} />
                <AddressSection prefix="shipping" formData={formData} onChange={handleInputChange} />
                <div className="flex justify-between mt-3">
                    <button 
                        onClick={handleCopyBillingToShipping} 
                        className="btn btn-sm bg-green-500 text-white">
                        Same as Billing
                    </button>
                    <div className="flex">
                        <button 
                            onClick={onClose} 
                            className="btn btn-sm bg-gray-300 text-black mr-2">
                            Cancel
                        </button>
                        <button 
                            onClick={handleUpdate} 
                            className="btn btn-sm bg-blue-500 text-white">
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditVendorModal;
