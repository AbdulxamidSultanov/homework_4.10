// ============
// 1-masala:
//  Berilgan massivdagi barcha elementlarni ekranga chiqaruvchi dastur yozing.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.forEach(function (value) {
  console.log(value);
});

// ============
// 2-masala:
//  Massivdagi har bir elementning kvadratini hisoblang va ekranga chiqaring.
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr2.forEach(function (value) {
  console.log(value ** 2);
});

// ============
// 3-masala:
//  Massivdagi barcha elementlarni ikkiga ko'paytiring va ularni yangi massivga joylang.
let multi;
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArr = [];
arr3.forEach(function (value) {
  multi = value * 2;
  newArr.push(multi);
});
console.log(newArr);

// ============
// 4-masala:
//  Berilgan massivdan 5 dan katta bo'lgan barcha elementlarni topib, ularni ekranga chiqaruvchi dastur yozing.
const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr4.forEach(function (value) {
  if (value > 5) {
    console.log(value);
  }
});

// ============
// 5-masala:
//  Har bir elementga 10 qo'shib, yangi massivga saqlang.
const arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum;
const newArr2 = [];
arr5.forEach(function (value) {
  sum = value + 10;
  newArr2.push(sum);
});

// ============
// 6-masala:
//  Massivdagi barcha juft sonlarni ekranga chiqaring.
const arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr6.forEach(function (value) {
  if (value % 2 == 0) {
    console.log(value);
  }
});

// ============
// 7-masala:
//  Har bir elementning teskari tartibini chiqaruvchi dastur yozing (reverse bilan).
const arr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr7.reverse().forEach(function (value) {
  console.log(value);
});

// ============
// 8-masala:
//  Berilgan massivdan "a" harfi mavjud bo'lgan elementlarni ekranga chiqaring (includes bilan).
const arr8 = ["abc", "bdc", "qwera", "dast", "fhtg"];

arr8.forEach((value) => {
  if (value.includes("a") === true) {
    console.log(value);
  }
});

// ============
// 9-masala:
//  Massivdagi har bir elementni yangi massivga indexOf orqali indeks bilan birlashtiring.
const arr9 = ["abc", "bdc", "qwera", "dast", "fhtg"];
const newArr3 = [];
arr9.forEach(function (value) {
  let indexArr = arr9.indexOf(value);
  newArr3.push(`${value}, (${indexArr})`);
});

// ============
// 10-masala:
//  Har bir elementni vergul orqali birlashtirib, satr ko'rinishida chiqaruvchi dastur yozing (join bilan).
const arr10 = ["abc", "bdc", "qwera", "dast", "fhtg"];
arr10.join(", ");

// ============
// 11-masala:
//  Massivdagi har bir elementdan faqat birinchi 3 belgisini chiqaruvchi dastur yozing (slice bilan).
const arr11 = ["abc", "bdc", "qwera", "dast", "fhtg"];
arr11.forEach((value) => {
  console.log(value.slice(0, 3));
});

// ============
// 12-masala:
//  Har bir elementning oxirgi belgisini chiqaruvchi dastur yozing.
const arr12 = ["abc", "bdc", "qwera", "dast", "fhtg"];
arr12.forEach((value) => {
  console.log(value.slice(-1));
});

// ============
// 13-masala:
//  Massivdagi har bir elementni uzunligiga qarab tartiblang va natijani ekranga chiqaring (sort bilan).
const arr13 = ["abc", "bdc", "qwera", "dast", "fhtg"];
console.log(arr13.sort((a, b) => b.length - a.length));

// ============
// 14-masala:
//  Har bir elementga oxiriga ! qo'shing va yangi massivga saqlang.
const arr14 = ["abc", "bdc", "qwera", "dast", "fhtg"];
const newArr4 = [];
arr14.forEach(function (value) {
  newArr4.push(`${value}!`);
});
console.log(newArr4);

// ============
// 15-masala:
// Berilgan massivning barcha elementlarini kichik harflarga o'zgartirib ekranga chiqaring.
// ============
// 16-masala:
//Massivdagi har bir elementni 2 barobar kattalashtirib yangi massivga saqlang.
const arr16 = [1, 2, 3, 4, 5, 6, 7];
let res = arr16.map(function (value) {
  return value * 2;
});
// ============
// 17-masala:
//Har bir elementning kvadratini hisoblab yangi massivga saqlang.
const arr17 = [1, 2, 3, 4, 5, 6, 7];
let res1 = arr17.map(function (value) {
  return value ** 2;
});
// ============
// 18-masala:
//Massivdagi barcha elementlarni teskari tartibda yangi massivga saqlang (reverse bilan).
const arr18 = [1, 2, 3, 4, 5, 6, 7];
let res2 = arr18.reverse().map(function (value) {
  return res2;
});
// ============
// 19-masala:
//Har bir elementdan oxirgi 3 ta belgisini olib yangi massivga saqlang (slice bilan).
const arr19 = ["qwerty", "uiopa", "sdfghmm", "jklzxmn", "cvbnmnn"];
let res3 = arr19.map(function (value) {
  let lastIndex = value.length;
  let nujniyIndex = value.length - 3;
  let res = value.slice(nujniyIndex, lastIndex);
  return res;
});
// ============
// 20-masala:
//Har bir elementni katta harf bilan yozib yangi massivga saqlang.
// ============
// 21-masala:
//Har bir elementga "Hello, " qo'shib yangi massivga saqlang.
const arr21 = ["qwerty", "uiopa", "sdfghmm", "jklzxmn", "cvbnmnn"];
let res4 = arr21.map(function (value) {
  res4.push(`Hello ${value}`);
  return res4;
});
// ============
// 22-masala:
//Har bir elementni ikki marta takrorlang va yangi massivga saqlang.
// ============
const arr22 = ["qwerty", "uiopa", "sdfghmm", "jklzxmn", "cvbnmnn"];
let res5 = arr22.map(function (value) {
  let res = [];
  res.push(value).push(value);
  return res;
});
// 23-masala:
//Har bir elementning uzunligini aniqlang va yangi massivga saqlang.
const arr23 = ["qwerty", "uiopa", "sdfghmm", "jklzxmn", "cvbnmnn"];
let res6 = arr23.map(function (value) {
  return value.length;
});

// ============
// 24-masala:
//Har bir elementning indeksini element bilan birlashtirib yangi massivga saqlang (indexOf bilan).
const arr24 = ["qwerty", "uiopa", "sdfghmm", "jklzxmn", "cvbnmnn"];
let res7 = arr24.map(function (value) {
  const res = [];
  let index = arr24.indexOf(value);
  res.push(`${value} index raqami ${index}`);
  return res;
});
// ============
// 25-masala:
//Har bir elementning teskari yozilishini hisoblab yangi massivga saqlang (split, reverse, join bilan).
const arr25 = ["qwerty", "uiopa", "sdfghmm", "jklzxmn", "cvbnmnn"];
let res8 = arr25.map(function (value) {
  return value.split("").reverse().join("");
});
// ============
// 26-masala:
//Massivdagi har bir elementdan boshidagi va oxiridagi belgisini olib tashlang (slice bilan).
const arr26 = ["qwerty", "uiopa", "sdfghmm", "jklzxmn", "cvbnmnn"];
let res9 = arr26.map(function (value) {
  return value.slice(1, -1);
});
// ============
// 27-masala:
//Massivdagi barcha elementlarni tartiblab yangi massivga saqlang (sort bilan).
const arr27 = ["qwerty", "uiopa", "sdfghmm", "jklzxmn", "cvbnmnn"];
let res10 = arr27.map(function (value) {
  const newArr5 = [];
  newArr5.push(arr27.sort());
  return newArr5;
});
// ============
// 28-masala:
//Har bir elementni katta harfga o‘zgartiring va yangi massivga saqlang.
// ============
// 29-masala:
//Har bir elementning uzunligi 5 dan katta yoki kichik ekanligini belgilang va yangi massivga saqlang.
const arr28 = [
  "qwerty",
  "uiopa",
  "sdfghmm",
  "jklzxmn",
  "cvbnmnn",
  "qwe",
  "asdf",
  "asdffg",
];
let res11 = arr28.map(function (value) {
  if (value.length > 5) {
    return "bu elementning uzunligi 5dan katta";
  } else {
    return "bu elementning uzunligi 5dan kichkina";
  }
});
// ============
// 30-masala:
//Har bir elementdan faqat sonlarni olib yangi massivga saqlang.
const arr29 = ["qwerty", "uiopa", "sdfghmm", "jklzxmn", "cvbnmnn"];
let res12 = arr29.map(function (value) {
  let slice = arr29.split("");
  return !isNaN(slice)
});
// ============
// 31-masala:
//Berilgan massivdan faqat juft sonlarni olib tashlang va yangi massivga saqlang.
const arr31 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let res13 = arr31.filter(function(value) {
  return value % 2 == 0
})
// ============
// 32-masala:
//Massivdan faqat manfiy sonlarni olib yangi massivga saqlang.
const arr32 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let res14 = arr32.filter(function(value) {
  return value < 0
})
// ============
// 33-masala:
//Berilgan massivdan "a" harfi mavjud bo'lgan elementlarni olib yangi massivga saqlang (includes bilan).
const arr33 = ["qwerty", "uiopa", "sdfghmm", "jklzxmn", "cvbnmnn", "qwe", "asdf", "asdffg",];
let res15 = arr33.filter(function(value) {
  return value.includes("a")
})
// ============
// 34-masala:
//Faqat uzunligi 5 dan katta bo'lgan elementlarni olib yangi massivga saqlang.
const arr34 = ["qwerty", "uiopa", "sdfghmm", "jklzxmn", "cvbnmnn", "qwe", "asdf", "asdffg",];
let res16 = arr34.filter(function(value) {
  return value.length > 5
})
// ============
// 35-masala:
//Berilgan massivdan faqat "test" so‘zini o‘z ichiga olgan elementlarni olib yangi massivga saqlang.
const arr35 = ["qwtesterty", "uiopa", "sdfghtestmm", "jklzxmn", "cvbnmnn", "qwteste", "asdf", "asdfftestg",];
let res17 = arr35.filter(function(value) {
  return value.includes("test")
})
// ============
// 36-masala:
//Massivdan faqat teskari tartibda joylashtirilgan elementlarni olib yangi massivga saqlang (reverse bilan).
const arr36 = ["qwtesterty", "uiopa", "sdfghtestmm", "jklzxmn", "cvbnmnn", "qwteste", "asdf", "asdfftestg",];
let res18 =arr36.filter(function(value){
  return value.reverse()
})
// ============
// 37-masala:
//Massivdan faqat 0 dan katta bo'lgan sonlarni olib yangi massivga saqlang.
const arr37 = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let res19 = arr37.filter(function(value){
  return value > 0
})
// ============
// 38-masala:
//Faqat sonlar mavjud bo'lgan elementlarni olib yangi massivga saqlang.
const arr38 = ["qwtesterty", "uiopa", "sdfghtestmm", "jklzxmn", "cvbnmnn", "qwteste", "asdf", "asdfftestg", -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let res20 = arr38.filter(function(value){
  return value === Number
})
// ============
// 39-masala:
//Faqat uzunligi 3 dan kichik bo‘lgan elementlarni olib yangi massivga saqlang.
const arr39 = ["qwe", "ui", "qwer", "q", "asd", "qw", "a", "cs", -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let res21 = arr39.filter(function(value){
  return value.length < 3
})
// ============
// 40-masala:
//Berilgan massivdan faqat unli harflardan iborat elementlarni olib yangi massivga saqlang.
// ============
// 41-masala:
//Faqat boshida "abc" bo‘lgan elementlarni olib yangi massivga saqlang (slice bilan).
const arr40 = ["abcqwe", "ui", "qabcwer", "qabc", "abcsd", "qwasd", "a", "cs", "-5abc"]
let res22 = arr40.filter(function(value){
  return value.slice(0,3) === "abc"
})
// ============
// 42-masala:
//Faqat oxirida "xyz" mavjud bo‘lgan elementlarni olib yangi massivga saqlang (slice bilan).
const arr41 = ["abcqwe", "ui", "qabcwer", "qabc", "abcsd", "qwasd", "a", "cs", "-5abc"]
let res23 = arr41.filter(function(value){
  return value.slice(-3) === "xyz"
})
// ============
// 43-masala:
//Berilgan massivdan faqat qiymati 10 dan kichik bo‘lgan sonlarni olib yangi massivga saqlang.
const arr42 = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let res24 = arr42.filter(function(value) {
  return value < 10
})
// ============
// 44-masala:
//Faqat "test" so‘zini o‘z ichiga olmagan elementlarni olib yangi massivga saqlang (includes bilan).
const arr44 = ["qwetestqwe", "test", "fatestfq", "qwe", "qweasd"]
let res25 = arr44.filter(function(value) {
  return value.includes("test")
})
// ============
// 45-masala:
//Faqat uzunligi eng uzun bo‘lgan elementlarni olib yangi massivga saqlang.