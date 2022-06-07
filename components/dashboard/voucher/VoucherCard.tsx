import { Fragment } from "react";
import { Voucher } from "../../../pages/dashboard/voucher";

const VoucherCard = ({voucher}:{voucher:Voucher}): JSX.Element => {
  return (<div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 w-72 m-4">
    <div className="p-5">
      <a href="#">
        <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
          {voucher.voucherName}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">
          {voucher.voucherDesc}
      </p>
      <hr className="my-1"></hr>
      <h2 className="text-4xl text-center my-2" my-1>{voucher.price} point</h2>
      <h3 className="text-3xl text-center font-bold mb-1 mt-6" my-1>{voucher.stock}</h3>
      <h4 className="text-md text-center font-bold" my-1>Vouchers remaining</h4>

      <div className="flex items-center justify-center my-2">
      <button
        href="#"
        className="inline-flex mx-3 items-center py-2 px-3 text-sm font-medium text-center text-white bg-amber-400 rounded-lg hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
      >
        Edit
      </button>                
      <button
        href="#"
        className="inline-flex mx-3 items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
      >
        Delete
      </button>
      </div>

    </div>
  </div>)
}

export default VoucherCard;