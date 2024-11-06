# ZarapeioFrontChallenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


----------
--------------


## Descripción

Zarapeio Front Challenge es una aplicación web que permite a los usuarios explorar y conocer diferentes razas de gatos. La aplicación incluye funcionalidades de autenticación, permitiendo a los usuarios iniciar sesión y acceder a secciones protegidas como su perfil y el dashboard. En el dashboard, los usuarios pueden ver una lista de razas de gatos con detalles como nombre, descripción y origen. La aplicación utiliza componentes standalone para una arquitectura modular y escalable.

## Características Principales

- Autenticación de Usuarios: Los usuarios pueden iniciar sesión con su email y contraseña. La autenticación se maneja mediante un servicio de autenticación (AuthService).
- Protección de Rutas: Las rutas del perfil y el dashboard están protegidas por un guardia de autenticación (AuthGuard), que redirige a los usuarios no autenticados a la página de inicio de sesión.
- Exploración de Razas de Gatos: El dashboard muestra una lista de 10 razas de gatos, cada una con su nombre, descripción y origen. La información se presenta utilizando el componente MeowComponent.
- Perfil de Usuario: Los usuarios pueden ver su perfil, que incluye su email y un avatar generado dinámicamente.

## Tecnologías Utilizadas

- Angular 18: Framework principal para el desarrollo de la aplicación.
- Reactive Forms: Para la gestión y validación de formularios.
- RxJS: Para la gestión de flujos de datos asíncronos.
- Angular Router: Para la navegación y protección de rutas.
- CSS/SCSS: Para el diseño y estilo de la aplicación.

## Estructura del Proyecto:

- app.component.ts: Componente principal de la aplicación.
- login.component.ts: Componente de inicio de sesión con validación del formulario.
- dashboard.component.ts: Componente que muestra la lista de razas de gatos.
- profile.component.ts: Componente que muestra el perfil del usuario.
- meow.component.ts: Componente que muestra la información de una raza de gato.
- auth.service.ts: Servicio de autenticación que maneja el inicio de sesión, cierre de sesión y verificación de autenticación.
- auth.guard.ts: Guardia de autenticación que protege las rutas del perfil y el dashboard.
