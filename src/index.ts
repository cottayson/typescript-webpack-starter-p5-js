import "./styles.css";
import * as _ from "lodash";
import { Point } from "./point";
import * as p5 from "p5";

let s = (p: any) => {
  let value: number = 0;
  p.setup = () => {
    p.createCanvas(innerWidth, innerHeight);
    p.background(40);
    const message = document.getElementById('message');
    if (message === null) {
      console.error(`Not found element message`);
    } else {
      message.innerHTML = `Hello p5.js! ❤️ Press any key to see that square changing color!`;
    }
    p.print(new Point(3, 4).length === 5);
    // You can see "true" in console
  };

  p.draw = () => {
    p.fill(value);
    p.rect(25, 25, 50, 50);
    // how to change font?
    // p.font()
    // p.text("Hello p5.js", 100, 100);
  };
  p.keyPressed = () => {
    if (value === 0) {
      value = 255;
    } else {
      value = 0;
    }
    p.print("Pressed key: ", p.key);
  }
};

const P = new p5(s);
