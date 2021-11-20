import React, { Component } from "react";

import Navbar from "./Navbar";

export default class Daftar extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="text-xs md:text-base mx-5 md:mx-5">
          Silakan Daftarkan Murid Di Sini
        </div>
        <Mr />
      </>
    );
  }
}

//className="text-black md:text-red text-xs md:text:xl"
//text-black untuk versi mobile, md:text-red untuk versi web
//text-xs untuk versi mobile, md:text:xl untuk versi web
// SATU MD: HANYA UNTUK SATU STYLE TIDAK BISA DIGABUNG ( WARNA DAN SIZE PAKAI MD: 1 1 )

class Mr extends Component {
  state = {
    nama: "",
    kode: "",
    jemput1: "",
    jemput2: "",
    jemput3: "",
    kelas: "",
  };

  onsubmit = (event) => {
    event.preventDefault();
    const { nama, kode, jemput1, jemput2, jemput3, kelas } = event.target;
    const data1 = {
      nama: nama.value,
      kode: kode.value,
      jemput1: jemput1.value,
      jemput2: jemput2.value,
      jemput3: jemput3.value,
      kelas: kelas.value,
    };
    const data2 = JSON.parse(localStorage.getItem("muridun")) || [];
    data2.push(data1);
    localStorage.setItem("muridun", JSON.stringify(data2));
    this.setState({
      nama: "",
      kode: "",
      jemput1: "",
      jemput2: "",
      jemput3: "",
      kelas: "",
    });
    console.log(data1);
  };

  render() {
    return (
      <form
        className="mx-2 md:mx-1 w-full md:w-2/3 bg-gray-300 md:bg-gray-300"
        onSubmit={(e) => this.onsubmit(e)}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3 md:mt-5">
          <div className="grid-cols-1 w-80 md:w-5/6 px-3 md:px-5 mb-0 md:mb-6">
            <label
              className="block uppercase tracking-wide text-red-600 md:text-black text-xs md:text-xs font-bold mb-2"
              htmlFor="grid-full-name"
            >
              Nama Siswa
            </label>
            <input
              className="w-52 md:w-full py-3 px-3 md:px-5 w-90 appearance-none blockbg-white text-black border border-red-500 rounded leading-tight focus:outline-none focus:bg-white"
              id="grid-full-name"
              name="nama"
              type="text"
              placeholder="Ketik Nama Siswa"
              autoComplete="off"
              onChange={(e) => this.setState({ nama: e.target.value })}
              value={this.state.nama}
            />
          </div>
          <div className="md:w-1/3 px-3 mb-3 md:mb-0">
            <label
              className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
              htmlFor="grid-state"
            >
              Kelas
            </label>
            <div className="absolute">
              <select
                className="block appearance-none bg-white border border-gray-200 text-black py-3 px-3 pr-9 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                name="kelas"
              >
                <option>Kelas 1</option>
                <option>Kelas 2</option>
                <option>Kelas 3</option>
                <option>Kelas 4</option>
                <option>Kelas 5</option>
                <option>Kelas 6</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-4 md:mt-2">
          <div className="w-64 md:w-full px-3 md:px-5 mt-9 md:mt-1 mb-1">
            <label
              className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Kode Siswa
            </label>
            <input
              className="w-52 md:w-5/12 appearance-none block bg-white text-black border border-red-500 rounded py-3 px-3 w-50 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              name="kode"
              type="number"
              placeholder="Ketik Kode Siswa"
              autoComplete="off"
              min="100"
              max="999"
              onChange={(e) => this.setState({ kode: e.target.value })}
              value={this.state.kode}
            />
          </div>
          <div className="w-64 md:w-full px-3 md:px-5 mt-1">
            <label
              className="whitespace-nowrap block uppercase tracking-wide text-black text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              No Hp Penjemput 1
            </label>
            <input
              className="w-52 md:w-5/12 appearance-none block bg-white text-black border border-red-500 rounded py-3 px-3 w-50 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              name="jemput1"
              type="number"
              placeholder="Ketik Kode Siswa"
              autoComplete="off"
              min="10000000"
              max="99999999"
              onChange={(e) => this.setState({ jemput1: e.target.value })}
              value={this.state.jemput1}
            />
          </div>
          <div className="w-64 md:w-full px-3 md:px-5 mt-1">
            <label
              className="whitespace-nowrap block uppercase tracking-wide text-black text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              No Hp Penjemput 2
            </label>
            <input
              className="w-52 md:w-5/12 appearance-none block bg-white text-black border border-red-500 rounded py-3 px-3 w-50 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              name="jemput2"
              type="number"
              placeholder="Ketik Kode Siswa"
              autoComplete="off"
              min="10000000"
              max="99999999"
              onChange={(e) => this.setState({ jemput2: e.target.value })}
              value={this.state.jemput2}
            />
          </div>
          <div className="w-64 md:w-full px-3 md:px-5 mt-1">
            <label
              className="whitespace-nowrap block uppercase tracking-wide text-black text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              No Hp Penjemput 3
            </label>
            <input
              className="w-52 md:w-5/12 appearance-none block bg-white text-black border border-red-500 rounded py-3 px-3 w-50 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              name="jemput3"
              type="number"
              placeholder="Ketik Kode Siswa"
              autoComplete="off"
              min="10000000"
              max="99999999"
              onChange={(e) => this.setState({ jemput3: e.target.value })}
              value={this.state.jemput3}
            />
          </div>

          <div className="md:w-1/2 px-3 md:px-5 mt-6">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Daftar 1
            </button>
          </div>
        </div>
      </form>
    );
  }
}

// button sudah ada onSubmit
// fungsi onsubmit sudah ada
