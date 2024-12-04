interface Currency {
  code: string;
  name: string;
  symbol: string;
}

interface Language {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
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
  capital: string;
  altSpellings: string[];
  subregion: string;
  region: string;
  population: number;
  latlng: number[];
  demonym: string;
  area: number;
  gini?: number; // Gini katsayısı isteğe bağlı
  timezones: string[];
  borders?: string[];
  nativeName: string;
  numericCode: string;
  flags: Flag;
  currencies: Currency[];
  languages: Language[];
  translations: Record<string, string>; // Dillerin çevirileri
  flag: string;
  regionalBlocs: RegionalBloc[];
  cioc: string;
  independent: boolean;
}