customer_banking_information = [
    {
      'first_name': 'Jonathan',
      'last_name': 'Young',
      'address_line_1': '123 Fake St',
      'address_line_2': 'Apt 321',
      'city': 'Chicago',
      'state': 'IL',
      'zip_code': '60611',
      'email': 'jon@codeplatoon.org',
      'current_balance': 123.45
    },
    {
      'first_name': 'Rod',
      'last_name': 'Levy',
      'address_line_1': '123 Main St',
      'address_line_2': '',
      'city': 'Seattle',
      'state': 'WA',
      'zip_code': '98101',
      'email': 'rod@codeplatoon.org',
      'current_balance': 999999.99
    },
    {
      'first_name': 'Tom',
      'last_name': 'Prete',
      'address_line_1': '123 State St',
      'address_line_2': '',
      'city': 'Chicago',
      'state': 'IL',
      'zip_code': '60610',
      'email': 'tom@codeplatoon.org',
      'current_balance': 345.67
    }
   ]
// Code Platoon Question #1
//write a function that takes in an obj and formats the data properly
const employeeData = (arr) => {
    let answer = ''
    let info = arr.forEach( (elem) => {
    answer += `Name: ${elem.first_name} ${elem.last_name}\n` +
    `Adress: ${elem.address_line_1}`
    if (elem.address_line_2.length > 1) {
        answer += `${elem.address_line_2}`
    }
     answer += ` ${elem.city}, ${elem.state} ${elem.zip_code}\n` +
    `Email Adress: ${elem.email}\n` +
    `Current Balance: $${elem.current_balance}\n`
    })
    return answer
}

console.log(employeeData(customer_banking_information))

// Code Platoon Question #2
// write a function that takes in a obj and a dollar amount and update the current blance
let myObj = {
    firstName: 'Bob',
    lastName: 'Johnson',
    position: 'Developer', 
    currentBalance: 100
}

const moneyChanges = (user, dollarAmount) => {
    let answerObj = {}
    for (let [key, value] of Object.entries(user)) {
        answerObj[key] = value
    } 
    answerObj['currentBalance'] = (user.currentBalance - dollarAmount)
    return answerObj
}
    
console.log(moneyChanges(myObj, 50))

   