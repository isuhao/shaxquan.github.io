require=function n(e,r,t){function o(u,p){if(!r[u]){if(!e[u]){var c="function"==typeof require&&require;if(!p&&c)return c(u,!0);if(i)return i(u,!0);var a=new Error("Cannot find module '"+u+"'");throw a.code="MODULE_NOT_FOUND",a}var f=r[u]={exports:{}};e[u][0].call(f.exports,function(n){var r=e[u][1][n];return o(r?r:n)},f,f.exports,n,e,r,t)}return r[u].exports}for(var i="function"==typeof require&&require,u=0;u<t.length;u++)o(t[u]);return o}({SheepAnimControl:[function(n,e,r){"use strict";cc._RFpush(e,"7baf60QNUFDPJsge4XQSpt1","SheepAnimControl"),cc.Class({"extends":cc.Component,properties:{anim:cc.Animation},playRun:function(){this.anim.play("sheep_anim_run")},playJump:function(){this.anim.play("sheep_anim_jump")},onLoad:function(){}}),cc._RFpop()},{}]},{},["SheepAnimControl"]);