<script setup lang="ts">
import { reactive, ref } from "vue";
import type { scoreType, coordType, stateType } from "../type/type.model";
import useInterval from "../hooks/useInterval";

const canvasX = 1000;
const canvasY = 1000;
const initialSnake: number[][] = [
  [4, 10],
  [4, 10],
];
const initialReactIcon = [14, 10];
const scale = 50;
const timeDelay = 100;

const canvasRef = ref<HTMLCanvasElement | null>(null);

const state = reactive<stateType>({
  delay: timeDelay,
  isGameOver: false,
  speedUp: 20,
});

const scoreState = reactive<scoreType>({
  score: 0,
  highScore: localStorage.getItem("snakeScore"),
});

const coordState = reactive<coordType>({
  reactIcon: initialReactIcon,
  snake: initialSnake,
  direction: [0, -1],
});

console.log("aaaaaaaaa");

const click = (e: MouseEvent) => {
  const x = Math.floor(e.offsetX / scale);
  const y = Math.floor(e.offsetY / scale);
  console.log(x, y);
};

//スコアを更新する
const handleSetScore = (): void => {
  if (scoreState.score > Number(scoreState.highScore)) {
    localStorage.setItem("snakeScore", JSON.stringify(scoreState.score));
  }
};

//ゲームを開始する
const play = (): void => {
  console.log("play");
  coordState.snake = initialSnake;
  coordState.reactIcon = initialReactIcon;
  coordState.direction = [1, 0];
  state.delay = timeDelay;
  scoreState.score = 0;
  state.isGameOver = false;
  state.speedUp = 20;
};

const runGame = () => {
  console.log("www");
  const newSnake = [...coordState.snake];
  const newSnakeHead: number[] = [
    newSnake[0][0] + coordState.direction[0],
    newSnake[0][1] + coordState.direction[1],
  ];
  console.log("蛇の頭", newSnakeHead);
  //配列の先頭に追加
  newSnake.unshift(newSnakeHead);
  //Game over
  // if (checkCollision(newSnakeHead)) {
  //     state.delay = null;
  //     state.isGameOver = true;
  //     handleSetScore();
  //   }
  //check if snake ate the React Icon
  // if (!ReactIconAte(newSnake)) {
  //   newSnake.pop();
  // }
  coordState.snake = newSnake;
};

const changeDirection = (e: KeyboardEvent): void => {
  console.log(e.key);
  switch (e.key) {
    case "ArrowLeft":
      coordState.direction = [-1, 0];
      break;
    case "ArrowUp":
      coordState.direction = [0, -1];
      break;
    case "ArrowRight":
      coordState.direction = [1, 0];
      break;
    case "ArrowDown":
      coordState.direction = [0, 1];
      break;
  }
};
//0.1秒おきにrunGame()が一回呼ばれる
useInterval(() => runGame(), 100);
document.addEventListener("keydown", changeDirection);
</script>

<template>
  <div @keydown="changeDirection">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSISAMlSDXN3aCpjHjbdrUP4vebVgG-UhE-Aw&usqp=CAU"
      width="20"
      height="30"
      id="react"
      alt="react"
    />
    <canvas class="playArea" ref="canvasRef" width="1000px" height="1000px" />
    <div class="gameOver">Game Over</div>
    <button @click="play" class="playButton">Play</button>
    <div class="scoreBox">
      <h2>Score: {{ scoreState.score }}</h2>
      <h2 v-if="scoreState.highScore !== null">
        High Score: {{ scoreState.highScore }}
      </h2>
      <h2 v-else>can not get the highScore</h2>
      <h2>Left: {left}</h2>
      <h2>Speed: {{ state.speedUp }}</h2>
    </div>
    <div @click="click">click</div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");
body {
  background: white;
  font-family: "Press Start 2P", cursive;
}

.playArea {
  border: 5px solid purple;
  border-radius: 10px;
  width: 585px;
  height: 460px;
  position: fixed;
  top: 43.2%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: black;
}

#react {
  display: none;
}

.gameOver {
  position: fixed;
  top: 43.2%;
  left: 50%;
  font-family: "Press Start 2P", cursive;
  transform: translate(-50%, -50%);
  color: red;
  font-size: 35px;
}

.playButton {
  position: fixed;
  top: 82%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  background: black;
  border: 2px solid white;
  padding: 10px;
  font-size: 0.9em;
  box-shadow: 4px 4px 0px 0px purple;
  font-family: "Press Start 2P", cursive;
  font-weight: 700;
  letter-spacing: 5px;
  text-transform: uppercase;
}

.scoreBox {
  float: right;
  border: 5px solid purple;
  border-radius: 10px;
  margin: 30px;
  margin-top: 50px;
  font-family: "Press Start 2P", cursive;
  background: black;
  color: white;
}

h2 {
  font-size: 18px;
  padding: 10px;
}
</style>
