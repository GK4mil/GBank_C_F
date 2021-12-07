import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GlobalConstants } from 'src/app/common/global-constants';



@Component({
  selector: 'app-transferform',
  templateUrl: './transferform.component.html',
  styleUrls: ['./transferform.component.css']
})
export class TransferformComponent implements OnInit {
  transferForm: FormGroup;
  clientbills : Object [];
  transfersuccess=false;
  submitdisabled=true;
  transferfault=false;

  constructor(private http: HttpClient) {

    const headerDict = {
      //   'Accept': 'application/json',
         "Authorization":localStorage.getItem("accessToken")
       }
       
       const requestOptions = {                                                                                                                                                                                 
         headers: new HttpHeaders(headerDict), 
       };
   
   
       http.get<{ID:string, balance:string, billNumber: string}>(GlobalConstants.apiURL+"/api/Bill",requestOptions).subscribe(response=>{
         this.clientbills=(Object)(response);
         console.log(response);
         
       });

   }
  

  ngOnInit(): void {
    this.transferForm = new FormGroup({
      'account': new FormControl(null,[Validators.required]),
      'recipientBillNumber' : new FormControl(null, Validators.required),
      'recipientName': new FormControl(null, Validators.required),
      'recipientAddress': new FormControl(null, Validators.required),
      'title': new FormControl(null, Validators.required),
      'amount': new FormControl("0.00", [Validators.required, this.validateIfIsNumber.bind(this)])
    });
    this.transferForm.statusChanges.subscribe(val=>this.onFormValidation(val));

   
  }

  private onFormValidation(validity: string) {
    switch (validity) {
      case "VALID":
        this.submitdisabled=false;
        break;
      case "INVALID":
        this.submitdisabled=true;
        break;
    }
  }

  private validateIfIsNumber(control: FormControl) : {[s:string]:boolean}
  {
    if(!new RegExp("^\\d+(\\.|\\,)\\d{0,2}$").test(control.value))
    {
      return {'forbiddenValue': true};
    }
    else
    {
      return null;
    }
  }

  onSubmit()
  {
    if(this.transferForm.status==="VALID")
      this.trySend(this.transferForm.value);
  }

  private trySend(data)
  {
    this.http.post<any>(GlobalConstants.apiURL+"/api/User/maketransfer", 
    { 
      recieverName: data.recipientName, 
      recieverAddress : data.recipientAddress, 
      title: data.title,
      amount: data.amount,
      senderBillNumber: data.account,
      recieiverBillNumber: data.recipientBillNumber
    },
    {headers: new HttpHeaders({'Content-Type':  'application/json'})})
  .map(resp=>
    {}).subscribe(
      result=>
      {
        this.transferfault=false;
         this.transfersuccess=true;
         this.submitdisabled=true;
       
      }, error =>{
        this.transferfault=true;
          console.log(error.message);
      });

  }
  
}
