// EditAssetsModal.jsx
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { showNotification } from '../../common/headerSlice';

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
        <h3 className="text-md font-semibold mb-2 capitalize">{prefix} Address</h3>
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

const EditAssetsModal = ({ showModal, onClose, vendor }) => {
    const dispatch = useDispatch();
    const initialFormData = vendor
        ? {
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
              shippingZipCode: vendor.shippingZipCode || '',
          }
        : {};

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
        dispatch(
            showNotification({
                message: `Asset name "${formData.name}" has been successfully updated.`,
                status: 1, // Assuming status 1 is for success
            })
        );
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
            shippingZipCode: prevState.billingZipCode,
        }));
    };

    if (!showModal) return null;

    return (
        <div className="modal modal-open">
            <div className="modal-box">
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
                <div className="mb-3">
                    <button
                        type="button"
                        onClick={handleCopyBillingToShipping}
                        className="btn btn-sm btn-outline mb-2"
                    >
                        Copy Billing to Shipping
                    </button>
                </div>
                <AddressSection prefix="shipping" formData={formData} onChange={handleInputChange} />
                <div className="modal-action">
                    <button onClick={handleUpdate} className="btn btn-sm bg-blue-500 text-white">
                        Update
                    </button>
                    <button onClick={onClose} className="btn btn-sm btn-ghost">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditAssetsModal;
