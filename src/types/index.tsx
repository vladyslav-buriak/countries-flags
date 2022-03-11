
export interface ICountries {
    borders: any;
    capital: string;
    flags: any;
    name: string;
    population: number;
    region: string;
}


export interface IInfoCard {
    url: string;
    name: string;
    info: ({
        title: string;
        description: number;
    } | {
        title: string;
        description: string;
    })[];
}
