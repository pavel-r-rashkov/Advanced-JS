var specialConsole = (function() {
  function write(type, message) {
    var replacers = arguments;
    
    message = message.replace(/\{(\d)\}/g, function(match, p1) { 
      if(replacers[Number(p1) + 2] === undefined) {
        throw new Error("Invalid arguments!");
      }else {
        return replacers[Number(p1) + 2]; 
      }
    });
    console.log(type + ": " + message.toString());
  }

  return {
    writeLine: write.bind(null, "Message"),
    writeError: write.bind(null, "Error"),
    writeWarning: write.bind(null, "Warning"),
    writeInfo: write.bind(null, "Info")
  }
})();

specialConsole.writeLine("ASDF");
specialConsole.writeWarning("wa!{0}!r!{1}!ning..{0}..", "zero", "first");
specialConsole.writeError("Erro{0}r....", "zero");
specialConsole.writeInfo("Info....{0}", "zero");
