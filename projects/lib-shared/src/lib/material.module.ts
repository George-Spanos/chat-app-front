import { NgModule } from '@angular/core';
import { MatCardModule, MatListModule, MatButtonModule, MatIconModule, MatInputModule, MatSidenavModule, MatCheckboxModule } from '@angular/material';


const MaterialSubmodules = [
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatCheckboxModule
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