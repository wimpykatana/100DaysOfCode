import React, { useEffect, useState } from 'react';
import Button from './Button';

const Calc = () => {
  const [firstNum, setFirstNum] = useState(null);
  const [secondNum, setSecondNum] = useState(null);
  const [operator, setOperator] = useState(null);
  const [displayNumber, setDisplayNumber] = useState(null);
  const [result, setResult] = useState(null);
  const [decimal, setDecimal] = useState(false);

  useEffect(() => {
    showNumber();
  }, [firstNum, secondNum]);

  const showNumber = () => {
    if (result) {
      setDisplayNumber(result);
    } else if (!operator) {
      setDisplayNumber(firstNum);
    } else {
      setDisplayNumber(secondNum);
    }
  };

  const handleNumber = (num) => {
    setResult(null);
    if (!firstNum && !operator) {
      setFirstNum(num.toString());
    } else if (firstNum && !operator) {
      setFirstNum(firstNum + num);
    } else if (!secondNum) {
      setSecondNum(num.toString());
    } else {
      setSecondNum(secondNum + num);
    }
  };

  const handleOperator = (val) => {
    setDecimal(false);
    if (result) {
      setFirstNum(result);
      setOperator(val);
    } else if (firstNum) {
      setOperator(val);
    }
    console.log('first num is null');
  };

  const handleDecimal = () => {
    console.log(decimal);
    if (!operator && !decimal) {
      if (!firstNum) {
        setFirstNum('0.');
        setDecimal(true);
      } else if (firstNum) {
        setFirstNum(firstNum + '.');
        setDecimal(true);
      }
    } else if (!decimal) {
      if (!secondNum) {
        setSecondNum('0.');
        setDecimal(true);
      } else {
        setSecondNum(secondNum + '.');
        setDecimal(true);
      }
    }
  };

  const handleResult = () => {
    let tempResult;
    switch (operator) {
      case '+':
        tempResult = parseFloat(firstNum) + parseFloat(secondNum);
        setResult(tempResult.toString());
        handleClear();
        break;
      case '-':
        tempResult = parseFloat(firstNum) - parseFloat(secondNum);
        setResult(tempResult.toString());
        handleClear();
        break;
      case 'x':
        tempResult = parseFloat(firstNum) * parseFloat(secondNum);
        setResult(tempResult.toString());
        handleClear();
        break;
      case '/':
        tempResult = parseFloat(firstNum) / parseFloat(secondNum);
        setResult(tempResult.toString());
        handleClear();
      default:
        break;
    }
  };

  const handleClear = () => {
    setFirstNum(null);
    setSecondNum(null);
    setOperator(null);
    setDisplayNumber(0);
    setDecimal(false);
  };

  console.log(`calc: ${firstNum} ${operator} ${secondNum}`);

  return (
    <div className='calc-holder'>
      <div className='display-value'>
        <span className='value'>{displayNumber ? displayNumber : 0}</span>
      </div>
      <div className='button-holder'>
        <Button clickBtn={handleNumber} val={1} />
        <Button clickBtn={handleNumber} val={2} />
        <Button clickBtn={handleNumber} val={3} />
        <Button
          clickBtn={handleOperator}
          extraClass={'btn-operator'}
          val={'+'}
        />

        <Button clickBtn={handleNumber} val={4} />
        <Button clickBtn={handleNumber} val={5} />
        <Button clickBtn={handleNumber} val={6} />
        <Button
          clickBtn={handleOperator}
          extraClass={'btn-operator'}
          val={'-'}
        />

        <Button clickBtn={handleNumber} val={7} />
        <Button clickBtn={handleNumber} val={8} />
        <Button clickBtn={handleNumber} val={9} />
        <Button
          clickBtn={handleOperator}
          extraClass={'btn-operator'}
          val={'x'}
        />

        <Button clickBtn={handleNumber} extraClass={'btn-zero'} val={0} />
        <Button clickBtn={handleDecimal} extraClass={'btn-decimal'} val={'.'} />
        <Button
          clickBtn={handleOperator}
          extraClass={'btn-operator'}
          val={'/'}
        />

        <Button clickBtn={handleClear} extraClass={'btn-clear'} val={'C'} />
        <Button clickBtn={handleResult} extraClass={'btn-result'} val={'='} />
      </div>
    </div>
  );
};

export default Calc;
