import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { AppUser } from 'src/app/models/app-user.model';
import { Member } from 'src/app/models/member.model';
import { AccountService } from 'src/app/services/account.service';
import { MembersService } from 'src/app/services/members.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.scss'],
})
export class MemberEditComponent implements OnInit {
  member?: Member;
  user?: AppUser;
  constructor(
    private accountService: AccountService,
    private membersService: MembersService
  ) {
    this.accountService.currentUser$
      .pipe(take(1))
      .subscribe((user) => (this.user = user));
  }

  ngOnInit(): void {
    this.loadMember();
  }

  private loadMember() {
    if (!!this.user) {
      this.membersService
        .getMember(this.user?.username)
        .pipe(take(1))
        .subscribe((member) => (this.member = member));
    }
  }
}
