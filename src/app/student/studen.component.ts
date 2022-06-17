import {Component, Input} from "@angular/core";

@Component({
  selector: "app-students",
  templateUrl: "./student.component.html"
})
export class StudenComponent{
  @Input("studentName") studentName !:string;
  @Input("studentAge") studentAge !:number;
  @Input("studentsPhone") studentPhone !:string
}
