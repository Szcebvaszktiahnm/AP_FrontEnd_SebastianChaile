import { Injectable } from '@angular/core';
import { Storage,ref, uploadBytes, getDownloadURL, list } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url: string="";

  constructor(private storage:Storage) { }

  public uploadImage($event:any,name:string){
    const file =$event.target.files[0]
    const imgRef = ref(this.storage, `imagen/`+name)
    uploadBytes(imgRef,file)
    .then(response=>{this.getImages()})
    .catch(err=>{console.log(err)})
  }

  getImages(){
    const imagesRef = ref(this.storage,'imagen')
    list(imagesRef)
    .then(async response=>{
      for(let item of response.items)
      this.url=await getDownloadURL(item);
    })
    .catch(error=>console.log(error))
  }

}

