import Manager from "../manager";

export const splitString = (input: string, output: string[] = []): string[] => {
  const {commandChar, commandEnd} = findCommand(input);
  if (commandChar === -1) {
    output.push(input);
    
    return output;
  }
  
  output.push(input.slice(0, commandChar).trim());
  output.push(input.slice(commandChar, commandEnd).trim());
  
  return splitString(input.slice(commandEnd).trim(), output);
}

export const findCommand = (input: string): {commandChar:number, commandEnd:number} => {
  const re = new RegExp(`\\${Manager.COMMAND}\\${Manager.BRACE[0]}[^\\${Manager.BRACE[1]}]+\\${Manager.BRACE[1]}`);
  const results = re.exec(input);
  
  if (results) {
    return {
      commandChar: input.indexOf(results[0]),
      commandEnd: input.indexOf(results[0]) + results[0].length,
    };
  } else {
    return {commandChar: -1, commandEnd: -1};
  }
}