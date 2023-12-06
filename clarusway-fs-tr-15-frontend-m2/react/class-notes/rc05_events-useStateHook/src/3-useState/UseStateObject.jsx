// import React, { useState } from "react";

// const UseStateObject = () => {
//   const [ad, setAd] = useState("Ahmet");
//   const [meslek, setMeslek] = useState("Developer");
//   const [yas, setYas] = useState(22);

// const [kisi, setKisi] = useState({
//   ad: "Canan",
//   meslek: "Developer",
//   yas: 22,
//   maas:5000
// });
//   const { ad, meslek, yas } = kisi;

//   const toggle = false;
// const [toggle,setToggle]=useState(false)

//   const handleSwap = () => {
// toggle = !toggle;
//     setToggle(!toggle)
//     console.log(toggle);
//     if (toggle) {
//         setKisi({
//           ad: "Canan",
//           meslek: "Developer",
//           yas: 22,
//           maas:40000
//         });
//     } else {
//         setKisi({
//           ad: "Ali",
//           meslek: "Pilot",
//           yas: 35,
//           maas:35000
//         });
//     }
//   };
//   console.log(kisi);
//   return (
//     <div>
//       <h1>Personel Formu</h1>
//       <h2>Adi: {kisi.ad}</h2>
//       <h3>Meslegi: {kisi.meslek} </h3>
//       <h3>Yasi: {kisi.yas} </h3>
//       <h3>Maas: {kisi.maas}</h3>

//       <button onClick={() => setKisi({ ...kisi, ad: "Mehmet" })}>
//         İsim Degistir
//       </button>

//       <button onClick={() => setKisi({ ...kisi, meslek: "Tester" })}>
//         Meslek Degistir
//       </button>
//       <button onClick={() => setKisi({ ...kisi, yas: kisi.yas + 1 })}>
//         Yas Degistir
//       </button>
//       <button onClick={() => setKisi({ ad: "Can", meslek: "PO", yas: 52 })}>
//         Tamamini Guncelle
//       </button>
//       <button onClick={handleSwap}>Swap</button>
//     </div>
//   );
// };

// export default UseStateObject;

import React, { useState } from "react";

const UseStateObject = () => {
  const [ad, setAd] = useState("Ahmet");
  const [meslek, setMeslek] = useState("Developer");
  const [yas, setYas] = useState(22);

  const [kisi, setKisi] = useState({
    ad: "Canan",
    meslek: "Devops",
    yas: 22,
  });
  const [toggle, setToggle] = useState(true);
  // let toggle = false;
  const handleSwap = () => {
    // toggle = !toggle;
    setToggle(!toggle)
    console.log(toggle);
    if (toggle) {
      setKisi({
        ad: "Canan",
        meslek: "Devops",
        yas: 22,
      });
    } else {
      setKisi({
        ad: "Ali",
        meslek: "DevopsEng",
        yas: 35,
      });
    }
  };

  return (
    <div>
      <h1>Personel Formu</h1>
      <h2>Adi: {kisi.ad} </h2>
      <h3>Mesleği {kisi.meslek}</h3>
      <h3>Yasi: {kisi.yas} </h3>

      <button onClick={() => setKisi({ ...kisi, ad: "Mehmet" })}>
        İsim Degistir
      </button>
      <button onClick={() => setKisi({ ...kisi, meslek: "Tırcı" })}>
        Meslek Degistir
      </button>
      <button onClick={() => setKisi({ ...kisi, yas: kisi.yas + 1 })}>
        Yas Degistir
      </button>

      <button
        onClick={() => setKisi({ ad: "Mücahit", meslek: "Officer", yas: 32 })}
      >
        Tamaminin Guncelle
      </button>

      <button onClick={handleSwap}>Swap</button>
      {/* Toggle true ise UseStateCounter componentini goster aksi takdirde gosterme */}
      {toggle==false && Element.removeEventListener("onclick",handleSwap) }
    </div>
  );
};

export default UseStateObject;
