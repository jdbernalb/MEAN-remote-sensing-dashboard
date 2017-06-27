import { Component, OnInit } from '@angular/core';
import { MongolabService } from "app/mongolab.service";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  
dates: string;
private sub:any;
  public lineChartDatat:Array<any> = [
    {data:[],label: 'Temperatura'},
  ];
  public lineChartDatah:Array<any> = [
    {data:[],label: 'Humedad'},
  ];
  public lineChartDatas:Array<any> = [
    {data:[],label: 'Humedad del Suelo'},
  ];
  public lineChartDatap:Array<any> = [
    {data:[],label: 'Presión'},
  ];
  public lineChartLabelst:string[] = [
    
  ];
    public lineChartLabelsh:string[] = [
    
  ];
    public lineChartLabelss:string[] = [
    
  ];
    public lineChartLabelsp:string[] = [
    
  ];
  public lineChartType:string = 'line';
  public lineChartOptions:any = {
    responsive: true
  };
public colorblue:Array<any> = [
   { 
      backgroundColor: 'rgba(0,204,205,0.5)',
      borderColor: 'rgba(0,204,205,1)',
      pointBackgroundColor: 'rgba(0,204,205,0.5)',
      pointBorderColor: '#000',
      pointHoverBackgroundColor: 'rgba(0,204,205,1)',
      pointHoverBorderColor: 'rgba(0,204,205,1)'
    }
];
private colorgreen:Array<any> = [
   { 
      backgroundColor: 'rgba(102, 255, 54,0.5)',
      borderColor: 'rgba(102, 255, 54,1)',
      pointBackgroundColor: 'rgba(102, 255, 54,0.5)',
      pointBorderColor: '#000',
      pointHoverBackgroundColor: 'rgba(102, 255, 54,1)',
      pointHoverBorderColor: 'rgba(102, 255, 54,1)'
    }
];
private colororange:Array<any> = [
   { 
      backgroundColor: 'rgba(255, 153, 51,0.5)',
      borderColor: 'rgba(255, 153, 51,1)',
      pointBackgroundColor: 'rgba(255, 153, 51,0.5)',
      pointBorderColor: '#000',
      pointHoverBackgroundColor: 'rgba(255, 153, 51,1)',
      pointHoverBorderColor: 'rgba(255, 153, 51,1)'
    }
];
private colorred:Array<any> = [
   { 
      backgroundColor: 'rgba(244, 67, 54,0.5)',
      borderColor: 'rgba(244, 67, 54,1)',
      pointBackgroundColor: 'rgba(244, 67, 54,0.5)',
      pointBorderColor: '#000',
      pointHoverBackgroundColor: 'rgba(244, 67, 54,1)',
      pointHoverBorderColor: 'rgba(244, 67, 54,1)'
    }
];
  constructor(private mongolab: MongolabService, private route: ActivatedRoute) { }
 
   chartClicked(e:any):void {
    console.log(e);
  }

   chartHovered(e:any):void {
    console.log(e);
  }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.dates = params['dates']; // (+) converts string 'id' to a number
       console.log(this.dates);
       console.log(new Date(this.dates.split("-",2)[0]+" 00:00:00").toISOString());
       console.log(new Date(this.dates.split("-",2)[1]+" 00:00:00").toISOString());
       //let a = this.mongolab.getAllmed(); 
       // In a real app: dispatch action to load the details here.
      // a.subscribe(res=>{
      //   console.log(res.json());
      // });
    });



      let clonet = JSON.parse(JSON.stringify(this.lineChartDatat));
      let auxt:any[]=[];
      let cloneh = JSON.parse(JSON.stringify(this.lineChartDatah));
      let auxh:any[]=[];
      let clones = JSON.parse(JSON.stringify(this.lineChartDatas));
      let auxs:any[]=[];
      let clonep = JSON.parse(JSON.stringify(this.lineChartDatap));
      let auxp:any[]=[];

      let x = this.mongolab.getAllmed(); 
      let lineChartLabelst = this.lineChartLabelst;
      let lineChartLabelsh = this.lineChartLabelsh;
      let lineChartLabelss = this.lineChartLabelss;
      let lineChartLabelsp = this.lineChartLabelsp;
      x.subscribe(res=>{

          res.json().forEach(med=>{
            if (med.Sensores.Temp!=null){
            var numt:number = parseFloat(med.Sensores.Temp); 
            auxt.push(numt*1);
            lineChartLabelst.push(med.Sensores.date.toString().substring(0, 10)+" "+med.Sensores.date.toString().substring(11, 19));
          }
           if (med.Sensores.Hum!=null){
            var numh:number = parseFloat(med.Sensores.Hum); 
            auxh.push(numh*1);
            lineChartLabelsh.push(med.Sensores.date.toString().substring(0, 10)+" "+med.Sensores.date.toString().substring(11, 19));

          }
           if (med.Sensores.HumT!=null){
            var nums:number = parseFloat(med.Sensores.HumT); 
            auxs.push(nums*1);
            lineChartLabelss.push(med.Sensores.date.toString().substring(0, 10)+" "+med.Sensores.date.toString().substring(11, 19));
          }
           if (med.Sensores.Pres!=null){
            var nump:number = parseFloat(med.Sensores.Pres); 
            auxp.push(nump*1);
            lineChartLabelsp.push(med.Sensores.date.toString().substring(0, 10)+" "+med.Sensores.date.toString().substring(11, 19));
          }

      });
        //let clone = JSON.parse(JSON.stringify(this.lineChartData));
          //lineChartData.push(aux);
          clonet[0].data = auxt;
          this.lineChartDatat = clonet;
          cloneh[0].data = auxh;
          this.lineChartDatah = cloneh;
          clones[0].data = auxs;
          this.lineChartDatas = clones;
          clonep[0].data = auxp;
          this.lineChartDatap = clonep;
          this.lineChartLabelst = lineChartLabelst;
          this.lineChartLabelsh = lineChartLabelsh;
          this.lineChartLabelss = lineChartLabelss;
          this.lineChartLabelsp = lineChartLabelsp;
    });
    }


}
