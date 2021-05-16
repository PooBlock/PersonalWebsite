"use strict";

const btnResume = document.querySelector(`.resume`);
const btnProjects = document.querySelector(`.projects`);

const overlay = document.querySelector(`.overlay`);
const resumeModal = document.querySelector(`.resume-modal`);
const projectsModal = document.querySelector(`.projects-modal`);

const removeOverlay = function () {
  overlay.classList.add(`hidden`);
};

const addOverlay = function () {
  overlay.classList.remove(`hidden`);
};

btnResume.addEventListener(`click`, function () {
  resumeModal.classList.remove(`hidden`);
  document.querySelector(`body`).style.height = `180vh`;
  addOverlay();
});

btnProjects.addEventListener(`click`, function () {
  projectsModal.classList.remove(`hidden`);
  document.querySelector(`body`).style.height = `180vh`;
  addOverlay();
});

overlay.addEventListener(`click`, function () {
  resumeModal.classList.add(`hidden`);
  projectsModal.classList.add(`hidden`);
  document.querySelector(`body`).style.height = `140vh`;
  removeOverlay();
});

//cool moving designs

//first one
let movingPart = document.querySelector(`main`);
let protos = document.querySelectorAll(`.proto`);

movingPart.addEventListener(`mousemove`, (event) => {
  let move2 = event.clientX * 0.1 + 4;

  protos.forEach((proto) => {
    proto.style.transform = `translateY(${move2}%)`;
  });
});

let protos1 = document.querySelectorAll(`.proto1`);

movingPart.addEventListener(`mousemove`, (event) => {
  let move2 = event.clientX * 0.1 + 4;

  protos1.forEach((proto1) => {
    proto1.style.transform = `translateY(-${move2}%)`;
  });
});

let protos2 = document.querySelectorAll(`.proto2`);

movingPart.addEventListener(`mousemove`, (event) => {
  let move2 = event.clientX * 0.1 + 4;

  protos2.forEach((proto2) => {
    proto2.style.transform = `translateY(${move2}%)`;
  });
});

let protos3 = document.querySelectorAll(`.proto3`);

movingPart.addEventListener(`mousemove`, (event) => {
  let move2 = event.clientX * 0.1 + 4;

  protos3.forEach((proto3) => {
    proto3.style.transform = `translateY(-${move2}%)`;
  });
});
