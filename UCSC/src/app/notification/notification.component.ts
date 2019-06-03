import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  notification = "";

  constructor(private notificationService:NotificationService) { }

  ngOnInit() {
  }

  sendNotification()
  {
    if(this.notification.length>0)
    {
    if(!this.notificationService.isEmptyemailArray())
      {

     //   console.log(this.emailArr);

        this.notificationService.sendNotification(this.notification)
        .subscribe(responseData => {
          //console.log(this.emailArr);
          if(responseData.message!=0)
          {
            alert("Notifications sent successfully");

          }
          else
          {
            alert("Something wrong");

          }
        });
      }
      else
      {
        alert("Applicants aren't selected");
      }
    }
    else
    {
      alert("Message field is empty");

    }

  }
}
