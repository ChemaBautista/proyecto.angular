import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as moment from 'moment';
import {Users} from './users';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  fecha = moment().format('LL');
  users: Users = {
    id: 1,
    username: '',
    password: ''
  };

  sendData(username): void {
    // this.selectedHero = hero;
    console.log(username);
  }

  constructor() {
    const now = moment(); // add this 2 of 4
    console.log('hello world', now.format()); // add this 3 of 4
    console.log(now.add(7, 'days').format()); // add this 4of 4
  }

  ngOnInit() {
    $(function() {
      const textfield = $('input[name=user]');
        $('button[type="submit"]').click(function(e) {
            e.preventDefault();
            // little validation just to check username
            if (textfield.val() !== '') {
                // $('body').scrollTo('#output');
                $('#output').addClass('alert alert-success animated fadeInUp')
                .html('Welcome back ' + '<span style="text-transform:uppercase">' + textfield.val() + '</span>');
                $('#output').removeClass(' alert-danger');
                $('input').css({
                'height': '0',
                'padding': '0',
                'margin': '0',
                'opacity': '0'
                });
                // change button text
                $('button[type="submit"]').html('continue')
                .removeClass('btn-info')
                .addClass('btn-default').click(function() {
                $('input').css({
                'height': 'auto',
                'padding': '10px',
                'opacity': '1'
                }).val('');
                });

                // show avatar
                $('.avatar').css({
                    'background-image': 'url("http://api.randomuser.me/0.3.2/portraits/women/35.jpg")'
                });
            } else {
                // remove success mesage replaced with error message
                $('#output').removeClass('alert alert-success');
                $('#output').addClass('alert alert-danger animated fadeInUp').html('sorry enter a username ');
            }
            // console.log(textfield.val());
        });
      });
  }
}
