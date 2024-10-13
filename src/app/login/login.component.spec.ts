import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { getHttpClientSpyLogin } from '../../tests/stubs/httpClientSpyUser';
import { FormsModule } from '@angular/forms';
import { ServiceUser } from '../../service/service-user.service';
import { of } from 'rxjs/internal/observable/of';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let activatedRouteSpy: jasmine.SpyObj<ActivatedRoute>
  let httpClientSpy: jasmine.SpyObj<HttpClient>
  let service:ServiceUser
  beforeEach(async () => {
    httpClientSpy = getHttpClientSpyLogin()
    service = new ServiceUser(httpClientSpy)
    await TestBed.configureTestingModule({
      imports: [LoginComponent, FormsModule],
      providers: [
        {provide: ActivatedRoute, useValue: activatedRouteSpy},
        {provide: HttpClient, useValue: httpClientSpy}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('No admite campos vacios', () => {
    component.loginForm.setValue({
      "username": "", 
      "password": "", 
    });

    expect(component.loginForm.valid).toEqual(false);
  });

  it('No admite campos excedidos', () => {
    component.loginForm.setValue({
      "username": "123456789", //lenght 8 max
      "password": "12345678912345678", //lenght 16 max
    });

    expect(component.loginForm.valid).toEqual(false);
  });

  it('Campos permitidos', () => {
    component.loginForm.setValue({
      "username": "adrian",
      "password": "adrian",
    });

    expect(component.loginForm.valid).toEqual(true);
  });

  it('Cuando el usuario de loguea, obtengo un ID', () => {
    //OJO CON TOCAR ESTO Y EL SPY USER
    //SETEO VALORES
    component.loginForm.setValue({
      "username": "adrian",
      "password": "adrian",
    });
    //DETECTO CAMBIOS
    fixture.detectChanges()
    //OBTENGO EL BOTON Y LE APLICO CLICK Y Y SE APLICA EL POST
    getByTestId('login').click()

    //OBTENGO EL VALOR ENVIADO DEL SPY
    const userLoginData = httpClientSpy.post.calls.mostRecent().args[1]

    //ESPERO QUE LO RECIBIDO COINCIDA CON LO ENVIADO
    expect(userLoginData['username']).toEqual("adrian");
    expect(userLoginData['password']).toEqual("adrian");
  })
  
  function getByTestId(testId: string) {
    const resultHtml = fixture.debugElement.nativeElement
    return resultHtml.querySelector(`[data-testid="${testId}"]`)
  }
});
