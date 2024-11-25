import React, { useState } from 'react';
import { dummyProductData } from "../../utils/dummyData";
import CreateProductModal from "./CreateProductModal";
import UploadProductsModal from "./UploadProductsModal";
import EditProductModal from "./EditProductModal"; // Import modal edit
import { FunnelIcon, TrashIcon, DocumentPlusIcon, ArrowDownTrayIcon, ArrowUpTrayIcon, PencilIcon } from '@heroicons/react/24/outline'; // Import icon Pencil untuk edit

const ProductAndServicesPage = () => {
  const [products, setProducts] = useState(dummyProductData || []);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [isUploadModalOpen, setUploadModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false); // State untuk modal edit
  const [currentProduct, setCurrentProduct] = useState(null); // State untuk produk yang sedang di-edit

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Fungsi untuk handle download
  const handleDownload = () => {
    const dataStr = JSON.stringify(products, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "products.json";
    link.click();
    URL.revokeObjectURL(url);
  };

  // Fungsi untuk handle edit
  const handleEditClick = (product) => {
    setCurrentProduct(product);
    setEditModalOpen(true);
  };

  // Fungsi untuk handle delete
  const handleDeleteClick = (productIndex) => {
    const updatedProducts = products.filter((_, index) => index !== productIndex);
    setProducts(updatedProducts);
  };
  const handlePageChange = (pageNumber) => {
    if (pageNumber === 'previous') {
      setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
    } else if (pageNumber === 'next') {
      setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
    } else {
      setCurrentPage(pageNumber);
    }
  };

  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Manage Product & Services</h1>
        <nav className="text-sm text-gray-500">
          <a href="#" className="hover:text-gray-700">Dashboard</a> &gt; <span>Product & Services</span>
        </nav>
      </div>

      {/* Filter and Actions Panel */}
      <div className="bg-white rounded-lg shadow p-4 mb-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-2">
            <button 
              onClick={handleDownload} 
              className="btn bg-blue-500 text-white hover:bg-blue-700 p-2"
            >
              <ArrowDownTrayIcon className="w-5 h-5" />
            </button>
            <button
              onClick={() => setUploadModalOpen(true)}
              className="btn bg-blue-500 text-white hover:bg-blue-700 p-2"
            >
              <ArrowUpTrayIcon className="w-5 h-5" />
            </button>
            <button
              onClick={() => setCreateModalOpen(true)}
              className="btn bg-green-500 text-white hover:bg-green-700 p-2"
            >
              <DocumentPlusIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <select className="select select-bordered w-full max-w-xs mr-4">
              <option>Select Category</option>
              <option>Category 1</option>
              <option>Category 2</option>
            </select>
          </div>
          <div className="flex space-x-2">
            <button className="btn bg-green-500 text-white hover:bg-green-700 p-2">
              <FunnelIcon className="w-5 h-5" />
            </button>
            <button className="btn bg-pink-500 text-white hover:bg-pink-700 p-2">
              <TrashIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Responsive Data Table */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex justify-between items-center mb-4">
          <div>
            <select className="select select-bordered w-20">
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
            <span className="ml-2 text-sm text-gray-500">entries per page</span>
          </div>
          <div className="w-full sm:w-64">
            <input type="text" className="input input-bordered w-full" placeholder="Search..." />
          </div>
        </div>

        {/* Wrapper for Responsive Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-left">
            <thead>
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Code</th>
                <th className="px-4 py-2">Sales Price</th>
                <th className="px-4 py-2">Purchase Price</th>
                <th className="px-4 py-2">Tax</th>
                <th className="px-4 py-2">Income Account</th>
                <th className="px-4 py-2">Unit</th>
                <th className="px-4 py-2">Opening Stock</th>
                <th className="px-4 py-2">Type</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentProducts.map((product, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{product.name}</td>
                  <td className="border px-4 py-2">{product.code}</td>
                  <td className="border px-4 py-2">{product.salesPrice}</td>
                  <td className="border px-4 py-2">{product.purchasePrice}</td>
                  <td className="border px-4 py-2">{product.tax}</td>
                  <td className="border px-4 py-2">{product.incomeAccount}</td>
                  <td className="border px-4 py-2">{product.unit}</td>
                  <td className="border px-4 py-2">{product.openingStock}</td>
                  <td className="border px-4 py-2">{product.type}</td>
                  <td className="border px-4 py-2">
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => handleEditClick(product)} 
                        className="btn bg-yellow-500 text-white hover:bg-yellow-700 p-2"
                      >
                        <PencilIcon className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={() => handleDeleteClick(index)} 
                        className="btn bg-red-500 text-white hover:bg-red-700 p-2"
                      >
                        <TrashIcon className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination Section */}
      <div className="flex justify-between items-center mt-4">
                <div className="text-sm text-gray-700">
                    Showing 1 to 10 of {products.length} entries
                </div>
                <div>
                    <nav className="inline-flex shadow-sm -space-x-px" aria-label="Pagination">
                        <a 
                            href="#" 
                            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                            onClick={() => handlePageChange('previous')}
                        >
                            &lt;
                        </a>
                        <a 
                            href="#" 
                            className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                            onClick={() => handlePageChange(1)}
                        >
                            1
                        </a>
                        <a 
                            href="#" 
                            className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                            onClick={() => handlePageChange(2)}
                        >
                            2
                        </a>
                        <a 
                            href="#" 
                            className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                            onClick={() => handlePageChange(3)}
                        >
                            3
                        </a>
                        <a 
                            href="#" 
                            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                            onClick={() => handlePageChange('next')}
                        >
                            &gt;
                        </a>
                    </nav>
                </div>
            </div>

      {/* Modals */}
      {isCreateModalOpen && <CreateProductModal onClose={() => setCreateModalOpen(false)} />}
      {isUploadModalOpen && <UploadProductsModal onClose={() => setUploadModalOpen(false)} />}
      {isEditModalOpen && <EditProductModal product={currentProduct} onClose={() => setEditModalOpen(false)} />} {/* Modal Edit */}
    </div>
  );
};

export default ProductAndServicesPage;
