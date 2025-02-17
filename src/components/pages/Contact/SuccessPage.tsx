import React from "react";
import ReactDOM from "react-dom";

// Define the props type
interface NotificationProps {
  setShowNotification: React.Dispatch<React.SetStateAction<boolean>>;
}

const Notification: React.FC<NotificationProps> = ({ setShowNotification }) => {
  return ReactDOM.createPortal(
    <div className="fixed bottom-5 left-0 top-0 z-[200] grid place-items-center h-screen w-screen right-5 bg-white text-white px-6 py-3 rounded-lg shadow-lg">
      <div
        onClick={() => setShowNotification(false)}
        className="absolute top-8 right-8 size-10 rounded-full grid place-items-center bg-[#F0F0F0]"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.47843 11.6539L0.347656 10.5231L4.87073 6.00004L0.347656 1.47696L1.47843 0.346191L6.0015 4.86927L10.5246 0.346191L11.6553 1.47696L7.13227 6.00004L11.6553 10.5231L10.5246 11.6539L6.0015 7.13081L1.47843 11.6539Z"
            fill="#2E2E2E"
          />
        </svg>
      </div>
      <div className="content flex flex-col items-center">
        <div className="parent  relative">
          <img src="/images/bg-send.webp" alt="" />
          <img
            className="absolute  left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-[5] w-[50%]"
            src="/images/send-icon.webp"
            alt=""
          />
        </div>

        <div className="text mt-5">
          <h4 className="text-black text-2xl font-semibold text-center">
            Message Sent
          </h4>
          <p className="text-gray-700 mt-10">
            Hold on we’ll reach out in a few minutes
          </p>
        </div>
      </div>
    </div>,
    document.body // This renders the notification in the body of the document
  );
};

export default Notification;
