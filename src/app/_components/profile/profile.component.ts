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
  nilaiRata: number = 0;
  nilaiPenguji1: number = 0;
  nilaiPenguji2: number = 0;
  nilaiPenguji3: number = 0;
  constructor() {}

  ngOnInit(): void {
    this.nilaiPenguji1 = 100;
  }

  onRata() {
    this.nilaiRata =
      (this.nilaiPenguji1 + this.nilaiPenguji2 + this.nilaiPenguji3) / 3;
    console.log(
      (this.nilaiPenguji1 + this.nilaiPenguji2 + this.nilaiPenguji3) / 3
    );
  }
}
