import Router from 'next/router'
import React from 'react'

export default class Utility {

  constructor() {
    //
  }

  generateRandomString() {
    return Math.random().toString(15).substring(2, 11) + Math.random().toString(10).substring(2, 10);
  }

  getStates(name) {
    let {countries} = require('../data/Countries.json');
    let index = countries.findIndex(country => country.country == name);
    return countries[index].states;
  }

  trimString(length,str) {
    let total_length = str.length;
    if( total_length > length ) {
      let trimmedString = str.substring(0,length);
      trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")));
      return trimmedString + '...';
    } else {
      return str;
    }
  }

  setQuery(params, route) {
    var activeSearchParams = new URLSearchParams(document.location.search);
    var activeObject = {}
    for(var key of activeSearchParams.keys()) {
      var value = activeSearchParams.get(key)
      activeObject[key] = value;
    }

    var newURLObj = Object.assign(activeObject, params);
    var paramString = new URLSearchParams(newURLObj).toString();

    var opt = {
      'scroll': false
    }

    var baseURL = new URL('/', location.href).href;

    Router.push(
      `/${route}?` + paramString,
      '',
      opt
    );

  }
}

export const HTML = ({type, className, html}) => {
  return React.createElement(type ?? 'div', {
    className,
    dangerouslySetInnerHTML: {__html: html}
  })
}
