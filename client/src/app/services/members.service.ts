import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Member } from '../models/member.model';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  baseUrl = environment.apiUrl;
  members: Member[] = [];

  constructor(private http: HttpClient) {}

  getMembers() {
    if (this.members.length > 0) {
      return of(this.members);
    }
    return this.http
      .get<Member[]>(`${this.baseUrl}/users`)
      .pipe(tap((members) => (this.members = members)));
  }
  getMember(username: string) {
    return this.http.get<Member>(`${this.baseUrl}/users/${username}`);
  }
}
