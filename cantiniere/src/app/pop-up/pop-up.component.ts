
import { Component, OnInit,Inject } from '@angular/core';
import { FormsModule,FormGroup,FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {
  jour:string="lundi"
  plat1:string= "plat1"
  plat2:string = "plat2"
  QSelected:number = 0
  plat1Checked:boolean=false
  plat2Checked:boolean=false
  plat1SeulChecked:boolean=false
  plat1FormulChecked:boolean=false
  plat2SeulChecked:boolean=false
  plat2FormulChecked:boolean=false

ngOnInit() {
  this.dialogRef.updateSize('40%', '50%')

}

constructor(
  public dialogRef: MatDialogRef<PopUpComponent>,
  @Inject(MAT_DIALOG_DATA) public data:any,
) {}


Ajouter(){
  
  console.log(this.data)
  console.log(this.QSelected)
  console.log('plat1 checked?',this.plat1Checked)
  console.log('plat2 checked?',this.plat2Checked)
  console.log('plat2 seul?',this.plat2SeulChecked)


}
onNoClick(): void {
  this.dialogRef.close();
 
}


}
