//?=============================================================
//?                 LIFECYCLE METOTLARI
//?      https://reactjs.org/docs/react-component.html
//?=============================================================

//* Lifecycle metotlari componentlerin DOM'da varoldugu sure boyunca
//* uzerinde islem yapmamizi imkan saglayan ozel React metotlaridir.
//* Ornegin bir component olusturuldugunda, DOM'a basildiginda,
//* guncellendiginde veya DOM'dan kaldirildiginda bir seyler yapmak icin
//* lifecycle metotlari kullanilabilir.
//* En bilindik lifecycle metodu render() metodudur

//* Bir component'in olusturulmasi (constructor),
//* Bir componentin DOM agacina eklenmesinin hemen sonrasi(componentDidMount)
//* Bir component'in DOM'a basilmasi (render)
//* (Optional) Bir componentin guncellenmesinin hemen sonrasi (componentDidUpdate)
//* Bir component'in DOM agacindan kaldirilmasi sonrasi(componentWillUnmount)

import React from "react";

class LifeCycleMethods extends React.Component {
  //! 1-) Bir component in oluşsturulmasında cagırılır
  constructor(props) {
    console.log("Constructor running");
    super(props);
    this.state = {
      count: 10,
    };
  }

  handleInc = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  handleDec = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  //! 3-) Bir component DOM agacına eklendıgınde calıstırılır
  //! (ilk render sonrası )
  //! Her yasam dongusu için bir kere calısır
  componentDidMount() {
    //? subscription (fetch, timer kurulumu initilization işlemleri(local storage))
    console.log("componentDidMount");
  }

  componentDidUpdate(){
    //? Bir componentin state'i veya propû değiştikten sonra bir işlemi tetiklemek istersek didUpdate metodu kullanilailir. Örneğin, API'den çekilen parite bilgisine göre alım veya satim isleminin kontorülünün yapılmasi gibi.
    console.log("Component did Update");
  }

  componentWillUnmount(){
    //? Tüm üyeliklerin (Fetch, timer, silme) iptalinin yapilabileceği method
    console.log("componentWillUnmount");
  }
//! 2-) Ikıncı olarak calısır
  render() {
    console.log("***********************");
    console.log("render running");
    return (
      <div className="container text-center">
        <h1 className="text-danger">LIFECYCLE METHODS</h1>
        <h3>COUNT={this.state.count}</h3>
        <button className="btn btn-info" onClick={this.handleInc}>
          INC
        </button>
        <button className="btn btn-danger ms-2" onClick={this.handleDec}>
          Dec
        </button>
      </div>
    );
  }
}
export default LifeCycleMethods;
