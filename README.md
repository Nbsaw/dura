## What is ruka ?

ruka is a blog system based on github issues . Powerful and simple .

### Features

- Zero Config
- WYSWYG
- Base on Github issues
- Comment system
- Flow

### [WIP] Install and start ruka

Use `yarn` or `npm` instal ruka , and modify the config file .

Use `yarn start` or `npm run start` to start ruka .

### How to Deploy ruka

> Thank of @LonelyLiaR submit a issues to me . He say if you have project page of github . You can't not direct deploy to `<username>.github.io` . The homepage will conflict to the project page . I have no solution for the time being .

You can use free cdn to deploy you blog anywhere . I recommend use [surge.sh](https://surge.sh/) to deploy . Because it's free and it's domain is cooool.

You should install surge first 

``` shell
npm install --global surge
```

Ant then you need to build blog 

``` shell
npm run build
```

At last you just type `surge` , and you know what you do next.

### Todo List

- [X] Article
- [X] Mobile Responsive
- [X] Works Preview
- [X] Timeline
- [ ] Comment System
