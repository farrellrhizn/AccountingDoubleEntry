// src/features/orders/components/EditOrderModal.jsx

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { showNotification } from '../../common/headerSlice';

// Reusable InputField Component
const InputField = ({ label, name, value, onChange, type = 'text', disabled = false }) => (
    <div>
        <label className="block text-sm font-medium mb-1">{label}</label>
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            className="input input-bordered w-full text-sm"
            required
            disabled={disabled}
        />
    </div>
);

// Reusable SelectField Component
const SelectField = ({ label, name, value, onChange, options }) => (
    <div>
        <label className="block text-sm font-medium mb-1">{label}</label>
        <select
            name={name}
            value={value}
            onChange={onChange}
            className="select select-bordered w-full text-sm"
            required
        >
            <option value="" disabled>
                Select {label}
            </option>
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
);

const EditOrderModal = ({ showModal, onClose, order, onSave }) => {
    const dispatch = useDispatch();
    const initialFormData = order
        ? {
              order_id: order.order_id || '',
              date: order.date || '',
              name: order.name || '',
              plan_name: order.plan_name || '',
              price: order.price || '',
              payment_type: order.payment_type || '',
              status: order.status || '',
              coupon: order.coupon || '',
              invoice: order.invoice || ''
          }
        : {
              order_id: '',
              date: '',
              name: '',
              plan_name: '',
              price: '',
              payment_type: '',
              status: '',
              coupon: '',
              invoice: ''
          };

    const [formData, setFormData] = useState(initialFormData);

    useEffect(() => {
        if (order) {
            setFormData(initialFormData);
        }
    }, [order]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validasi tambahan bisa ditambahkan di sini

        // Panggil fungsi onSave yang diteruskan dari OrderPage
        onSave(formData);

        // Menutup modal
        onClose();
    };

    if (!showModal) return null;

    return (
        <div className="modal modal-open">
            <div className="modal-box relative">
                <h2 className="text-lg font-semibold mb-3">Edit Order</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-2 mb-3">
                        <InputField
                            label="Order ID"
                            name="order_id"
                            value={formData.order_id}
                            onChange={handleChange}
                            type="text"
                            disabled // Tidak boleh diubah
                        />
                        <InputField
                            label="Date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            type="date"
                        />
                        <InputField
                            label="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            type="text"
                        />
                        <InputField
                            label="Plan Name"
                            name="plan_name"
                            value={formData.plan_name}
                            onChange={handleChange}
                            type="text"
                        />
                        <InputField
                            label="Price"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            type="text"
                        />
                        <InputField
                            label="Payment Type"
                            name="payment_type"
                            value={formData.payment_type}
                            onChange={handleChange}
                            type="text"
                        />
                        <SelectField
                            label="Status"
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            options={['Success', 'Succeeded', 'Pending', 'Approved']}
                        />
                        <InputField
                            label="Coupon"
                            name="coupon"
                            value={formData.coupon}
                            onChange={handleChange}
                            type="text"
                        />
                        <InputField
                            label="Invoice"
                            name="invoice"
                            value={formData.invoice}
                            onChange={handleChange}
                            type="text"
                        />
                    </div>
                    <div className="modal-action">
                        <button
                            type="button"
                            onClick={onClose}
                            className="btn btn-ghost"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="btn btn-primary"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditOrderModal;
