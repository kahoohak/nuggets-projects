function User(name, age, career, work) {
  this.name = name;
  this.age = age;
  this.career = career;
  this.work = work;
}

function Factory(name, age, career) {
  let work;

  switch (career) {
    case "coder":
      work = ["code"];
      break;

    case "tester":
      work = ["test"];
      break;

    case "boss":
      work = ["sleep"];
      break;

    default:
      break;
  }

  return new User(name, age, career, work);
}

const user1 = new Factory("zxc", 30, "coder");
const user2 = new Factory("jsl", 30, "tester");

console.log(user1, user2);
