// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';
import {get} from "@loopback/rest"

export class HelloController {
  constructor() {}


    @get('/saludos')
    saludos(): string {
        return 'saludos amigos';
    }
}