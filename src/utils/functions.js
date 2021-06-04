const Functions = () => {

  return {
    getDateFormat: (param) => {
      var dateFormat = param.substr(0, 10)
      let date = new Date(dateFormat);
      let options = { year: 'numeric', month: 'long', day: 'numeric' };
      return date.toLocaleDateString('en-US', options)
    }
  }
}

export default Functions()