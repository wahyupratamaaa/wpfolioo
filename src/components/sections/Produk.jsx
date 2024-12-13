import { useEffect, useState } from "react";
import axios from "axios";

const ProductCard = () => {
  const [products, setProducts] = useState([]); // State untuk menyimpan data produk

  // Fungsi untuk fetch data produk dari API
  const fetchData = () => {
    axios
      .get("https://fakestoreapi.com/products", {
        // Mengambil data produk dari API
        headers: {
          "Cache-Control": "no-cache", // Menonaktifkan cache untuk mendapatkan data terbaru
        },
      })
      .then((response) => {
        setProducts(response.data);
        // console.log(response.data); // Simpan data produk ke state
      })
      .catch((error) => {
        console.error("Error fetching data:", error.message); // Menangani error jika request gagal
      });
  };

  // useEffect untuk fetch data ketika komponen pertama kali di-render
  useEffect(() => {
    fetchData(); // Memanggil fetchData pada mount pertama
  }, []); // Array kosong memastikan hanya dipanggil sekali saat komponen pertama kali di-render

  return (
    <div
      id="card-books"
      className="flex flex-wrap gap-6 p-4 justify-center border-4 border-red-700" // Border merah di sekitar seluruh container
    >
      {products.length === 0 ? (
        <p className="col-span-full text-center">Loading...</p> // Menampilkan loading jika data belum ada
      ) : (
        products.map((product) => (
          <div
            key={product.id}
            className="max-w-sm w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2 border-2 border-red-500" // Border merah di sekitar setiap card produk
          >
            <div className="max-w-sm rounded-lg shadow-lg overflow-hidden bg-white">
              {/* Styling card */}
              <img
                src={product.image} // Gambar produk
                alt={product.title}
                className="w-full h-48 object-cover" // Styling gambar agar memenuhi lebar card
              />
              <div className="p-4">
                {/* Border merah untuk kategori */}
                <h5 className="text-gray-700 text-xl font-semibold border border-red-500 p-2">
                  {product.category} {/* Menampilkan kategori produk */}
                </h5>
                {/* Border merah untuk rating */}
                <h6 className="text-gray-500 text-sm mb-4 border border-red-500 p-2">
                  {product.rating.count} Ratings{" "}
                  {/* Menampilkan jumlah rating produk */}
                </h6>
                {/* Border merah untuk harga */}
                <p className="text-gray-800 font-bold text-lg mb-4 border border-red-500 p-2">
                  Rp {product.price} {/* Menampilkan harga produk */}
                </p>
                <div className="flex justify-between items-center">
                  {/* Tombol Edit dan Delete */}
                  <button className="text-blue-500 hover:text-blue-700 text-sm">
                    <i className="fa-solid fa-eraser"></i> Edit{" "}
                    {/* Tombol Edit */}
                  </button>
                  <button className="text-red-500 hover:text-red-700 text-sm">
                    <i className="fa-solid fa-trash-can"></i> Delete{" "}
                    {/* Tombol Delete */}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductCard;
