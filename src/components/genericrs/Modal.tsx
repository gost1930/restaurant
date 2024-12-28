import React from "react";
import { IoMdClose } from "react-icons/io";

interface ModalComponent {
    isOpen: boolean
    onClose: () => void
    insideClick: boolean
    children: React.ReactNode
    btnClose: boolean
}
const Modal = ({ isOpen, onClose, insideClick, children, btnClose }: ModalComponent) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (insideClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed top-0 left-0 bg-gray-500/50 grid place-items-center w-full h-screen z-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-white pt-16 px-4 pb-3 w-fit max-w-xl max-h-1/2  rounded relative shadow-md">
        {/* Close Button */}
        {btnClose && (
          <button
            onClick={onClose}
            className="absolute w-fit top-2 right-2 text-black hover:text-white aspect-square px-3 rounded-full hover:bg-red-500 duration-200"
          >
            <IoMdClose />
          </button>
        )}
        {/* Modal Content */}
        {children}
      </div>
    </div>
  );
};

export default Modal;