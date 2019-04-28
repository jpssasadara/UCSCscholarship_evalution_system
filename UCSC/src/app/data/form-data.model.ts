export class FormData {
    fullName: string = '';
    registration : string = '';
    email: string = '';
    course: string = '';
    address: string = '';
    distance: number = 0;
    telephone: string = '';
    scholar:string = "NO";
    samurdhi : string = "NO";
    reason : string ='';
    work : string = '';
    attach1 ?: File ;

    street : string = '';
    city : string = '';
    state : string = '';
    zip : string = '';

    clear() {
        this.fullName = '';
        this.registration = '';
        this.email = '';
        this.course = '';
        this.address = '';
        this.distance = 0;
        this.telephone = '';
        this.scholar = "NO";
        this.samurdhi = "NO";
        this.reason = "";
    }
}

export class Personal {
    fullName: string = '';
    registration : string = '';
    email: string = '';
    course: string = '';
    address: string = '';
    distance: number = 0;
    telephone: string = '';
    scholar:string = "NO";
    samurdhi : string = "NO";
    reason:string = "";
}

export class Address {
    street:string = '';
    city:string = '';
    state:string = '';
    zip:string = '';
}