export class Place {
    title: string;
    imageUri: string;
    address: string;
    location?: Location;
    id: string;

    constructor(title: string, imageUri: string, location : Location, id?: string) {
      this.title = title;
      this.imageUri = imageUri;
      this.address = location.address || "";
      this.location = { lat: location.lat, lng: location.lng, address:"" }; // { lat: 0.141241, lng: 127.121 }
      this.id = new Date().toString() + Math.random().toString();
    }
  }

  export interface Location {
    lat?: number;
    lng?: number;
    address?: string;
  }