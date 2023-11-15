import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Blog } from './classes/Blog';
import { Faq } from './classes/Faq';
import { Gallery } from './classes/Gallery';
import { GalleryCategory } from './classes/GalleryCategory';
import { Netgate } from './classes/Netgate';
import { PurchaseRequest } from './classes/PurchaseRequest';

@Injectable({
  providedIn: 'root',
})
export class MainHttpService {
  serverURL = environment.apiURL;

  constructor(private _http: HttpClient) {}

  // get FAQs
  getFAQs(): Observable<any> {
    var HeaderForTAGAPI = new HttpHeaders();
    return this._http.get<Faq[]>(this.serverURL + 'faq/list', {
      headers: HeaderForTAGAPI,
    });
  }

  // get all netgate devices
  getNetGateDevices(): Observable<any> {
    var HeaderForTAGAPI = new HttpHeaders();
    return this._http.get<Netgate[]>(this.serverURL + 'netgate/all', {
      headers: HeaderForTAGAPI,
    });
  }

  // get a device details by id
  getDeviceSpec(id): Observable<any> {
    var HeaderForTAGAPI = new HttpHeaders();

    return this._http.get<Netgate>(this.serverURL + 'netgate/' + id, {
      headers: HeaderForTAGAPI,
    });
  }

  // create new order
  createNewOrder(obj) {
    var HeaderForTAGAPI = new HttpHeaders();
    var body = obj;

    return this._http.post(this.serverURL + 'order/add', body, {
      headers: HeaderForTAGAPI,
    });
  }

  // get blog list
  getAllBlogs(category): Observable<any> {
    var HeaderForTAGAPI = new HttpHeaders();
    return this._http.get<Blog[]>(this.serverURL + 'blogs/list/' + category, {
      headers: HeaderForTAGAPI,
    });
  }

  getGalleryImages(): Observable<any> {
    var HeaderForTAGAPI = new HttpHeaders();
    return this._http.get<Gallery[]>(this.serverURL + 'gallery/list', {
      headers: HeaderForTAGAPI,
    });
  }

  getAlbum(): Observable<any> {
    var HeaderForTAGAPI = new HttpHeaders();
    return this._http.get<GalleryCategory[]>(
      this.serverURL + 'gallerycategory/list',
      { headers: HeaderForTAGAPI }
    );
  }

  getAlbumImages(categoryName): Observable<any> {
    var category = 'NCA TRAINING';

    var HeaderForTAGAPI = new HttpHeaders();
    return this._http.get<Gallery[]>(
      this.serverURL + 'gallery/list/' + categoryName,
      { headers: HeaderForTAGAPI }
    );
  }

  // get one blog post details
  getOneBlog(id) {
    var HeaderForTAGAPI = new HttpHeaders();
    return this._http.get<Blog>(this.serverURL + 'blogs/' + id, {
      headers: HeaderForTAGAPI,
    });
  }

  //  get all orders
  getOneOrder(id) {
    var HeaderForTAGAPI = new HttpHeaders();
    return this._http.get<PurchaseRequest>(this.serverURL + 'order/' + id, {
      headers: HeaderForTAGAPI,
    });
  }

  // consume API's for external blogs


  // end of external blogs
  getExternalBlogs() {
    var HeaderForTAGAPI = new HttpHeaders();
    return this._http.get<any>("https://newsapi.org/v2/top-headlines?country=us&apiKey=3955ac3084274f3282ae6b47201ceb0b", {
      headers: HeaderForTAGAPI,
    });
  }

}
