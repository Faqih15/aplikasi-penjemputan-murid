import React, { Component } from "react";

import { Router } from "react-router";
import Navbar from "./Navbar";

export default class Daftar extends Component {
  render() {
    return (
      <>
        <Navbar />

        <form className="w-full">
          <Mr />
          <Pj />
          <Gr />

          {/* <Gr /> */}
        </form>
      </>
    );
  }
}

class Mr extends Component {
  render() {
    return (
      <div className="flex -mx-3 mt-5 mb-10 w-2/3 bg-gray-300">
        <div>
          <div className="md:w-1/2 px-5 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Nama Siswa
            </label>
            <input
              className="appearance-none block bg-white text-black border border-red-500 rounded py-3 px-3 w-50 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Ketik Nama Siswa"
              autoComplete="off"
            />
          </div>
          <div className="w-full md:w-1/2 px-5">
            <label
              className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Kode Siswa
            </label>
            <input
              className="appearance-none block bg-white text-black border border-red-500 rounded py-3 px-3 w-50 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Ketik Kode Siswa"
              autoComplete="off"
              s
            />
          </div>

          <div className="w-full md:w-1/2 px-5 mt-6">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Daftar 1
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
            for="grid-state"
          >
            Kelas
          </label>
          <div className="absolute">
            <select
              className="block appearance-none bg-white border border-gray-200 text-black py-3 px-3 pr-9 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
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
    );
  }
}

class Pj extends Component {
  render() {
    return (
      <div className="flex -mx-3 mt-5 mb-10 w-2/3 bg-gray-300">
        <div>
          <div className="md:w-2/3 px-5 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Nama Penjemput
            </label>
            <input
              className="appearance-none block bg-white text-black border border-red-500 rounded py-3 px-3 w-50 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Ketik Nama Penjemput"
              autoComplete="off"
            />
          </div>
          <div className="w-full md:w-1/2 px-5 mt-6">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Daftar 2
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Nomor HP
          </label>
          <input
            className="block appearance-nones bg-white border border-gray-200 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="number"
            placeholder="Ketik Nomor Hp Penjemput"
            autoComplete="off"
          />
        </div>
      </div>
    );
  }
}

class Gr extends Component {
  render() {
    return (
      <div className="flex -mx-3 mt-5 mb-10 w-2/3 bg-gray-300">
        <div>
          <div className="md:w-1/2 px-5 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Nama Guru
            </label>
            <input
              className="appearance-none block bg-white text-black border border-red-500 rounded py-3 px-3 w-50 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Ketik Nama Guru"
              autoComplete="off"
            />
          </div>
          <div className="w-full md:w-1/2 px-5">
            <label
              className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Kode Guru
            </label>
            <input
              className="appearance-none block bg-white text-black border border-red-500 rounded py-3 px-3 w-50 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Ketik Kode Guru"
              autoComplete="off"
              s
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
            for="grid-state"
          >
            Kelas
          </label>
          <div className="absolute">
            <select
              className="block appearance-none bg-white border border-gray-200 text-black py-3 px-3 pr-9 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
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
    );
  }
}

class Card extends Component {
  render() {
    return (
      <div className="flex flex-col w-90 lg:w-4/4 justify-center bg-blue">
        <div className="container w-full px-4">
          <div className="flex flex-wrap justify-center">
            <div className="w-full">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
                <div className="flex-auto w-70 p-5 lg:p-10 bg-blue-500">
                  {" "}
                  {/* warna biru */}
                  <h4 className="text-2xl mb-4 text-black font-semibold">
                    Have a suggestion?
                  </h4>
                  <form id="feedbackForm" action="" method="">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-black text-xs font-bold mb-2"
                        for="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="border-0 px-3 py-3 rounded text-sm shadow w-full
                      bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400"
                        placeholder=" "
                        style={{ transition: "all 0.15s ease 0s" }}
                        required
                      />
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-black text-xs font-bold mb-2"
                        for="message"
                      >
                        Message
                      </label>
                      <textarea
                        maxlength="300"
                        name="feedback"
                        id="feedback"
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 bg-gray-300 placeholder-black text-gray-800 rounded text-sm shadow focus:outline-none w-full"
                        placeholder=""
                        required
                      ></textarea>
                    </div>
                    <div className="text-center mt-6">
                      <button
                        id="feedbackBtn"
                        className="bg-yellow-300 text-black text-center mx-auto active:bg-yellow-400 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="submit"
                        style={{ transition: "all 0.15s ease 0s" }}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
