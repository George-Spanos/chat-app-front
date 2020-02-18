import { NgModule } from '@angular/core';
import { MatCardModule, MatListModule, MatButtonModule, MatIconModule, MatInputModule, MatSidenavModule } from '@angular/material';


const MaterialSubmodules = [
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule
]

@NgModule({
    imports: [
        ...MaterialSubmodules
    ],
    exports: [
        ...MaterialSubmodules
    ]
})
export class MaterialModule { }