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
}

export class LatLng {
    0: number;
    1: number;
}
