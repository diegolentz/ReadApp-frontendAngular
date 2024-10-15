import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordRecoveryFormComponent } from './password-recovery-form.component';
import { HttpClient } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { getHttpClientSpyLogin } from '../../../tests/stubs/httpClientSpyUser';

describe('PasswordRecoveryFormComponent', () => {
  let component: PasswordRecoveryFormComponent;
  let fixture: ComponentFixture<PasswordRecoveryFormComponent>;
  let httpClientSpy: jasmine.SpyObj<HttpClient>
  beforeEach(async () => {
    httpClientSpy = getHttpClientSpyLogin()
    await TestBed.configureTestingModule({
      imports: [PasswordRecoveryFormComponent, ToastrModule.forRoot()],
      providers: [
        {provide: HttpClient, useValue: httpClientSpy}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordRecoveryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('No admite campos vacios', () => {
    component.form.setValue({
      [component.formLabels.email]: "", 
      [component.formLabels.username]: "", 
      [component.formLabels.newPassword]: "",
    });

    expect(component.form.valid).toEqual(false);
  });

  it('No admite campos excedidos', () => {
    component.form.setValue({
      [component.formLabels.email]: "adrian@adrian", 
      [component.formLabels.username]: "12345678912345678", 
      [component.formLabels.newPassword]: "adrian"
    });
    const usernameValue = getFormValue(component.formLabels.username)
    
    expect(usernameValue.length).toBeGreaterThan(component.formRestrictions.USERNAME_MAX)

    expect(component.form.controls[component.formLabels.email].valid).toEqual(true);
    expect(component.form.controls[component.formLabels.username].valid).toEqual(false);

    expect(component.form.valid).toEqual(false);
  });

  it('Campos permitidos', () => {
    component.form.setValue({
      [component.formLabels.email]: "adrian@adrian",
      [component.formLabels.username]: "adrian",
      [component.formLabels.newPassword]: "adrian",
    });

    expect(component.form.valid).toEqual(true);
  });

  it('Cuando el usuario de loguea, obtengo un ID', () => {
    //OJO CON TOCAR ESTO Y EL SPY USER
    //SETEO VALORES
    component.form.setValue({
      [component.formLabels.email]: "adrian@adrian",
      [component.formLabels.username]: "adrian",
      [component.formLabels.newPassword]: "adrian",
    });
    //DETECTO CAMBIOS
    fixture.detectChanges()
    //OBTENGO EL BOTON Y LE APLICO CLICK Y Y SE APLICA EL POST
    getByTestId('passwordRecovery').click()

    //OBTENGO EL VALOR ENVIADO DEL SPY
    const userLoginData = httpClientSpy.post.calls.mostRecent().args[1]

    //ESPERO QUE LO RECIBIDO COINCIDA CON LO ENVIADO
    expect(userLoginData[component.formLabels.email]).toEqual("adrian@adrian");
    expect(userLoginData[component.formLabels.username]).toEqual("adrian");
    expect(userLoginData[component.formLabels.newPassword]).toEqual("adrian");
  })
  
  function getByTestId(testId: string) {
    const resultHtml = fixture.debugElement.nativeElement
    return resultHtml.querySelector(`[data-testid="${testId}"]`)
  }

  function getFormValue(label:string){
    return component.form.value[label]
  }
});
