export class FormData {
    _id : string = '';
    fullName: string = '';
    registration : string = '';
    email: string = '';
    course: string = '';
    address: string = '';
    distance: number;
    telephone: string = '';
    scholar:string  = '';
    samurdhi : string = '';
    reason ?: string ='';
    work ?: string = '';
    

    street ?: string = '';
    city ?: string = '';
    state ?: string = '';
    zip ?: string = '';

    nfather : string = '';
    fliving : string = 'Yes';
    fage ?: string;
    foccupation : string = '';
    faddress : string = '';
    fannual : number;
    fproperty : number;
    fother : number;
    ftotal : number;
    ftax : string;

    nmother : string = '';
    mliving : string = 'Yes';;
    mage ?: string = '';
    moccupation : string = '';
    maddress : string = '';
    mannual : number;
    mproperty : number;
    mother : number;
    mtotal : number;
    mtax : string;

    net : number;
    //new : string;

    married : string;
    dom ?: string;
    nspouse ?: string;
    employed ?: string;
    empdetails ?: string;

    members : fmember[];

    status : boolean = false;
    gpa : number = 0;

    clear() {
        this.fullName = '';
        this.registration = '';
        this.email = '';
        this.course = '';
        this.address = '';
        this.distance = 0;
        this.telephone = '';
        this.scholar = '';
        this.samurdhi = '';
        this.reason = "";
        this.nfather = "";
        this.faddress = "";
        this.fage = "";
        this.foccupation = "";
        this.nmother = "";
        this.maddress = "";
        this.mage = "";
        this.moccupation = "";
    }
}

export class Personal {
    fullName: string = '';
    registration : string = '';
    email: string = '';
    course: string = '';
    address: string = '';
    distance: number;
    telephone: string = '';
   
    reason:string = "";
}

export class Address {
    street:string = '';
    city:string = '';
    state:string = '';
    zip:string = '';
  //  member : fmember[];
    married : string = 'No';
    nspouse ?: string;
    employed ?: string = "No";
    empDetails ?: string;
    dom ?: string;
  
}

export class Work {
    scholar:string = '';
    samurdhi : string = '';
    nfather : string = '';
   fliving : string;
    fage  ?: string = '';
    foccupation : string = '';
    faddress : string = '';
    fannual : number;
    fproperty : number;
    fother : number;
    ftotal : number =0 ;
    ftax : string;

    nmother : string = '';
    mliving : string;
    mage : string = '';
    moccupation : string = '';
    maddress : string = '';
    mannual : number ;
    mproperty : number ;
    mother : number ;
    mtotal : number =0 ;
    mtax : string;
    net : number;
}

export class fmember{
    public name : string = "";
    public year ?: string = "";
    public dob : string;
    public school : string;
    public course ?: string;
    public registration ?: string;
   
    public scholar : string;
    public employed : string;

   /* constructor (str1:string,str2:string,str3:string,str4:string,str5:string,str6:string,str7:string,str8:string){
        this.name = str1;
        this.dob = str2;
        this.school = str3;
        this.course = str4;
        this.registration = str5;
        this.year = str6;
        this.scholar = str7;
        this.employed = str8;
    }
*/
}
