function solution() {
    //לקיחת התרגיל מתיבת הטקסט
    let mathProblem = document.getElementById('mathProblem').value+='=';
    //משתני עזר
    let str = '';
    let num1 = 0;
    let num2 = 0;
    let aritmetic = '';
    let flag = 0;
    let result = 0;
    //פתרון התרגיל
    for (let i = 0; i < mathProblem.length; i++) {
        // אם זה ערך מספרי או נקודה תוסיף למחרוזת
        if (mathProblem[i] >= '0' && mathProblem[i] <= '9' || mathProblem[i] == '.') {
            str += mathProblem[i];
        }
        //אם זה סימן אריטמטי
        else {
            //במידה ויש שני סימונים אריטמטים אחד אחרי השני 
            //תזרוק שגיאה 
            if(mathProblem[i+1]<'0'||mathProblem[i+1]>'9')
            {
                alert('wrong aretmetic problem!!');
            }
            //אם זה הסימן הארטמטי השני 
            //צריך להתחיל לחשב את התרגיל
            if (flag == 1) {
                num2 = Number(str);
                switch (aritmetic) {
                    case '*':
                        result = num1 * num2;
                        break;
                    case '-':
                        result = num1 - num2;
                        break;
                    case '+':
                        result = num1 + num2;
                        break;
                    case '/':
                        result = num1 / num2;
                        break;
                    case '%':
                        result = num1 % num2;
                        break;

                    default:
                        alert('wrong aritmetic problem!!');
                        break;
                }
                //דגל שווה לשתיים כדי שילך לבצע בדיקה בהמשך
                flag = 2;

            }
            //אם זה הסימון הארטמטי הראשון 
            // צריך להמשיך לבדוק מהו המספר שאחריו ורק אחכ לבצע חישוב
            else {
                num1 = Number(str);
                str = '';
                flag = 1;
                aritmetic = mathProblem[i];
            }
            //מגיע לכאן במידה וביצע כבר חיבור אריטמטי אחד
            if(flag==2)
            {
                //אם הסימון הנוכחי הוא שווה סימן שזהו סוף התרגיל 
                //ןמדפיסים את התוצאה
                if(mathProblem[i]=='=')
                {

                    console.log(result);
          document.getElementById('mathProblem').value = result;
                    
                    return result;
                }
                //אם זהו סימון ארטמטי אחר
                //שימשיך לחשב
                
                else
                {
                    num1=result;
                    flag=1;
                    str='';
                    aritmetic=mathProblem[i];

                }
            }
        }
    }
}

function pushButton(buttonValue)
{
     if (buttonValue == 'C')
     {
          document.getElementById('mathProblem').value = '';
     }
     else
     {
          document.getElementById('mathProblem').value += buttonValue;
     }
}


// function func(){
//     document.getElementById('dd1').value = 'orgad!!!';

// }
