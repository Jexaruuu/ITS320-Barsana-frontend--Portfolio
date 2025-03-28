import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // ✅ Import this

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([]),
    provideHttpClient() // ✅ Add this line
  ]
};
