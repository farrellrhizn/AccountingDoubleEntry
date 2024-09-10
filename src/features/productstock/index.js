import React, { useState, useEffect } from 'react';
import PencilIcon from '@heroicons/react/24/outline/PencilIcon';
import EditModal from './components/EditProductModal';
import TitleCard from '../../components/Cards/TitleCard';
import { PRODUCT_STOCK } from '../../utils/dummyData';

const ProductStock = () => {
    const [productData, setProductData] = useState(PRODUCT_STOCK);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleEditClick = (product) => {
        setSelectedProduct(product);
        setShowModal(true);
    };

    const filteredProduct = productData.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.quantity.toString().includes(searchTerm.toLowerCase()) ||
        product.sku.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredProduct.length / itemsPerPage);

    useEffect(() => {
        setCurrentPage(1);
    }, [itemsPerPage]);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedProducts = filteredProduct.slice(startIndex, startIndex + itemsPerPage);

    return (
        <>
            <TitleCard topMargin="mt-2" title="Manage Product Accounts">
                <div className="flex justify-between items-center mb-4">
                    <div className="mr-4">
                        <select
                            id="entriesPerPage"
                            className="select select-bordered"
                            value={itemsPerPage}
                            onChange={(e) => setItemsPerPage(parseInt(e.target.value))}
                        >
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={15}>15</option>
                            <option value={20}>20</option>
                        </select>
                        <label htmlFor="entriesPerPage" className="ml-2">
                            Entries per page:
                        </label>
                    </div>
                    <div className="ml-auto">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="input input-bordered"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="table w-full min-w-max">
                        <thead>
                            <tr>
                                <th className="w-35 px-4 py-2">NAME</th>
                                <th className="w-35 px-4 py-2">SKU</th>
                                <th className="w-25 px-4 py-2">CURRENT QUANTITY</th>
                                <th className="w-10 px-4 py-2">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedProducts.map((product, index) => (
                                <tr key={index}>
                                    <td>{product.name}</td>
                                    <td>{product.sku}</td>
                                    <td>{product.quantity}</td>
                                    <td>
                                        <button onClick={() => handleEditClick(product)} className="btn bg-transparent border-primary hover:bg-primary hover:text-white group">
                                            <PencilIcon className="h-5 w-5" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="flex justify-between mt-4">
                    <button
                        onClick={handlePrevPage}
                        className={`btn bg-primary text-white hover:bg-secondary ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    <div>
                        Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredProduct.length)} of {filteredProduct.length} entries
                    </div>
                    <button
                        onClick={handleNextPage}
                        className={`btn bg-primary text-white hover:bg-secondary ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            </TitleCard>

            {showModal &&
                <EditModal
                    showModal={showModal}
                    onClose={() => setShowModal(false)}
                    product={selectedProduct}
                />
            }
        </>
    );
};

export default ProductStock;
