const Events = () => {
  const handleTikla = (e) => {
    alert("Tiklandi");
    console.log("tiklandi");
    console.log(e);
    console.log(e.target);
    console.log("Name:", e.target.name);
    console.log("ID:", e.target.id);
  };
  const handleSil = function (message) {
    console.log("Silindi");
    console.log(message);
  };
  //?Statik bir değişken
  let message = "FS15";

  function handleDegistir() {
    message = "FS15 REACT OGRENIYOR";
    console.log(message);
  }

  //? Bir componenetin return kısmı 3 farklı yöntemle render edilir
  //? 1-Herhangi bir state değişirse
  //? 2-Props değişirse
  //? 3-Refresh Force edilirse (tercih edilen bir durum olmaz)

  return (
    <div>
      <h1>Events</h1>
      <h2> {message} </h2>
      <button onClick={handleTikla} id="btn" name="my-button">
        Tikla
      </button>
      {/* Eger bir event fonksiyonunun paremetresi olmasi gerekiyorsa
      bu fonksiyon bir arrow fonks. tarafindan  cagrilmalidir. Aksi
      takdirde event fonksiyonu event gerceklesmeden cagirilir */}
      <button onClick={() => handleSil(message)}>Sil</button>

      <button onClick={handleDegistir}>Degistir</button>
    </div>
  );
};

export default Events;

//! message console'da guncellendigini ancak DOM'da guncellenmedigini gorduk.
//* Bunun sebebi REACT'in aksi belirtilmedigi surece elementleri
//* static olarak kabul etmesinden kaynaklanir.

//* React bunu DOM islemlerini minimize etmek icin yapmaktadir.
//* REACT'a hangi elementleri interaktif oldugu belirtilmelidir.
//! React'a elementlerin interaktif oldugunu belirtmek icin state'ler kullanilir.
//! State, elementlerin degisiklik durumlarini tutan nesnelerdir.
//? ReactJs'de state'leri kullanmak icin  2 ayri Component yapisi bulunmaktadir.
//? 1. Hooks (Functional Components).
//? 2. Statefull Classes (Class Components).

//? Biz su ana kadar uygulamalarimizda Fonksiyonel Component'leri kullandik.
//? Yaygin kullanim Fonksiyonel Component'lerdir.

