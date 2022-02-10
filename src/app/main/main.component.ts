import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user.model';
import { DataStorageService } from '../shared/data-storage.service';
import { MainService } from './main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {

  private userSubscription: Subscription;
  intro:Boolean = true;
  isLoading = false;

  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService,
    private mainService: MainService
    ) { }

  ngOnInit() {
    this.isLoading = true;    
    this.userSubscription = this.authService.user.subscribe((user: User) => {            
      if (!!user) {                
        this.mainService.userId = user._id;
        this.dataStorageService
          .fetchTimelines()
          .subscribe(res => {
            this.isLoading = false;
            this.intro = this.mainService.getHomeInfo();
          });
      }
    });
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

}
