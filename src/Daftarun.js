import React, { Component } from "react";
import Navbar from "./Navbar";

export default class Daftarun extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="text-xs md:text-lg mx-4 md:mx-5">
          Silakan Daftarkan Guru Di Sini
        </div>
        <Gr />
      </div>
    );
  }
}

class Gr extends Component {
  state = {
    guru: "",
    induk: "",
    nohp: "",
    kelas: "",
  };

  onsubmit = (event) => {
    event.preventDefault();
    const { guru, induk, nohp, kelas } = event.target;
    const data1 = {
      guru: guru.value,
      induk: induk.value,
      nohp: nohp.value,
      kelas: kelas.value,
    };
    const data2 = JSON.parse(localStorage.getItem("gurunda")) || [];
    data2.push(data1);
    localStorage.setItem("gurunda", JSON.stringify(data2));
    this.setState({
      guru: "",
      induk: "",
      nohp: "",
      kelas: "",
    });
    console.log(data1);
  };

  render() {
    return (
      <form
        className="flex w-full md:w-2/3 -mx-3 mt-5 mb-10 bg-gray-300"
        onSubmit={(e) => this.onsubmit(e)}
      >
        <div>
          <div className="px-5 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Nama Guru
            </label>
            <input
              className="w-56 md:w-64 appearance-none block bg-white text-black border border-red-500 rounded py-3 px-3 w-50 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-full-name"
              type="text"
              placeholder="Ketik Nama Guru"
              autoComplete="off"
              name="guru"
              onChange={(e) => this.setState({ guru: e.target.value })}
              value={this.state.guru}
            />
          </div>
          <div className="w-full md:w-1/2 px-5 mb-2">
            <label
              className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Kode Guru
            </label>
            <input
              className="w-56 md:w-64 appearance-none block bg-white text-black border border-red-500 rounded py-3 px-3 w-50 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="number"
              placeholder="Ketik Kode Guru"
              autoComplete="off"
              name="induk"
              onChange={(e) => this.setState({ induk: e.target.value })}
              value={this.state.induk}
            />
          </div>
          <div className="w-full px-5 md:mb-1">
            <label
              className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              No Hp Guru
            </label>
            <input
              className="w-56 md:w-64 appearance-none block bg-white text-black border border-red-500 rounded py-3 px-3 w-50 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="number"
              placeholder="Ketik No Hp Guru"
              autoComplete="off"
              name="nohp"
              min="10000000"
              max="99999999"
              onChange={(e) => this.setState({ nohp: e.target.value })}
              value={this.state.nohp}
            />
          </div>

          <div className="w-full md:w-1/2 px-5 mt-6">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Daftar 3
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
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
      </form>
    );
  }
}
