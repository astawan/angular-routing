import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  nama: string = 'Kadek Darmaastawan';
  prodi: string = 'Teknologi Informasi';
  jenis: boolean = true;
  nilaiRata?: number;
  nilaiPenguji1?: number;
  nilaiPenguji2?: number;
  nilaiPenguji3?: number;
  constructor() {}

  ngOnInit(): void {}

  onRata() {
    this.nilaiRata =
      (this.nilaiPenguji1! + this.nilaiPenguji2! + this.nilaiPenguji3!) / 3;
  }
}
