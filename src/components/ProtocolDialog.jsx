import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { MdSanitizer, MdSocialDistance } from "react-icons/md";
import { RiSurgicalMaskFill } from "react-icons/ri";

export default function GiftDialog({ isShow, setIsShow }) {
  const closeDialog = () => {
    setIsShow(false);
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
                  Covid19 Prevention
                </Dialog.Title>
                <div className="my-3 flex flex-col items-center justify-center">
                  <p className="text-center text-sm text-gray-500">Protokol Kesehatan Acara Pernikahan</p>
                  <div className="my-10 flex flex-col space-y-5">
                    <div className="relative w-full overflow-hidden rounded-sm bg-gray-100 p-4 duration-300 hover:bg-primary-50/50">
                      <h1 className="absolute top-0 bottom-0 right-10 flex items-center text-7xl text-black text-opacity-5">
                        <RiSurgicalMaskFill />
                      </h1>
                      <h1 className="relative text-lg font-medium">Menggunakan Masker</h1>
                      <p className="relative">
                        Seluruh peserta acara termasuk keluarga, panitia penyelenggara, dan para tamu undangan diwajibkan untuk mengenakan masker. Untuk itu
                        kami mohon para tamu undangan untuk dapat membawa dan mengenakan masker masing-masing sebelum memasuki ruangan.
                      </p>
                    </div>
                    <div className="relative w-full overflow-hidden rounded-sm bg-gray-100 p-4 duration-300 hover:bg-primary-50/50">
                      <h1 className="absolute top-0 bottom-0 right-10 flex items-center text-7xl text-black text-opacity-5">
                        <MdSanitizer />
                      </h1>
                      <h1 className="text-lg font-medium">Cuci Tangan & Hand Sanitizer</h1>
                      <p>Seluruh peserta acara diharapkan selalu mencuci tangan dan selalu menggunakan hand sanitizer</p>
                    </div>
                    <div className="relative w-full overflow-hidden rounded-sm bg-gray-100 p-4 duration-300 hover:bg-primary-50/50">
                      <h1 className="absolute top-0 bottom-0 right-10 flex items-center text-7xl text-black text-opacity-5">
                        <MdSocialDistance />
                      </h1>
                      <h1 className="text-lg font-medium">Jaga Jarak</h1>
                      <p>Seluruh peserta acara selalu diharapkan untuk menjaga jarak</p>
                    </div>
                  </div>
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
