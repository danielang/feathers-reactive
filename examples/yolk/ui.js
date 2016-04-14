import { h, render } from 'yolk'

import {wrapText} from 'yolk/lib/wrapText'

import 'rxjs/add/operator/merge'
import 'rxjs/add/operator/scan'
import 'rxjs/add/operator/startWith'
import rx from '../../lib'

import io from 'socket.io-client';
import feathers from 'feathers/client';
import socketio from 'feathers-socketio/client';

const socket = io();
const app = feathers()
  .configure(rx())
  .configure(socketio(socket));

const service = app.service('messages');



// service.find().subscribe(messages => console.log('msgs', messages));

function Messages ({props, children, createEventHandler}) {
  const messageItem = message => <li>{message.text}</li>;

  debugger
  return (
    <ul>
      {service.find().map(messages => messages.map(messageItem))}
    </ul>
  );
}

render(<Messages />, document.getElementById('container'))
