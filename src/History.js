import QrReader from "react-qr-scanner";
import React, { Component } from "react";
import Navbar from "./Navbar";

export default class History extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h4>Welcome To Halaman HISTORY</h4>
        <Tabelsatu />
      </div>
    );
  }
}

class Tabelsatu extends Component {
  state = {
    asd: JSON.parse(localStorage.getItem("history")) || [],
  };

  render() {
    return (
      <div>
        <table class="table-fixed border-collapse border border-black">
          <thead>
            <tr>
              <th class="table-fixed border px-3 whitespace-nowrap border-black">
                Nama Siswa
              </th>
              <th class="table-fixed border px-3 whitespace-nowrap border-black">
                Kode
              </th>
              <th class="table-fixed border px-3 whitespace-nowrap border-black">
                Kelas
              </th>
              <th class="table-fixed border px-3 whitespace-nowrap border-black">
                Penjemput
              </th>
              <th class="table-fixed border px-3 whitespace-nowrap border-black">
                Guru
              </th>
              <th class="table-fixed border px-3 whitespace-nowrap border-black">
                status
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.asd.map((x, y) => (
              <tr>
                <td class="table-fixed border px-3 whitespace-nowrap border-black">
                  {x.nama}
                </td>
                <td class="table-fixed border px-3 whitespace-nowrap border-black">
                  {x.kode}
                </td>
                <td class="table-fixed border px-3 whitespace-nowrap border-black">
                  {x.kelas}
                </td>
                <td class="table-fixed border px-3 whitespace-nowrap border-black">
                  {x.jemput1}
                </td>
                <td class="table-fixed border px-3 whitespace-nowrap border-black">
                  {x.guru}
                </td>
                <td class="table-fixed border px-3 whitespace-nowrap border-black">
                  {x.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

// export class Test extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       delay: 10000,
//       result: null,
//     };

//     this.handleScan = this.handleScan.bind(this);
//   }
//   handleScan(data) {
//     this.setState({
//       result: data,
//     });
//     console.log(data);
//   }
//   handleError(err) {
//     console.error(err);
//   }
// componentDidMount(){
//   this.setState({result:"as"})
// }
//   render() {
//     const previewStyle = {
//       height: 240,
//       width: 320,
//     };

//     return !this.state.result ? (
//       <div>
//         <QrReader
//           delay={this.state.delay}
//           style={previewStyle}
//           onError={this.handleError}
//           onScan={this.handleScan}
//         />
//       </div>
//     ) : (
//       <div
//         style={{ height: 240, width: 320 }}
//         className="border border-black flex flex-col place-content-center items-center align-middle"
//       >
//         <button
//           onClick={() => this.setState({ result: null })}
//           className="px-3 py-2 bg-red-500 hover:bg-yellow-500 text-white"
//         >
//           SCAN QR
//         </button>
//       </div>
//     );
//   }
// }
