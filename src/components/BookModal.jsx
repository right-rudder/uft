import { useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";

const OpenModalButton = ({ webhookUrl }) => {
  const [showModal, setShowModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [userName, setUserName] = useState("");
  const modalRef = useRef(null);

  const toggleModal = () => {
    setShowModal(!showModal);
    setFormSubmitted(false);
  };

  // 🔒 Disable scroll on <body> when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showModal]);

  // 🖱 Close modal when clicking outside of the modal box
  const handleOverlayClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      toggleModal();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    if (formData.get("confirm-email")) return;

    const name = formData.get("name");
    setUserName(name);

    fetch(webhookUrl, {
      method: "POST",
      body: new URLSearchParams(formData),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((response) => {
        if (response.ok) {
          setFormSubmitted(true);
        } else {
          console.error("Form submission failed:", response.statusText);
        }
      })
      .catch((error) => {
        console.error("Network error:", error);
      });
  };

  return (
    <>
      <button className="btn-accent" onClick={toggleModal}>
        Download the free guide
      </button>

      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleOverlayClick}
        >
          <div
            ref={modalRef}
            className="bg-white p-8 max-w-sm m-4 text-black relative rounded-md"
            onClick={(e) => e.stopPropagation()} // prevent inside clicks from closing
          >
            {!formSubmitted ? (
              <>
                <h2 className="text-2xl font-bold mb-4">Get the free guide</h2>
                <p className="mb-4">
                  Fill out the form below to get the free guide.
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="phone" className="block mb-2">
                      Phone
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>
                  <p className="hidden">
                    <label>
                      Don’t fill this out if you’re human:
                      <input name="confirm-email" />
                    </label>
                  </p>
                  <button type="submit" className="btn-accent w-full">
                    Get the guide
                  </button>
                </form>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-4">
                  Thank you, {userName}, for downloading our Quick Start Guide!
                </h2>
                <p className="mb-4">
                  You will receive an email with a download link shortly. Please
                  check your junk/spam folders if you do not receive anything
                  from us.
                </p>
              </>
            )}

            <button
              className="bg-accent-500 p-[2px] rounded-full absolute top-2 right-2"
              onClick={toggleModal}
            >
              <IoMdClose className="text-xl text-white" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default OpenModalButton;
