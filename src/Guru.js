import React, { Component } from "react";
import Navbar from "./Navbar";

export default class Guru extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h4>Welcome To Halaman GURU</h4>
        <Tabsatu />
      </div>
    );
  }
}

class Tabsatu extends Component {
  render() {
    return (
      <div>
        <table class="w-1/2 table-fixed border-collapse border border-black">
          <thead>
            <tr>
              <th class="w-1/3 table-fixed border border-black">Nama Siswa</th>
              <th class="w-1/4 table-fixed border border-black">Kode</th>
              <th class="w-1/4 table-fixed border border-black">Kelas</th>
              <th class="w-1/3 table-fixed border border-black">Penjemput</th>
              <th class="w-1/4 table-fixed border border-black">No HP</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="table-fixed border border-black">Doni</td>
              <td class="table-fixed border border-black">32001</td>
              <td class="table-fixed border border-black">1</td>
              <td class="table-fixed border border-black">Bp Dono</td>
              <td class="table-fixed border border-black">12345</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
