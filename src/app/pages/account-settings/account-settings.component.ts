import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  clasesCSS: string = 'working'

  public linkTheme = document.querySelector('#theme')
  public checkTheme!: NodeListOf<Element>;

  ngOnInit(): void {
    //console.log("checkTheme", this.checkTheme);
    this.checkTheme = document.querySelectorAll('.selector')
    this.checkCurrentTheme()
  }

  changeTheme(theme: string) {
    const url = `./assets/css/colors/${theme}.css`
    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem('theme', url)

    this.checkCurrentTheme()
  }

  checkCurrentTheme() {
    this.checkTheme.forEach(elem => {

      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkTheme?.getAttribute('href');

      if (btnThemeUrl === currentTheme) {
        elem.classList.add('working')
      }


    })



  }



}
