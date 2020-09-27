import { Component, OnInit } from '@angular/core';
import { ServiciosApiService } from "./servicios/servicios-api.service";
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';




@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css'],
  providers: [ServiciosApiService]
})
export class NoticiasComponent implements OnInit {
  public articles = [];
  public dataForm: FormGroup;
  public pais = '';
  public categoria = '';
  public noticias: any;
  contries = [
    { name: 'Argentina', id: 'ar', },
    { name: 'Australia', id: 'at', },
    { name: 'Austria', id: 'au', },
    { name: 'Belgium', id: 'be', },
    { name: 'Brazil', id: 'br', },
    { name: 'Bulgaria', id: 'bg', },
    { name: 'Canada', id: 'ca', },
    { name: 'China', id: 'cn', },
    { name: 'Colombia', id: 'co', },
    { name: 'Cuba', id: 'cu', },
    { name: 'Czech Republic', id: 'cz', },
    { name: 'Egypt', id: 'eg', },
    { name: 'France', id: 'fr', },
    { name: 'Germany', id: 'de', },
    { name: 'Greece', id: 'gr', },
    { name: 'Hong Kong', id: 'hk', },
    { name: 'Hungary', id: 'hu', },
    { name: 'India', id: 'id', },
    { name: 'Indonesia', id: 'in', },
    { name: 'Ireland', id: 'ie', },
    { name: 'Israel', id: 'il', },
    { name: 'Italy', id: 'it', },
    { name: 'Japan', id: 'jp', },
    { name: 'Latvia', id: 'lv', },
    { name: 'Lithuania', id: 'lt', },
    { name: 'Malaysia', id: 'my', },
    { name: 'Mexico', id: 'mx', },
    { name: 'Morocco', id: 'ma', },
    { name: 'Netherlands', id: 'nl', },
    { name: 'New Zealand', id: 'nz', },
    { name: 'Nigeria', id: 'ng', },
    { name: 'Norway', id: 'no', },
    { name: 'Philippines', id: 'ph', },
    { name: 'Poland', id: 'pl', },
    { name: 'Portugal', id: 'pt', },
    { name: 'Romania', id: 'ro', },
    { name: 'Russia', id: 'ru', },
    { name: 'Saudi Arabia', id: 'sa', },
    { name: 'Serbia', id: 'rs', },
    { name: 'Singapore', id: 'sg', },
    { name: 'Slovakia', id: 'sk', },
    { name: 'Slovenia', id: 'si', },
    { name: 'South Africa', id: 'za', },
    { name: 'South Korea', id: 'kr', },
    { name: 'Thailand', id: 'th', },
    { name: 'Sweden', id: 'se', },
    { name: 'Switzerland', id: 'ch', },
    { name: 'Taiwan', id: 'tw', },
    { name: 'Turkey', id: 'tr', },
    { name: 'UAE', id: 'ae', },
    { name: 'Ukraine', id: 'ua', },
    { name: 'United Kingdom', id: 'gb', },
    { name: 'United States', id: 'us', },
    { name: 'Venuzuela', id: 've', }
  ]
  categories = [
    'business',
    'entertainment',
    'science',
    'sports',
    'technology'
  ]

  constructor(private apiservice: ServiciosApiService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.dataForm = this.formBuilder.group({
      country: ['', [Validators.required]],
      category: ['', [Validators.required]]
    });

    this.dataForm.get('country').valueChanges.subscribe((val) => {
      this.pais = val
      this.apiservice.getNoti(this.pais, this.categoria).subscribe((val) => {
        this.noticias = val;
      });
    });

    this.dataForm.get('category').valueChanges.subscribe((val) => {
      this.categoria = val
      this.apiservice.getNoti(this.pais, this.categoria).subscribe((val) => {
        this.noticias = val;
      });
    });
  }
}

