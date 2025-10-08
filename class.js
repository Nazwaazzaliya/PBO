class Karyawan {
    constructor(nama, jabatan, gaji) {
        this.nama = nama;
        this.jabatan = jabatan;
        this.gaji = gaji;
    }

    getInformation() {
        return `${this.nama}, bekerja sebagai ${this.jabatan}, dengan gaji ${this.gaji}`;
    }

    getHistoryOccupation() {
        this.occupation = ["ojol", "relawan", "komisaris"];
        return this.occupation;
    }
}

const   karyawan1 = new Karyawan("Nazwa", "HRD", 8000000),
        karyawan2 = new Karyawan("Dina", "Programmer", 300000);

console.log(karyawan1.getInformation());
console.log(karyawan1.getHistoryOccupation)