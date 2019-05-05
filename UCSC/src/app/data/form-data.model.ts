export class FormData {
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
