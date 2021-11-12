import React, { Component } from "react";
import Navbar from "./Navbar";

export default class Alldata extends Component {
  render() {
    return (
      <div>
        <Navbar />
        All data murid penjemput dan guru
        <Datamurid />
        <br />
        <Dataguru />
      </div>
    );
  }
}

class Datamurid extends Component {
  state = {
    databarusiswa: JSON.parse(localStorage.getItem("muridun")) || [],
  };
  render() {
    return (
      <div className="mt-5">
        <table className="w-10/12 table-fixed border-collapse border border-black">
          <thead>
            <tr>
              <th className="w-1/2 table-fixed border border-black">
                Nama Siswa
              </th>
              <th className="w-1/4 table-fixed border border-black">Kode</th>
              <th className="w-1/4 table-fixed border border-black">Kelas</th>
              <th className="w-1/4 table-fixed border border-black">
                Penjemput 1
              </th>
              <th className="w-1/4 table-fixed border border-black">
                Penjemput 2
              </th>
              <th className="w-1/4 table-fixed border border-black">
                Penjemput 3
              </th>
            </tr>
          </thead>
          {this.state.databarusiswa.map((x, y) => (
            <tbody key={y}>
              <tr>
                <th className="table-fixed border border-black font-normal">
                  {x.nama}
                </th>
                <th className="table-fixed border border-black font-normal">
                  {x.kode}
                </th>
                <th className="table-fixed border border-black font-normal">
                  {x.kelas}
                </th>
                <th className="table-fixed border border-black font-normal">
                  {x.jemput1}
                </th>
                <th className="table-fixed border border-black font-normal">
                  {x.jemput2}
                </th>
                <th className="table-fixed border border-black font-normal">
                  {x.jemput3}
                </th>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    );
  }
}

class Dataguru extends Component {
  state = {
    databaruguru: JSON.parse(localStorage.getItem("gurunda")) || [],
  };
  render() {
    return (
      <div className="mt-10">
        <table className="w-7/12 table-fixed border-collapse border border-black">
          <thead>
            <tr>
              <th className="w-1/2 table-fixed border border-black">
                Nama Guru
              </th>
              <th className="w-1/4 table-fixed border border-black">
                No Induk
              </th>
              <th className="w-1/4 table-fixed border border-black">Kelas</th>
            </tr>
          </thead>
          {this.state.databaruguru.map((x, y) => (
            <tbody>
              <tr key={y}>
                <th className="w-1/3 table-fixed border border-black font-normal">
                  {x.guru}
                </th>
                <th className="w-1/3 table-fixed border border-black font-normal">
                  {x.induk}
                </th>
                <th className="w-1/3 table-fixed border border-black font-normal">
                  {x.kelas}
                </th>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    );
  }
}
