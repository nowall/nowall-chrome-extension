// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function toggle(radioButton) {
  if (window.localStorage == null) {
    alert('Local storage is required for changing providers');
    return;
  }
  window.localStorage.enableRaw = document.getElementById('enable-raw').checked && 'yes' || 'no';
  window.localStorage.enableRemember = document.getElementById('enable-remember').checked && 'yes' || 'no';
}

function main() {
  if (window.localStorage == null) {
    alert("LocalStorage must be enabled for changing options.");
    document.getElementById('enable-raw').disabled = true;
    document.getElementById('enable-remember').disabled = true;
    return;
  }
  if(!window.localStorage.inited) {
    // default values
    window.localStorage.enableRaw = false;
    window.localStorage.enableRemember = true;
    window.localStorage.inited = true;
  }

  document.getElementById('enable-raw').checked = window.localStorage.enableRaw;
  document.getElementById('enable-remember').checked = window.localStorage.enableRemember;
}

document.addEventListener('DOMContentLoaded', function () {
  main();
  document.querySelector('#enable-raw').addEventListener('click', toggle);
  document.querySelector('#enable-remember').addEventListener('click', toggle);
});
