import { Component } from '@angular/core';
import { Config } from './shared/config/env.config';
import './operators';
import { TranslateService } from '@ngx-translate/core';

/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
	constructor(translate: TranslateService) {
		console.log('Environment config', Config);

		translate.setDefaultLang('en');
		translate.use('en');
	}
}
