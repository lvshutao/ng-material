import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-ui-select',
  templateUrl: './ui-select.component.html',
  styleUrls: ['./ui-select.component.css']
})
export class UiSelectComponent implements OnInit {

  foods = [
    {value: 'apple', text: '苹果'},
    {value: 'banana', text: '香蕉'},
    {value: 'orange', text: '桔子'}
  ];

  students = [
    {name: '小A', num: 85, id: 15},
    {name: '小B', num: 55, id: 16},
    {name: '小C', num: 95, id: 17},
    {name: '小D', num: 95, id: 15},
  ];

  studentCompareFn(s1, s2): boolean {
    return s1 && s2 ? s1.id === s2.id : s1 === s2;
  }

  // Form field features
  animalControl = new FormControl('', [Validators.required]);

  animals = [
    {name: 'Dog', sound: 'Woof!'},
    {name: 'Cat', sound: 'Meow!'},
    {name: 'Cow', sound: 'Moo!'},
    {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
  ];

  // 禁用
  disableSelect = new FormControl(false);

  // 选项组
  pokemonControl = new FormControl();

  pokemonGroups = [
    {
      name: 'Grass',
      pokemon: [
        {value: 'bulbasaur-0', viewValue: 'Bulbasaur'},
        {value: 'oddish-1', viewValue: 'Oddish'},
        {value: 'bellsprout-2', viewValue: 'Bellsprout'}
      ]
    },
    {
      name: 'Water',
      pokemon: [
        {value: 'squirtle-3', viewValue: 'Squirtle'},
        {value: 'psyduck-4', viewValue: 'Psyduck'},
        {value: 'horsea-5', viewValue: 'Horsea'}
      ]
    },
    {
      name: 'Fire',
      disabled: true,
      pokemon: [
        {value: 'charmander-6', viewValue: 'Charmander'},
        {value: 'vulpix-7', viewValue: 'Vulpix'},
        {value: 'flareon-8', viewValue: 'Flareon'}
      ]
    },
    {
      name: 'Psychic',
      pokemon: [
        {value: 'mew-9', viewValue: 'Mew'},
        {value: 'mewtwo-10', viewValue: 'Mewtwo'},
      ]
    }
  ];
  // 样式
  panelColor = new FormControl('red');

  constructor() {
  }

  ngOnInit() {
  }

}
