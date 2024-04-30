import { Component } from '@angular/core';

interface Skill {
  name: string;
  img: string;
}

@Component({
  selector: 'section-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  lenguajes: Skill[] = [
    {
      name: 'HTML',
      img: 'assets/icons/html.svg',
    },
    {
      name: 'CSS',
      img: 'assets/icons/css-3.svg',
    },
    {
      name: 'JavaScript',
      img: 'assets/icons/javascript.svg',
    },
    {
      name: 'TypeScript',
      img: 'assets/icons/typescript.svg',
    },
    {
      name: 'Dart',
      img: 'assets/icons/dart.svg',
    },
    {
      name: 'PHP',
      img: 'assets/icons/php.svg',
    },
  ];

  front: Skill[] = [
    {
      name: 'Angular',
      img: 'assets/icons/angular.svg',
    },
    {
      name: 'Ionic',
      img: 'assets/icons/ionic.svg',
    },
    {
      name: 'Flutter',
      img: 'assets/icons/flutter.svg',
    },
    {
      name: 'React',
      img: 'assets/icons/react.svg',
    },
    {
      name: 'React Native',
      img: 'assets/icons/react.svg',
    },
    {
      name: 'Tailwind CSS',
      img: 'assets/icons/tailwind.svg',
    },
    {
      name: 'Redux',
      img: 'assets/icons/redux.svg',
    },
    {
      name: 'Material UI',
      img: 'assets/icons/material-ui.svg',
    },
  ];

  back: Skill[] = [
    {
      name: 'NodeJS',
      img: 'assets/icons/nodejs.svg',
    },
    {
      name: 'Express',
      img: 'assets/icons/express.svg',
    },
    {
      name: 'JWT',
      img: 'assets/icons/jwt.svg',
    },
    {
      name: 'Firebase',
      img: 'assets/icons/firebase.svg',
    },
    {
      name: 'MySQL',
      img: 'assets/icons/mysql.svg',
    },
    {
      name: 'MongoDB',
      img: 'assets/icons/mongodb.svg',
    },
    {
      name: 'Git',
      img: 'assets/icons/git.svg',
    },
  ];
}
