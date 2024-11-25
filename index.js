function fake_email(){
  const firstNames = [
      "Aaron", "Abigail", "Adam", "Addison", "Adrian", "Alexa", "Alexander", "Alice", "Amanda", "Amelia",
      "Andrew", "Angela", "Anna", "Anthony", "Ashley", "Austin", "Ava", "Benjamin", "Blake", "Brandon",
      "Brianna", "Brian", "Brooklyn", "Caleb", "Cameron", "Caroline", "Carter", "Charlotte", "Chloe", "Christian",
      "Christopher", "Claire", "Colin", "Connor", "Daisy", "Daniel", "David", "Delilah", "Dylan", "Eleanor",
      "Elijah", "Elizabeth", "Ella", "Emily", "Emma", "Ethan", "Evan", "Evelyn", "Gabriel", "Gavin",
      "Grace", "Grayson", "Hannah", "Harper", "Henry", "Hudson", "Isaac", "Isabella", "Isla", "Jack",
      "Jackson", "Jacob", "James", "Jasmine", "Jason", "Jayden", "Jonathan", "Jordan", "Joseph", "Joshua",
      "Julia", "Julian", "Kaitlyn", "Kayla", "Katherine", "Landon", "Layla", "Liam", "Lillian", "Logan",
      "Lucas", "Lucy", "Madeline", "Madison", "Mason", "Matthew", "Maya", "Michael", "Nathan", "Nicholas",
      "Noah", "Olivia", "Owen", "Penelope", "Ryan", "Samuel", "Sophia", "Thomas", "Victoria", "William"
  ];


  const lastNames = [
    "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez",
    "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin",
    "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson",
    "Walker", "Young", "Allen", "King", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores",
    "Green", "Adams", "Nelson", "Baker", "Hall", "Rivera", "Campbell", "Mitchell", "Carter", "Roberts",
    "Gomez", "Phillips", "Evans", "Turner", "Diaz", "Parker", "Cruz", "Edwards", "Collins", "Reyes",
    "Stewart", "Morris", "Morales", "Murphy", "Cook", "Rogers", "Gutierrez", "Ortiz", "Morgan", "Cooper",
    "Peterson", "Bailey", "Reed", "Kelly", "Howard", "Ramos", "Kim", "Cox", "Ward", "Richardson",
    "Watson", "Brooks", "Chavez", "Wood", "James", "Bennett", "Gray", "Mendoza", "Ruiz", "Hughes",
    "Price", "Alvarez", "Castillo", "Sanders", "Patel", "Myers", "Long", "Ross", "Foster", "Jimenez"
  ];

  let fName = firstNames[Math.floor(Math.random()*firstNames.length)];
  let lName = lastNames[Math.floor(Math.random()*lastNames.length)];

  let fullName = fName+lName;

  let email = fullName+"@gmail.com";

  return email;

}

function fake_name(){
  const firstNames = [
    "Aaron", "Abigail", "Adam", "Addison", "Adrian", "Alexa", "Alexander", "Alice", "Amanda", "Amelia",
    "Andrew", "Angela", "Anna", "Anthony", "Ashley", "Austin", "Ava", "Benjamin", "Blake", "Brandon",
    "Brianna", "Brian", "Brooklyn", "Caleb", "Cameron", "Caroline", "Carter", "Charlotte", "Chloe", "Christian",
    "Christopher", "Claire", "Colin", "Connor", "Daisy", "Daniel", "David", "Delilah", "Dylan", "Eleanor",
    "Elijah", "Elizabeth", "Ella", "Emily", "Emma", "Ethan", "Evan", "Evelyn", "Gabriel", "Gavin",
    "Grace", "Grayson", "Hannah", "Harper", "Henry", "Hudson", "Isaac", "Isabella", "Isla", "Jack",
    "Jackson", "Jacob", "James", "Jasmine", "Jason", "Jayden", "Jonathan", "Jordan", "Joseph", "Joshua",
    "Julia", "Julian", "Kaitlyn", "Kayla", "Katherine", "Landon", "Layla", "Liam", "Lillian", "Logan",
    "Lucas", "Lucy", "Madeline", "Madison", "Mason", "Matthew", "Maya", "Michael", "Nathan", "Nicholas",
    "Noah", "Olivia", "Owen", "Penelope", "Ryan", "Samuel", "Sophia", "Thomas", "Victoria", "William"
  ];


  const lastNames = [
    "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez",
    "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin",
    "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson",
    "Walker", "Young", "Allen", "King", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores",
    "Green", "Adams", "Nelson", "Baker", "Hall", "Rivera", "Campbell", "Mitchell", "Carter", "Roberts",
    "Gomez", "Phillips", "Evans", "Turner", "Diaz", "Parker", "Cruz", "Edwards", "Collins", "Reyes",
    "Stewart", "Morris", "Morales", "Murphy", "Cook", "Rogers", "Gutierrez", "Ortiz", "Morgan", "Cooper",
    "Peterson", "Bailey", "Reed", "Kelly", "Howard", "Ramos", "Kim", "Cox", "Ward", "Richardson",
    "Watson", "Brooks", "Chavez", "Wood", "James", "Bennett", "Gray", "Mendoza", "Ruiz", "Hughes",
    "Price", "Alvarez", "Castillo", "Sanders", "Patel", "Myers", "Long", "Ross", "Foster", "Jimenez"
  ];


  let fLen = firstNames.length;
  let lLen = lastNames.length;

  let fakeName = "";

  let fName = firstNames[Math.floor(Math.random()*fLen)];
  let lName = lastNames[Math.floor(Math.random()*lLen)];

  fakeName = fName+" "+lName;

  return {full_Name: fakeName, first_name: fName, last_name: lName};

}

function fake_card_details(){
  const numbers = "0123456789";
  let cardNum = "";
  let cvv = "";
  let expiry_date = "";
  let password = "";
  let name = fake_name();


  while(cardNum.length!==15) cardNum+=numbers[Math.floor(Math.random()*numbers.length)];
  while(cvv.length!==3) cvv+=numbers[Math.floor(Math.random()*numbers.length)];
  while(password.length!==4) password+=numbers[Math.floor(Math.random()*numbers.length)];
  const expiry_month = String(Math.floor(Math.random()*12)+1).padStart(2, "0");
  const expirt_year = String(new Date().getFullYear() + Math.floor(Math.random()*6)+1);
  expiry_date = expiry_month+"/"+expirt_year;
  
  return {
    name: name,
    password: password,
    expiry_date: expiry_date,
    cvv: cvv,
    card_number: cardNum,
  }
}

module.exports = {fake_name, fake_card_details, fake_email};
