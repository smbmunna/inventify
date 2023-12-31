import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useCart from "../../../hooks/useCart";
import { Helmet } from "react-helmet-async";
import { jsPDF } from "jspdf";

const Checkout = () => {
    const doc = new jsPDF();
    const pdfPrint = (product) => {
        doc.setFontSize(22);
        doc.text("System Generated Invoice", 10, 10);
        doc.setFontSize(22);
        doc.text(`Name: ${product.productName}`,10,30);
        doc.text(`Bill Amount: ${product.sellingPrice}`,10,50);
        doc.text(`Sold By:${product.userEmail}`,10,60);
        doc.text(`Add Date:${product.productAddDate}`,10,80);
        doc.save("Invoice.pdf");
    }
    const [cart, isLoading, refetch] = useCart();
    const axiosPublic = useAxiosPublic();
    //console.log(cart);
    if (isLoading) {
        return <span className="loading loading-bars loading-lg"></span>
    }

    //get current date and time
    const getCurrentDate = () => {
        const currentDate = new Date();
        const currentDateString = currentDate.toLocaleDateString();
        return currentDateString;
    }
    const getCurrenttime = () => {
        const currentDate = new Date();
        const currentTimeString = currentDate.toLocaleTimeString();
        return currentTimeString;
    }

    const handleGetPaid = async (product) => {
        // console.log(product);
        // return;
        const productInfo = {
            ...product,
            addDate: getCurrentDate(),
            addTime: getCurrenttime()
        }
        pdfPrint(product);
        await axiosPublic.post(`/sales`, productInfo)
            .then(res => {
                if (res.data.insertedId) {

                    doc.save("a4.pdf");
                    //increase sale count of this product
                    axiosPublic.put(`/product/update/${product._id}`, { saleCount: parseInt(product.saleCount) + parseInt(product.productQty) })
                        .then(res => {
                            if (res.data.modifiedCount > 0) {
                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: "Product added to sales collection.",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                            }
                            //increase sale count of this product
                            axiosPublic.put(`/product/update/${product._id}`, { productQty: parseInt(product.productQty) - parseInt(product.productQty) })
                            axiosPublic.put(`/product/update/${product._id}`, { status:'sold'})

                            //delete from cart
                            axiosPublic.delete(`/carts/${product._id}`)
                                .then(res => {
                                    console.log(res.data);
                                    if (res.data.deletedCount > 0) {
                                        refetch();

                                    }
                                })
                        })

                }
            })
        refetch();
    }

    return (
        <div className="text-3xl font-bold">
            <Helmet>
                <title>Dashboard | Check Out</title>
            </Helmet>
            <h2 className="text-4xl font-bold text-[#6f42c1] my-8">Checkout Product {cart.length}</h2>
            <div className="h-screen">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead  className="text-lg">
                            <tr>
                                <th> Serial.</th>
                                <th> Product Id:</th>
                                <th>Product Name</th>
                                <th>Image</th>
                                <th>Quantity</th>
                                <th>Discount</th>
                                <th>Selling Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((product, index) => <tr key={product._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>{product._id}</td>
                                    <td>
                                        {product.productName}
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={product.productImageLink} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {product.productQty}
                                    </td>
                                    <td>
                                        {product.discount}
                                    </td>
                                    <td>
                                        {product.sellingPrice.toFixed(2)}
                                    </td>
                                    <th>
                                        <button onClick={() => handleGetPaid(product)} className="btn text-white rounded-none bg-[#6f42c1] btn-xs">Get Paid</button>
                                    </th>
                                </tr>)
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default Checkout;