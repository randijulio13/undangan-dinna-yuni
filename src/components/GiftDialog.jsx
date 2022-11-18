import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { FiCopy } from "react-icons/fi";
import { toast } from "react-toastify";
import data from "../data";

export default function GiftDialog({ isShow, setIsShow }) {
  const closeDialog = () => {
    setIsShow(false);
  };

  const copyAccountNumber = () => {
    navigator.clipboard.writeText(data.gift.transfer.accountNumber);
    toast.success("Nomor rekening berhasil disalin", {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <Transition appear show={isShow} as={Fragment}>
      <Dialog as="div" className="relative z-20" onClose={closeDialog}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="flex w-full transform flex-col items-center justify-center overflow-hidden rounded-2xl bg-white py-10 px-5 text-left align-middle shadow-xl transition-all lg:w-2/3">
                <Dialog.Title as="h3" className="font-cursive text-6xl font-medium leading-10 text-gray-900">
                  Gift Transfer
                </Dialog.Title>
                <div className="my-10 flex flex-col items-center justify-center">
                  <p className="text-center text-sm text-gray-500">Silahkan transfer hadiah melalui nomor rekening maupun dompet digital berikut :</p>
                  <img src={data.gift.transfer.bankLogo} className="my-4 w-1/3" alt="" />
                  <button
                    onClick={copyAccountNumber}
                    className="flex items-center justify-center space-x-2 rounded-full py-2 px-4 outline-none duration-300 hover:bg-gray-100 focus:outline-none"
                  >
                    <span>{data.gift.transfer.accountNumber}</span>
                    <FiCopy />
                  </button>
                  <h1>
                    a.n <b>{data.gift.transfer.name}</b>
                  </h1>
                  <p className="mt-10 text-center text-sm text-gray-500">
                    Sebelumnya, kami ucapkan terimakasih atas perhatian dan bentuk tanda cinta Bapak/Ibu/Saudara/i untuk kami
                  </p>
                </div>
                <button
                  type="button"
                  className="inline-flex justify-center rounded-full border border-transparent bg-primary-100 px-4 py-2 text-sm font-medium outline-none duration-300 hover:bg-primary-200 focus:outline-none focus:ring focus:ring-primary-700"
                  onClick={closeDialog}
                >
                  Close
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
