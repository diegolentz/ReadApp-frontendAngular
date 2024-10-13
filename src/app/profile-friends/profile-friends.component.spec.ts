import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFriendsComponent } from './profile-friends.component';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


describe('ProfileFriendsComponent', () => {
  let component: ProfileFriendsComponent;
  let fixture: ComponentFixture<ProfileFriendsComponent>;
  let httpClientSpy: jasmine.SpyObj<HttpClient>
  let activatedRouteSpy: jasmine.SpyObj<ActivatedRoute>
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ProfileFriendsComponent
      ],
      providers: [
        {provide: HttpClient, useValue: httpClientSpy},
        {provide: ActivatedRoute, useValue: activatedRouteSpy}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
