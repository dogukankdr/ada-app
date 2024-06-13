import React, { useState } from "react";

const DonateComponent = () => {
  
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const buttonCount = 19;

  const buttonLabels = [
    "T.C. ZİRAAT BANKASI A.Ş. ANKARA KAMU KURUMSAL ŞUBESİ",
    "TÜRKİYE VAKIFLAR BANKASI T.A.O KIZILAY TİCARİ ŞUBE",
    "TÜRKİYE HALK BANKASI A.Ş BAKANLIKLAR ŞUBESİ",
    "KUVEYT TÜRK KATILIM BANKASI A.Ş.BALGAT ŞUBESİ",
    "ZİRAAT KATILIM BANKASI A.Ş.KURUMSAL ANKARA ŞUBESİ",
    "VAKIF KATILIM BANKASI A.Ş. KURUMSAL ANKARA ŞUBESİ",
    "ALBARAKA TÜRK KATILIM BANKASI A.Ş. BAŞKENT KURUMSAL ŞUBESİ",
    "TÜRKİYE EMLAK KATILIM BANKASI A.Ş ANKARA ŞUBESİ",
    "TÜRKİYE İŞ BANKASI A.Ş. BAŞKENT ŞUBESİ",
    "YAPI ve KREDİ BANKASI A.Ş. ANKARA TİCARİ ŞUBESİ ",
    "GARANTİ BANKASI A.Ş. ANKARA ŞUBESİ",
    "DENİZBANK A.Ş. BAŞKENT TİCARİ MERKEZ ve KAMU FİNANSMANI ŞUBESİ",
    "ŞEKERBANK T.A.Ş. ANKARA ŞUBESİ",
    "TÜRK EKONOMİ BANKASI A.Ş. ÇANKAYA ANKARA ŞUBESİ",
    "QNB FİNANSBANK A.Ş. ÜMİTKÖY ŞUBESİ",
    "AKBANK T.A.Ş. BAŞKENT KURUMSAL ŞUBESİ",
    "PTTBANK ",
    "ANADOLUBANK ANKARA KURUMSAL ŞUBESİ ",
    "TÜRKİYE FİNANS KATILIM BANKASI A.Ş. ÇUKURAMBAR ŞUBESİ ",
  ];

  const buttonModalContent = {
    1: (
      <div>
        <p>TL: TR73 0001 0017 4555 5555 5552 04</p>
        <p>USD: TR46 0001 0017 4555 5555 5552 05</p>
        <p>EURO: TR19 0001 0017 4555 5555 5552 06</p>
      </div>
    ),
    2: (
      <div>
        <p>TL: TR44 0001 0017 4555 5555 5552 04</p>
        <p>USD: TR47 0001 0017 4555 5555 5552 05</p>
        <p>EURO: TR20 0001 0017 4555 5555 5552 06</p>
      </div>
    ),
    3: (
      <div>
        <p>TL: TR45 0001 0017 4555 5555 5552 04</p>
        <p>USD: TR48 0001 0017 4555 5555 5552 05</p>
        <p>EURO: TR21 0001 0017 4555 5555 5552 06</p>
      </div>
    ),
    4: (
      <div>
        <p>TL: TR45 0001 0017 4555 5555 5552 04</p>
        <p>USD: TR48 0001 0017 4555 5555 5552 05</p>
        <p>EURO: TR21 0001 0017 4555 5555 5552 06</p>
      </div>
    ),
    5: (
      <div>
        <p>TL: TR45 0001 0017 4555 5555 5552 04</p>
        <p>USD: TR48 0001 0017 4555 5555 5552 05</p>
        <p>EURO: TR21 0001 0017 4555 5555 5552 06</p>
      </div>
    ),
    6: (
      <div>
        <p>TL: TR45 0001 0017 4555 5555 5552 04</p>
        <p>USD: TR48 0001 0017 4555 5555 5552 05</p>
        <p>EURO: TR21 0001 0017 4555 5555 5552 06</p>
      </div>
    ),
    7: (
      <div>
        <p>TL: TR45 0001 0017 4555 5555 5552 04</p>
        <p>USD: TR48 0001 0017 4555 5555 5552 05</p>
        <p>EURO: TR21 0001 0017 4555 5555 5552 06</p>
      </div>
    ),
    8: (
      <div>
        <p>TL: TR45 0001 0017 4555 5555 5552 04</p>
        <p>USD: TR48 0001 0017 4555 5555 5552 05</p>
        <p>EURO: TR21 0001 0017 4555 5555 5552 06</p>
      </div>
    ),
    9: (
      <div>
        <p>TL: TR45 0001 0017 4555 5555 5552 04</p>
        <p>USD: TR48 0001 0017 4555 5555 5552 05</p>
        <p>EURO: TR21 0001 0017 4555 5555 5552 06</p>
      </div>
    ),
    10: (
      <div>
        <p>TL: TR45 0001 0017 4555 5555 5552 04</p>
        <p>USD: TR48 0001 0017 4555 5555 5552 05</p>
        <p>EURO: TR21 0001 0017 4555 5555 5552 06</p>
      </div>
    ),
    11: (
      <div>
        <p>TL: TR45 0001 0017 4555 5555 5552 04</p>
        <p>USD: TR48 0001 0017 4555 5555 5552 05</p>
        <p>EURO: TR21 0001 0017 4555 5555 5552 06</p>
      </div>
    ),
    12: (
      <div>
        <p>TL: TR45 0001 0017 4555 5555 5552 04</p>
        <p>USD: TR48 0001 0017 4555 5555 5552 05</p>
        <p>EURO: TR21 0001 0017 4555 5555 5552 06</p>
      </div>
    ),
    13: (
      <div>
        <p>TL: TR45 0001 0017 4555 5555 5552 04</p>
        <p>USD: TR48 0001 0017 4555 5555 5552 05</p>
        <p>EURO: TR21 0001 0017 4555 5555 5552 06</p>
      </div>
    ),
    14: (
      <div>
        <p>TL: TR45 0001 0017 4555 5555 5552 04</p>
        <p>USD: TR48 0001 0017 4555 5555 5552 05</p>
        <p>EURO: TR21 0001 0017 4555 5555 5552 06</p>
      </div>
    ),
    15: (
      <div>
        <p>TL: TR45 0001 0017 4555 5555 5552 04</p>
        <p>USD: TR48 0001 0017 4555 5555 5552 05</p>
        <p>EURO: TR21 0001 0017 4555 5555 5552 06</p>
      </div>
    ),
    16: (
      <div>
        <p>TL: TR45 0001 0017 4555 5555 5552 04</p>
        <p>USD: TR48 0001 0017 4555 5555 5552 05</p>
        <p>EURO: TR21 0001 0017 4555 5555 5552 06</p>
      </div>
    ),
    17: (
      <div>
        <p>TL: TR45 0001 0017 4555 5555 5552 04</p>
        <p>USD: TR48 0001 0017 4555 5555 5552 05</p>
        <p>EURO: TR21 0001 0017 4555 5555 5552 06</p>
      </div>
    ),
    18: (
      <div>
        <p>TL: TR45 0001 0017 4555 5555 5552 04</p>
        <p>USD: TR48 0001 0017 4555 5555 5552 05</p>
        <p>EURO: TR21 0001 0017 4555 5555 5552 06</p>
      </div>
    ),
    19: (
      <div>
        <p>TL: TR45 0001 0017 4555 5555 5552 04</p>
        <p>USD: TR48 0001 0017 4555 5555 5552 05</p>
        <p>EURO: TR21 0001 0017 4555 5555 5552 06</p>
      </div>
    ),
  };

  const openModal = (buttonId) => {
    const content = buttonModalContent[buttonId];
    setModalContent(content);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    
    <div>
      {Array.from({ length: buttonCount }, (_, index) => (
        <button
          key={index + 1}
          className="donate-button"
          onClick={() => openModal(index + 1)}
        >
          {" "}
          {buttonLabels[index]}
        </button>
      ))}

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>
              X
            </span>
            <p>{modalContent}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonateComponent;
