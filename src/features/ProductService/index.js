import React, { useState, useEffect } from 'react';
import CreateProductModal from "./CreateProductModal";
import UploadProductsModal from "./UploadProductsModal";
import EditProductModal from "./EditProductModal";
import { TrashIcon, DocumentPlusIcon, ArrowDownTrayIcon, ArrowUpTrayIcon, PencilIcon } from '@heroicons/react/24/outline';

const ProductAndServicesPage = () => {
  const [products, setProducts] = useState([
    { name: "Product A", code: "PA001", salesPrice: 100, purchasePrice: 80, tax: 10, incomeAccount: "Sales", unit: "pcs", openingStock: 50, type: "Product" },
    { name: "Product B", code: "PB002", salesPrice: 200, purchasePrice: 150, tax: 15, incomeAccount: "Revenue", unit: "pcs", openingStock: 30, type: "Service" },
    { name: "Product C", code: "PC003", salesPrice: 300, purchasePrice: 250, tax: 20, incomeAccount: "Income", unit: "pcs", openingStock: 20, type: "Product" },
  ]);
  const [currentPage] = useState(1);
  const [productsPerPage] = useState(10);
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [isUploadModalOpen, setUploadModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

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

  const handleEditClick = (product) => {
    setCurrentProduct(product);
    setEditModalOpen(true);
  };

  const handleDeleteClick = (productIndex) => {
    const updatedProducts = products.filter((_, index) => index !== productIndex);
    setProducts(updatedProducts);
  };

  // const handlePageChange = (pageNumber) => {
  //   if (pageNumber === 'previous') {
  //     setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  //   } else if (pageNumber === 'next') {
  //     setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
  //   } else {
  //     setCurrentPage(pageNumber);
  //   }
  // };

  // const totalPages = Math.ceil(products.length / productsPerPage);

  useEffect(() => {
    if (isCreateModalOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [isCreateModalOpen]);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Manage Product & Services</h1>
        <nav className="text-sm text-gray-500">
          <a href="#" className="hover:text-gray-700">Dashboard</a> &gt; <span>Product & Services</span>
        </nav>
      </div>

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
      </div>

      <div className="bg-white rounded-lg shadow p-4">
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

      {isCreateModalOpen && <CreateProductModal isOpen={isCreateModalOpen} onClose={() => setCreateModalOpen(false)} />}
      {isUploadModalOpen && <UploadProductsModal onClose={() => setUploadModalOpen(false)} />}
      {isEditModalOpen && <EditProductModal product={currentProduct} onClose={() => setEditModalOpen(false)} />}
    </div>
  );
};

export default ProductAndServicesPage;
