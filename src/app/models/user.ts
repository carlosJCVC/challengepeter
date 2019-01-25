
export class User {
 
  public avatar_url: string;
  public name: string;
  public location: string;
 
  constructor(avatar_url:string, name:string, location:string) {
    this.avatar_url = avatar_url;
    this.name = name;
    this.location = location;
  }
   
}