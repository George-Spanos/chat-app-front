import { NgModule } from '@angular/core';
import { MatCardModule, MatListModule, MatButtonModule, MatIconModule, MatInputModule } from '@angular/material';


const MaterialSubmodules = [
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
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