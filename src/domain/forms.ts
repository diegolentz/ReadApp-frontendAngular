import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { ServiceUser } from "../service/service-user.service";
import { ToastrService } from "ngx-toastr";
import { HttpErrorResponse } from "@angular/common/http";

export abstract class CommonForm {
    constructor(
        private router: Router,
        private serviceUser: ServiceUser,
        private formBuilder: FormBuilder,
        private toastAlert: ToastrService
    ) {

    }
    form!: FormGroup
    formLabels!: { [key: string]: string };
    getFormValue(label: string) {
        return this.form.get(label)?.value
    }
    warning(label: string) {
        return this.formInvalid(label) && this.formTouchedDirty(label)
    }
    formInvalid(label: string): boolean {
        return this.form.controls[label].invalid
    }
    formTouchedDirty(label: string): boolean {
        return (this.form.controls[label].touched || this.form.controls[label].dirty)
    }

    async request(){}

    httpErrorHandler(error:HttpErrorResponse){
        if(error.error['status']==null){
            this.toastAlert.error('Serivor caido :,(. Intente mas tarde')
        }

        if(error.error['status']==200){
            this.toastAlert.success(error.error['message'])
            
        }

        if(error.error['status']==400){
            this.toastAlert.warning(error.error['message'])
        }

        if(error.error['status']==404){
            this.toastAlert.error(error.error['message'])
        }
    }
}