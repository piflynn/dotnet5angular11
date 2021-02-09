import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from 'src/app/models/member.model';
import { MembersService } from 'src/app/services/members.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.scss'],
})
export class MemberDetailComponent implements OnInit {
  member?: Member;
  constructor(
    private membersService: MembersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadMember();
  }

  private loadMember() {
    this.membersService
      // tslint:disable-next-line: no-non-null-assertion
      .getMember(this.route.snapshot.paramMap.get('username')!)
      .subscribe((member) => {
        this.member = member;
      });
  }
}
