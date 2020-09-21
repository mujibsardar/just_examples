import React, { useState } from "react";
import CodeHighlighter from "../CodeHighlighter/index";
import "./style.css";

export default function CardContent() {
  const [checkedOne, setCheckedOne] = useState(true);
  const [checkedTwo, setCheckedTwo] = useState(false);
  const [checkedThree, setCheckedThree] = useState(false);

  return (
    <div class="tab-wrapper">
      <input
        class="tab"
        id="tab1"
        name="nav"
        type="radio"
        checked={checkedOne}
        onChange={() => {
          console.log(`checked: ${checkedOne}`);
          setCheckedOne(!checkedOne);
          setCheckedTwo(false);
          setCheckedThree(false);
        }}
      />
      <label for="tab1">
        <span class="navicon fa fa-fw fa-code"></span>
      </label>
      <input
        class="tab"
        id="tab2"
        name="nav"
        type="radio"
        checked={checkedTwo}
        onChange={() => {
          console.log(`checked: ${checkedTwo}`);
          setCheckedOne(false);
          setCheckedTwo(!checkedTwo);
          setCheckedThree(false);
        }}
      />
      <label for="tab2">
        <span class="navicon fa fa-fw fa-comments"></span>
      </label>
      <input
        class="tab"
        id="tab3"
        name="nav"
        type="radio"
        checked={checkedThree}
        onChange={() => {
          console.log(`checked: ${checkedThree}`);
          setCheckedOne(false);
          setCheckedTwo(false);
          setCheckedThree(!checkedThree);
        }}
      />
      <label for="tab3">
        <span class="navicon fa fa-fw fa-info-circle"></span>
      </label>

      <div class="tab__copy" id="first_who">
        <h3>example title</h3>        
       <CodeHighlighter />
        <hr />      
      </div>

      <div class="tab__copy" id="second_what">
        <h3>comments</h3>
        <p>
          If you wish to make an apple pie from scratch, you must first invent
          the Universe. . .
        </p>
        <p>
          The sky calls to us. If we do not destroy ourselves, we will one day
          venture to the stars. Kindling the energy hidden in matter vanquish
          the impossible. Sea of Tranquility Tunguska event, prime number great
          turbulent clouds, the only home we've ever known consciousness
          culture. Bits of moving fluff preserve and cherish that pale blue dot
          tingling of the spine a still more glorious dawn awaits tingling of
          the spine science, intelligent beings tingling of the spine Drake
          Equation Tunguska event, how far away.
        </p>
      </div>
      <div class="tab__copy" id="third_how">
        <h3>description</h3>
        <p>
          Inconspicuous motes of rock and gas. Citizens of distant epochs,
          descended from astronomers bits of moving fluff, science extraordinary
          claims and extraordinary evidence white dwarf gathered by gravity
          Apollonius of Perga dispassionate extraterrestrial observer light
          years?
        </p>
        <hr />      
      </div>
    </div>
    
  );
}
