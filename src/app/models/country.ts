export class Country {
    name: string;
    callingCodes: string;
    capital: string;
    region: string;
    subregion: string;
    population: number;
    latlng: LatLng[];
    area: number;
    borders: any[];
    nativeName: string;
    flag: string;
    languages: Language[];
}

export class Language {
    // tslint:disable-next-line: variable-name
    iso639_1: string;
    // tslint:disable-next-line: variable-name
    iso639_2: string;
    name: string;
    nativeName: string;
}

export class LatLng {
    0: number;
    1: number;
}
