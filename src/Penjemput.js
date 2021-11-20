import React, { Component } from "react";
import Navbar from "./Navbar";

const daftarMurid = [
  { name: "amah", penjemput: [{ nmr: "1223" }, { nmr: "321" }, { nmr: 567 }] },
  { name: "izul", penjemput: [{ nmr: "1223" }, { nmr: "321" }, { nmr: 567 }] },
  { name: "izul", penjemput: [{ nmr: "1223" }, { nmr: "321" }, { nmr: 567 }] },
];

export default class Penjemput extends Component {
  state = {
    murid: {},
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const history = {
      name: this.state.murid?.name,
      penjemput: e.target.penjemput.value,
    };
    console.log("history", history);
  };
  render() {
    return (
      <>
        <Navbar />
        <h3>Welcome To Halaman Penjemput</h3>

        <form
          onSubmit={this.handleSubmit}
          class="w-full max-w-lg mt-4 bg-gray-300"
        >
          <div class="flex flex-wrap px-3 -mx-3 mb-4">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                No Hp Penjemput
              </label>
              {/* <input

                className="w-full appearance-none block bg-white text-black border border-red-500 rounded py-3 px-3 w-50 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="number"
                min="10000000"
                max="99999999"
                placeholder="Ketik No Hp Penjemput"
                autoComplete="off"
              /> */}
              <div>
                <select
                  onChange={(e) => {
                    const [murid] = daftarMurid.filter(
                      (x) => x.name === e.target.value
                    );
                    this.setState({ murid });
                  }}
                >
                  <option>////// </option>

                  {daftarMurid.map((v) => (
                    <option>{v.name}</option>
                  ))}
                </select>
              </div>
              <select name="penjemput">
                <option>////// </option>
                {this.state.murid.penjemput?.map((v) => (
                  <option>{v.nmr}</option>
                ))}
              </select>
            </div>
          </div>
          <div class="px-3 mb-6">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Confirm
            </button>
          </div>
        </form>
        <h4>
          Logika
          <br />
          -ketika penjemput datang melakukan scan barcode
          <br />
          -ketika scan barcode cek apakah nomor hp penjemput terdaftar / pakai
          fungsi find atau filter data local storage
          <br />
          -jika nomor hp terdaftar maka buat history baru dengan status queue
          <br /> objek yg ada dari alldata diambil ke history dengan FUNGSI PUSH
          dan ditambahkan status queue dengan key nya
          <br />
          -ketika ada history queue tampilkan nama siswa di halaman guru
          <br />
          -setelah guru mengantar siswa ubah status jadi done
        </h4>
      </>
    );
  }
}
