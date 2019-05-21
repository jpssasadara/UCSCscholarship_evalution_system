import { Injectable }                        from '@angular/core';

import { FormData, Personal, Address, Work, fmember }       from './form-data.model';
import { WorkflowService }                   from '../workflow/workflow.service';
import { STEPS }                             from '../workflow/workflow.model';

@Injectable()
export class FormDataService {

    private formData: FormData = new FormData();
    private isPersonalFormValid: boolean = false;
    private isWorkFormValid: boolean = false;
    private isAddressFormValid: boolean = false;

    constructor(private workflowService: WorkflowService) { 
    }

    getPersonal(): Personal {
        // Return the Personal data
        var personal: Personal = {
            fullName: this.formData.fullName,
            registration: this.formData.registration,
            email: this.formData.email,
            course : this.formData.course,
            address : this.formData.address,
            distance : this.formData.distance,
            telephone : this.formData.telephone,
          
            reason : this.formData.reason
        };
        return personal;
    }

    setPersonal(data: Personal) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isPersonalFormValid = true;
        this.formData.fullName = data.fullName;
        this.formData.registration = data.registration;
        this.formData.email = data.email;
        this.formData.course = data.course;
        this.formData.address = data.address;
        this.formData.distance = data.distance;
        this.formData.telephone = data.telephone;
       // this.formData.scholar = data.scholar;
     // this.formData.samurdhi = data.samurdhi;
        this.formData.reason = data.reason;
        // Validate Personal Step in Workflow
        this.workflowService.validateStep(STEPS.personal);
    }

    getWork() : Work {
        // Return the work type
        var work : Work = {
            samurdhi : this.formData.samurdhi,
            scholar : this.formData.scholar,
            nfather:this.formData.nfather,
            fliving : this.formData.fliving,
            fage : this.formData.fage,
            foccupation : this.formData.foccupation,
            faddress : this.formData.faddress,
            fannual : this.formData.fannual,
            fproperty : this.formData.fproperty,
            fother : this.formData.fother,
            ftotal : this.formData.ftotal,
            ftax : this.formData.ftax,
            nmother : this.formData.nmother,
            mliving : this.formData.mliving,
            mage : this.formData.mage,
            moccupation : this.formData.moccupation,
            maddress : this.formData.maddress,
            mannual : this.formData.mannual,
            mproperty : this.formData.mproperty,
            mother : this.formData.mother,
            mtotal : this.formData.mtotal,
            mtax : this.formData.mtax,
            net : this.formData.net

        };
        return work;
    }

    setWork(data:Work){
        this.isWorkFormValid = true;
        this.formData.samurdhi = data.samurdhi;
        this.formData.scholar = data.scholar;
        this.formData.nfather = data.nfather;
        this.formData.fliving = data.fliving;
        this.formData.fage = data.fage;
        this.formData.foccupation = data.foccupation;
        this.formData.faddress = data.faddress;
        this.formData.fannual = data.fannual;
        this.formData.fproperty = data.fproperty;
        this.formData.fother = data.fother;
        this.formData.ftotal = data.ftotal;
        this.formData.ftax = data.ftax;
        this.formData.nmother = data.nmother;
        this.formData.mliving = data.mliving;
        this.formData.mage = data.mage;
        this.formData.moccupation = data.moccupation;
        this.formData.maddress = data.maddress;
        this.formData.mannual = data.mannual;
        this.formData.mproperty = data.mproperty;
        this.formData.mother = data.mother;
        this.formData.mtotal = data.mtotal;
        this.formData.mtax = data.mtax;
        this.formData.net = data.net;

        this.workflowService.validateStep(STEPS.income);
    }
    
    setField(data1 : string,data2 : string) {
        // Update the work type only when the Work Form had been validated successfully
  
        this.formData.samurdhi = data1
        this.formData.scholar = data2;
        // Validate Work Step in Workflow
        
    }

    getAddress() : Address {
        // Return the Address data
        var address: Address = {
            street: this.formData.street,
            city: this.formData.city,
            state: this.formData.state,
            zip: this.formData.zip,
            married : this.formData.married,
            nspouse : this.formData.nspouse,
            dom : this.formData.dom,
            employed : this.formData.employed,
            empDetails : this.formData.empdetails
        };
        return address;
    }

    setAddress(data: Address) {
        // Update the Address data only when the Address Form had been validated successfully
        this.isAddressFormValid = true;
        this.formData.street = data.street;
        this.formData.city = data.city;
        this.formData.state = data.state;
        this.formData.zip = data.zip;
        this.formData.married = data.married;
        this.formData.dom = data.dom;
        this.formData.nspouse = data.nspouse;
        this.formData.employed = data.employed;
        this.formData.empdetails = data.empDetails
        // Validate Address Step in Workflow
        
        this.workflowService.validateStep(STEPS.family);
    }

    getFormData(): FormData {
        // Return the entire Form Data
        return this.formData;
    }

    resetFormData(): FormData {
        // Reset the workflow
        this.workflowService.resetSteps();
        // Return the form data after all this.* members had been reset
        
        this.isPersonalFormValid = this.isWorkFormValid = this.isAddressFormValid = false;
        return this.formData;
    }

    isFormValid() {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isPersonalFormValid &&
                this.isWorkFormValid && 
                this.isAddressFormValid;
    }

    setMember(arr:fmember[]){
        this.formData.members = arr;
    }

    getMember() : fmember {
        var member: fmember = {
            name: "",
            year: "",
            dob: "",
            school: "",
            course: "",
            registration: "",
            scholar: "",
            employed: "",
        }
        return member;
}
    getMembers() : fmember[] {
        return this.formData.members;
    }

    setChecked(state : boolean,val:number) {
        this.formData.status = state;
        this.formData.gpa = val;
    }

    getState():boolean{
        return this.formData.status;
    }

    getVal():number {
        return this.formData.gpa;
    }
    
}