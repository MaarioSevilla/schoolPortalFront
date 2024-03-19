import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { GradeGroupComponent } from './components/grade-group/grade-group.component';
import { HomeComponent } from './components/home/home.component';
import { NuevoGrupoComponent } from './components/nuevo-grupo/nuevo-grupo.component';
import { DocenteComponent } from './components/docente/docente.component';
import { DocenteMainComponent } from './components/docente-main/docente-main.component';
import { AlumnosMainComponent } from './components/alumnos-main/alumnos-main.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { FinanzasComponent } from './components/finanzas/finanzas.component';
import { AsistenciaComponent } from './components/asistencia/asistencia.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { AsistenciaMainComponent } from './components/asistencia-main/asistencia-main.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AlumnAttendanceComponent } from './components/alumn-attendance/alumn-attendance.component';
import { AlumnAccountComponent } from './components/alumn-account/alumn-account.component';
import { AlumnContactComponent } from './components/alumn-contact/alumn-contact.component';
import { PlaneacionMainComponent } from './components/planeacion-main/planeacion-main.component';

const APP_ROUTES: Routes = [
    { path: '', component: LoginComponent },
    {
        path: 'home', component: HomeComponent,
        children: [
            { path: 'index', component: HomepageComponent },
            { path: 'grade-group', component: GradeGroupComponent },
            { path: 'new-group', component: NuevoGrupoComponent },
            { path: 'docentes-main', component: DocenteMainComponent },
            { path: 'alumnos-main', component: AlumnosMainComponent },
            { path: 'alumnos-main/asistencias', component: AlumnAttendanceComponent },
            { path: 'alumnos-main/edo-cuenta', component: AlumnAccountComponent },
            { path: 'alumnos-main/contacto', component: AlumnContactComponent },
            { path: 'alumno', component: AlumnosComponent },
            { path: 'calendario', component: CalendarioComponent },
            { path: 'finanzas', component: FinanzasComponent },
            { path: 'asistencia-main', component: AsistenciaMainComponent },
            { path: 'docente', component: DocenteComponent },
            { path: 'planeacion', component: PlaneacionMainComponent },
        ]
    },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });