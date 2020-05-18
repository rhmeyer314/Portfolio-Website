import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { Email } from '../model/email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private url = "/email";

  constructor(private rest: RestService) { }

  public sendEmail(email: string, subject: string, message: string): Promise<Email>{
    let requestData = this.createRequestData(email, subject, message);

    return this.post(requestData);
  }

  private async post(requestData): Promise<Email> {
    let promise = await this.rest.post<Email>(this.url, requestData).toPromise();

    return promise.response;
  }

  private createRequestData(email: string, subject: string, message: string) {
    return {
      email: email,
      subject: subject,
      message: message,
    }
  }
}
