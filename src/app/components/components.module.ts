import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


const COMPONENTS = [
  HeaderComponent,
]

@NgModule({
	declarations: [...COMPONENTS],
	imports: [
		CommonModule,
		RouterModule,
		MatCheckboxModule,
		MatInputModule,
		MatFormFieldModule,
		MatAutocompleteModule,
		FormsModule,
		ReactiveFormsModule,
	],
	entryComponents: [...COMPONENTS],
	exports: [...COMPONENTS],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
