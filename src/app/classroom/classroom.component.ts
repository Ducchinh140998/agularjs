import {Component} from "@angular/core";

@Component({
  selector: "app-classroom",
  templateUrl:"./classroom.component.html"
})
export class ClassroomComponent{
  className:string= 'T2204E';
  studentsNames:string[] = ["Đỗ Duy Nam","Phạm Văn Mách","Vũ Hoài Thơ"];
  studentAge:number[]= [25,15,24 ];
  studentsPhone:string[] = ["0968140998","0357231005","0975194696"];

  changeName(){
    this.className = "T2204M"
  }
}
