import {useRef, useState} from 'react';

enum Operators {
  add,
  subtract,
  multiply,
  divide,
}

export const useCalculator = () => {
  const [lastNumb, setLastNumb] = useState('0');
  const [numb, setNumb] = useState('0');

  const lastOperation = useRef<Operators>();

  const clean = () => {
    setNumb('0');
    setLastNumb('0');
  };

  const positiveNegative = () => {
    if (numb.includes('-')) {
      setNumb(numb.replace('-', ''));
    } else {
      setNumb('-' + numb);
    }
  };

  const btnDelete = () => {
    let negative = '';
    let tempNumb = numb;

    if (numb.includes('-')) {
      negative = '-';
      tempNumb = numb.replace('-', '');
    }

    if (tempNumb.length > 1) {
      setNumb(negative + tempNumb.slice(0, -1));
    } else {
      setNumb('0');
    }
  };

  const changeNumbToLast = () => {
    if (numb.endsWith('.')) {
      setLastNumb(numb.slice(0, -1));
    } else {
      setLastNumb(numb);
    }
    setNumb('0');
  };

  const buildNumber = (textNumber: string) => {
    // Do not accept double points
    if (numb.includes('.') && textNumber === '.') {
      return;
    }
    // Do not accept 0 and .
    if (numb.startsWith('0') || numb.startsWith('-0')) {
      // Decimal point
      if (textNumber === '.') {
        setNumb(numb + textNumber);
        // Evaluate if there is a point
      } else if (textNumber === '0' && numb.includes('.')) {
        setNumb(numb + textNumber);
        // Evaluate if it is another zero and there is no point
      } else if (textNumber === '0' && !numb.includes('.')) {
        setNumb(numb);
        // 0.000005 is possible
      } else if (textNumber !== '0' && !numb.includes('.')) {
        setNumb(textNumber);
        // Different from zero, there is already a point
      } else {
        setNumb(numb + textNumber);
      }
    } else {
      setNumb(numb + textNumber);
    }
  };

  const btnDivide = () => {
    changeNumbToLast();
    lastOperation.current = Operators.divide;
  };

  const btnMultiply = () => {
    changeNumbToLast();
    lastOperation.current = Operators.multiply;
  };

  const btnSubtract = () => {
    changeNumbToLast();
    lastOperation.current = Operators.subtract;
  };

  const btnAdd = () => {
    changeNumbToLast();
    lastOperation.current = Operators.add;
  };

  const calculate = () => {
    const num1 = Number(numb);
    const num2 = Number(lastNumb);

    switch (lastOperation.current) {
      case Operators.add:
        setNumb(`${num1 + num2}`);
        break;
      case Operators.subtract:
        setNumb(`${num2 - num1}`);
        break;
      case Operators.multiply:
        setNumb(`${num1 * num2}`);
        break;
      case Operators.divide:
        setNumb(`${num2 / num1}`);
        break;
    }

    setLastNumb('0');
  };

  return {
    numb,
    lastNumb,
    clean,
    positiveNegative,
    btnDelete,
    btnDivide,
    btnMultiply,
    btnSubtract,
    btnAdd,
    calculate,
    buildNumber,
  };
};
