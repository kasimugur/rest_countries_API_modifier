interface Currency {
  code: string;
  name: string;
  symbol: string;
}

interface Language {
  iso639_1?: string;
  iso639_2: string;
  name: string;
  nativeName?: string;
}

interface Flag {
  svg: string;
  png: string;
}

interface RegionalBloc {
  acronym: string;
  name: string;
  otherNames?: string[]; // Diğer isimler isteğe bağlı
}

export interface Country {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital?: string;
  altSpellings?: string[];
  subregion: string;
  region: string;
  population: number;
  latlng?: number[]; // [latitude, longitude]
  demonym: string;
  area?: number; // Opsiyonel, bazı ülkeler için boş olabilir
  gini?: number; // Opsiyonel
  timezones: string[];
  borders?: string[]; // Komşu ülkeler, bazı ülkelerde yok
  nativeName: string;
  numericCode: string;
  flags: Flag;
  currencies?: Currency[];
  languages: Language[];
  translations: Record<string, string | undefined>; // Dinamik çeviri değerleri
  flag: string; // Eski bayrak değeri, flags altında da mevcut
  regionalBlocs?: RegionalBloc[]; // Opsiyonel, bazı ülkelerde yok
  cioc?: string; // Olimpiyat kodu, opsiyonel
  independent: boolean;
}
