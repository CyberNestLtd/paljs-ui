/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

var position1 = ['left', 'right', 'top', 'bottom'];
var position2 = ['start', 'end'];
var position3 = ['topRight', 'topLeft', 'bottomRight', 'bottomLeft'];
var position4 = ['topStart', 'topEnd', 'bottomStart', 'bottomEnd'];
export function getPhysicalPosition(dir, position) {
  if (position1.includes(position) || position3.includes(position)) {
    return position;
  }
  switch (position) {
    case 'start':
      return dir === 'rtl' ? 'right' : 'left';
    case 'end':
      return dir === 'rtl' ? 'left' : 'right';
    case 'topStart':
      return dir === 'rtl' ? 'topRight' : 'topLeft';
    case 'topEnd':
      return dir === 'rtl' ? 'topLeft' : 'topRight';
    case 'bottomStart':
      return dir === 'rtl' ? 'bottomRight' : 'bottomLeft';
    case 'bottomEnd':
      return dir === 'rtl' ? 'bottomLeft' : 'bottomRight';
  }
  return position;
}
export function getLogicalPosition(dir, position) {
  if (position2.includes(position) || position4.includes(position)) {
    return position;
  }
  switch (position) {
    case 'right':
      return dir === 'rtl' ? 'start' : 'end';
    case 'left':
      return dir === 'rtl' ? 'end' : 'start';
    case 'topRight':
      return dir === 'rtl' ? 'topStart' : 'topEnd';
    case 'topLeft':
      return dir === 'rtl' ? 'topEnd' : 'topStart';
    case 'bottomRight':
      return dir === 'rtl' ? 'bottomStart' : 'bottomEnd';
    case 'bottomLeft':
      return dir === 'rtl' ? 'bottomEnd' : 'bottomStart';
  }
  return position;
}
export function isRightPosition(dir, position) {
  var physicalPosition = getPhysicalPosition(dir, position);
  return physicalPosition === 'topRight' || physicalPosition === 'bottomRight';
}
export function isTopPosition(dir, position) {
  var physicalPosition = getLogicalPosition(dir, position);
  return physicalPosition === 'topEnd' || physicalPosition === 'topStart';
}