import React, { Component } from "react";
import Navbar from "./Navbar";

export default class Penjemput extends Component {
  render() {
    return (
      <>
        <Navbar />
        <h3>Welcome To Halaman Penjemput</h3>

        <form class="w-full max-w-lg mt-4 bg-gray-300">
          <div class="flex flex-wrap -mx-3 mb-4">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                No Hp Penjemput
              </label>
              <input
                className="appearance-none block bg-white text-black border border-red-500 rounded py-3 px-3 w-50 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="number"
                placeholder="Ketik No Hp Penjemput"
                autoComplete="off"
              />
            </div>
          </div>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Confirm
          </button>
        </form>
        <h4>
          Logika
          <br />
          -ketika penjemput datang melakukan scan barcode
          <br />
          -ketika scan barcode cek apakah nomor hp penjemput terdaftar
          <br />
          -jika nomor hp terdaftar maka buat history baru dengan status queue
          <br />
          -ketika ada history queue tampilkan nama siswa di halaman guru
          <br />
          -setelah guru mengantar siswa ubah status jadi done
        </h4>
      </>
    );
  }
}
