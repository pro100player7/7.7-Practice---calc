// честно сказать я делал сам, но есть три минуса 1 - я не смог придумать как получать 2 число до нажатия математических символов + - * /
                                            //    2 - когда калькулятор выдаёт ответ, можно нажать на цифры и они будут дописыватся к ответу (так не должно быть!)
                                            //    3 - если нажать несколько раз равно, то он себя ведет немного странно  
// немного страшновато смотреть мой код - согласен
let num1 = null; 
let num2 = null;
let operand = ''; // нужен в большинстве своём для записи 2 числа, по другому не смог придумать :(

function plus(firstNum,secondNum)
{   
    return firstNum + secondNum;
}
function minus(firstNum,secondNum)
{   
    return firstNum - secondNum;
}
function multiply(firstNum,secondNum)
{   
    return firstNum * secondNum;
}
function division(firstNum,secondNum)
{   
    if(secondNum === 0)
        return 'на ноль делить нельзя'
    return firstNum / secondNum;
}
function percent(firstNum,secondNum)
{   
    return (firstNum / 100) * secondNum; // процент человеческий, а не который в программировании)
}

const inputWindow = document.querySelector('#inputWindow');

document.querySelectorAll('.btn').forEach((el)=> // задумка была получить все кнопки разом и проверять какая нажата
{
    el.addEventListener('click', function()
    {
        if(typeof(Number(this.textContent)) == 'number') // идет проверка если нажата цифра
        {
            inputWindow.value += this.textContent;    // то записываем ее в переменную
        }

        switch(this.textContent) // проверка если введен символ, для '=' сделал отдельно чтобы было удобней читать код) 
        {
            case 'Очистить':
                inputWindow.value = '';
                break;

            case '+':
                operand = 'sum';
                num1 = parseInt(inputWindow.value);
                inputWindow.value = '';
                break;

            case '-':
                operand = 'minus';
                num1 = parseInt(inputWindow.value);
                inputWindow.value = '';
                break;

            case '*':
                operand = 'multiply';
                num1 = parseInt(inputWindow.value);
                inputWindow.value = '';
                break;

            case '/':
                operand = 'division';
                num1 = parseInt(inputWindow.value);
                inputWindow.value = '';
                break;

            case '%':
                operand = 'percent';
                num1 = parseInt(inputWindow.value);
                inputWindow.value = '';
                break;
        }


        if(el.textContent === '=')  // сделал отдельно чтобы было удобней читать код)
        {
            num2 = parseInt(inputWindow.value);
            switch(operand)
            {
                case "sum":
                    inputWindow.value =  plus(num1, num2);
                    break;

                case 'minus':
                    inputWindow.value =  minus(num1, num2);
                    break;

                case 'multiply':
                    inputWindow.value =  multiply(num1, num2);
                    break;

                case 'division':
                    inputWindow.value =  division(num1, num2);
                    break;

                case 'percent':
                    inputWindow.value =  percent(num1, num2);
                    break;
            } 
            num1 = null;
            num2 = null;
        }
    });   
});
